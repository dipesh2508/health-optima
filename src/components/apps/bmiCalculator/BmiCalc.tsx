import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { BmiChart } from "./BmiChart";
import DoodleBg from "@/assets/svgs/full_fitness_doodle.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { calculateBMIAndPercentile } from "@/utils/bmiCalculator";
import { useCallback } from "react";
import { toast } from "@/hooks/use-toast";
import { useApi } from "@/hooks/useApi";
import Loading from "@/app/(root)/loading";
import { validateHeaderName } from "http";
import { useUserDetails } from "@/hooks/useUserDetails";

const schema = z.object({
  UserGender: z.string(),
  Age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .refine((value) => value >= 2, {
      message: "Age must be greater than or equal to 2",
    }),
  HeightFeet: z
    .number({
      required_error: "Height is required",
      invalid_type_error: "Height must be a number",
    })
    .refine((value) => value > 0, {
      message: "Height must be greater than 0",
    }),
  HeightInches: z
    .number({
      invalid_type_error: "Height must be a number",
    })
    .refine((value) => value >= 0 && value < 12, {
      message: "Inches must be between 0 and 11",
    }),
  Weight: z
    .number({
      required_error: "Weight is required",
      invalid_type_error: "Weight must be a number",
    })
    .refine((value) => value > 0, {
      message: "Weight must be greater than 0",
    }),
});

type fieldType = z.infer<typeof schema>;

interface PercentileResult {
  bmiVal: string;
  percentile: string;
  category: string;
}

interface bmiGetData {
  BmiHistory: {
    _id: string;
    userId: string;
    height: number;
    weight: number;
    bmi: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

const BmiCalc = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      UserGender: "female",
      Age: 35,
      HeightFeet: 5,
      HeightInches: 5,
      Weight: 62,
    },
  });

  const [bmi, setBmi] = useState<string>("");
  const [toggleHeightUnit, setToggleHeightUnit] = useState<boolean>(true);
  const [toggleSex, setToggleSex] = useState(true);
  const [percentileRes, setPercentileRes] = useState<PercentileResult | null>(
    null,
  );
  const [isBmiChildren, setIsBmiChildren] = useState(true);
  const { userId, isLoading: userLoading, bmi: prevBmi } = useUserDetails();

  const calBmiChildren = useCallback((val: fieldType, meters: number) => {
    try {
      const gender =
        typeof val.UserGender === "string" &&
        (val.UserGender[0] === "m" || val.UserGender[0] === "f")
          ? val.UserGender[0]
          : "f";

      const weight =
        val.Weight && typeof val.Weight === "number" ? val.Weight : 0;
      const height = meters && typeof meters === "number" ? meters : 0;

      if (!weight || !height) {
        throw new Error("Invalid weight or height");
      }

      const ageInMonths =
        val.Age && typeof val.Age === "number" ? val.Age * 12 : 0;

      if (!ageInMonths) {
        throw new Error("Invalid age");
      }

      const { bmiTeen, percentile } = calculateBMIAndPercentile(
        weight,
        height,
        ageInMonths,
        gender,
      );

      if (!bmiTeen || percentile == undefined || percentile == null) {
        console.log("bmiTeen: ", bmiTeen);
        console.log("percentile: ", percentile);

        throw new Error("Invalid BMI result");
      }

      setBmi(bmiTeen.toFixed(2));
      setPercentileRes({
        bmiVal: bmiTeen.toFixed(2),
        percentile: percentile.toFixed(1),
        category: getCategory(percentile, bmiTeen),
      });
    } catch (error: any) {
      console.error("Error in BMI calculation: ", error);
    }
  }, []);

  const getCategory = useCallback((percentile: number, bmiTeen: number) => {
    if (percentile < 5) return "Underweight";
    if (percentile < 85) return "Normal weight";
    if (percentile < 95) return "Overweight";
    if (percentile >= 95 && (percentile >= 120 || bmiTeen >= 35))
      return "Severe Obesity";
    return "Obesity";
  }, []);

  const { error, isLoading, mutate } = useApi<null>(`/api/bmi`, {
    method: "POST",
    onSuccess: (data) => {
      toast({
        title: "Bmi Calculated",
        description: "Your BMI has been calculated successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error calculating BMI",
      });
    },
  });
  const {
    error: putError,
    isLoading: putIsLoading,
    mutate: putMutate,
  } = useApi<null>(`/api/bmi`, {
    method: "PUT",
    onSuccess: (data) => {
      console.log("Data put successfully");

      toast({
        title: "Bmi Calculated",
        description: "Your BMI has been calculated successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error updating bmi",
      });
    },
  });
  const {
    data: getData,
    error: getError,
    isLoading: getLoading,
  } = useApi<bmiGetData>(`/api/bmi?userId=${userId}`, {
    method: "GET",
    enabled: !!prevBmi,
    dependencies: [prevBmi],
    onSuccess: (data) => {
      console.log("get data", data);

      toast({
        title: "Bmi Data Fetched",
        description: "Bmi data successfully fetched",
      });
    },
    onError: (error) => {
      console.log(error);
      if (
        error.cause === 404 ||
        error?.message === "No BMI data found at fetchData"
      ) {
        console.log("prev BMI: ", prevBmi);
        console.log("BMI data not found. Continuing execution.");
      }
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error fetching BMI data",
      });
    },
  });

  const handleBmiApi = useCallback(
    async (data: fieldType, meters: number) => {
      await mutate({
        body: {
          userId: userId,
          height: meters * 100,
          weight: data.Weight,
          bmi: Number(bmi),
          gender: data.UserGender,
          age: data.Age,
        },
      });
    },
    [bmi, mutate, userId],
  );

  const bmiUpdateApi = useCallback(
    async (data: fieldType, meters: number) => {
      await putMutate({
        body: {
          bmiId: getData?.BmiHistory?._id,
          height: meters * 100,
          weight: data.Weight,
          bmi: Number(bmi),
          gender: data.UserGender,
          age: data.Age,
        },
      });
    },
    [bmi, putMutate],
  );

  const handleBMISubmit = useCallback(
    (val: fieldType) => {
      let bmiValue;
      let meters;
      if (toggleHeightUnit) {
        let feet = val.HeightFeet + val.HeightInches * 0.0833333333;
        meters = feet * 0.3048;
      } else {
        meters = val.HeightFeet * 0.01;
      }

      if (val.Age >= 2 && val.Age <= 20) {
        setIsBmiChildren(true);
        calBmiChildren(val, meters);
      } else {
        setIsBmiChildren(false);
        bmiValue = (val.Weight / (meters * meters)).toFixed(1);
        setBmi(bmiValue);
      }
      console.log("Inside handlesubmit getData", getData);
      console.log("prevbmi: ", prevBmi);

      if (prevBmi === "" || !prevBmi) handleBmiApi(val, meters);
      else bmiUpdateApi(val, meters);
    },
    [toggleHeightUnit, calBmiChildren, handleBmiApi, bmiUpdateApi, prevBmi],
  );

  if (isLoading || userLoading || getLoading || putIsLoading) {
    return <Loading />;
  }
  if (error || getError || putError) {
    return <div>Error loading list</div>;
  }

  return (
    <div className="relative my-14 grid grid-cols-12 gap-8 rounded-md bg-cover bg-center px-3 py-7 shadow-lg shadow-purple-200 md:mx-5 md:px-9 lg:mx-24 lg:max-h-[75vh] lg:px-10">
      <Image
        src={DoodleBg}
        alt="bmiBg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        fill
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleBMISubmit)}
          className="z-10 col-span-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 md:gap-y-10 lg:col-span-8"
        >
          <div className="flex w-full md:col-span-2">
            <FormField
              control={form.control}
              name="UserGender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex w-full space-x-1 md:space-x-6"
                    >
                      <FormItem className="flex w-full items-center md:space-x-3">
                        <FormControl>
                          <label className="w-full">
                            <RadioGroupItem
                              value="female"
                              className="sr-only"
                            />
                            <div
                              className={cn(
                                "flex w-full grow cursor-pointer flex-col items-center rounded-md border-2 bg-white pb-7 pt-6 hover:bg-purple-50 md:gap-2 md:px-3",
                                toggleSex
                                  ? "border-primary-4"
                                  : "border-transparent",
                              )}
                              onClick={() => setToggleSex((prev) => !prev)}
                            >
                              <div className="mb-3 flex w-11 items-center justify-center rounded-full bg-primary-5 px-2 py-3 md:w-16 md:py-4">
                                <FaFemale className="text-2xl text-white md:text-3xl" />
                              </div>
                              <p className="font-medium">Female</p>
                            </div>
                          </label>
                        </FormControl>
                      </FormItem>

                      <FormItem className="flex w-full items-center md:space-x-3">
                        <FormControl>
                          <label className="w-full">
                            <RadioGroupItem
                              value="male"
                              className="peer sr-only"
                            />
                            <div
                              className={cn(
                                "flex w-full grow cursor-pointer flex-col items-center rounded-md border-2 bg-white pb-7 pt-6 hover:bg-purple-50 md:gap-2 md:px-3",
                                toggleSex
                                  ? "border-transparent"
                                  : "border-primary-4",
                              )}
                              onClick={() => setToggleSex((prev) => !prev)}
                            >
                              <div className="mb-3 flex w-11 items-center justify-center rounded-full bg-primary-5 px-2 py-3 md:w-16 md:py-4">
                                <FaMale className="text-2xl text-white md:text-3xl" />
                              </div>
                              <p className="font-medium">Male</p>
                            </div>
                          </label>
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="Age"
            render={({ field }) => (
              <FormItem className="mb-4 flex flex-col items-center gap-2 rounded-md bg-white py-2 md:px-3">
                <h4 className="text-md mt-3 text-center font-medium">Age</h4>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full bg-primary-5 hover:border-primary-8 hover:bg-primary-8"
                    onClick={(e) => {
                      e.preventDefault();
                      const newValue = Math.max(0, Number(field.value) - 1);
                      field.onChange(newValue);
                    }}
                    disabled={Number(field.value) <= 0}
                  >
                    <Minus className="h-4 w-4 text-white" />
                    <span className="sr-only">Decrease</span>
                  </Button>

                  <FormControl>
                    <Input
                      placeholder="Age"
                      {...field}
                      value={Number(field.value) || ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? "" : Number(value));
                      }}
                      className="h-12 w-16 border-primary-5 text-center"
                    />
                  </FormControl>

                  <Button
                    type="button"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full bg-primary-5 hover:border-primary-8 hover:bg-primary-8"
                    onClick={(e) => {
                      e.preventDefault();
                      const newValue = Number(field.value) + 1;
                      field.onChange(newValue);
                    }}
                  >
                    <Plus className="h-4 w-4 text-white" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
                <p className="text-sm text-slate-600">Ages: 2 - 120</p>
              </FormItem>
            )}
          />
          {toggleHeightUnit ? (
            <div className="flex flex-row items-center gap-3 rounded-md bg-white px-4 py-3 md:col-span-2">
              <FormField
                control={form.control}
                name="HeightFeet"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0">
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter in feet"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                          className="h-9"
                        />
                      </FormControl>
                      <FormLabel className="mb-0">Ft</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="HeightInches"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    {" "}
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter in inches"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                          className="h-9"
                        />
                      </FormControl>
                      <FormLabel className="mb-0">In</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="button"
                onClick={() => setToggleHeightUnit((prev) => !prev)}
                className="h-9"
              >
                Switch to cm
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-md bg-white px-4 py-3 md:col-span-2">
              <FormField
                control={form.control}
                name="HeightFeet"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    {" "}
                    {/* Added flex-1 */}
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Height"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                          className="h-9"
                        />
                      </FormControl>
                      <FormLabel className="mb-0">Cm</FormLabel>{" "}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                onClick={() => setToggleHeightUnit((prev) => !prev)}
                className="h-9"
              >
                Switch to feet
              </Button>
            </div>
          )}

          <div className="flex items-center justify-center gap-3 rounded-md bg-white px-5 py-3 md:px-4">
            <FormField
              control={form.control}
              name="Weight"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex w-full items-center gap-2">
                    <FormControl className="flex-1">
                      <Input
                        placeholder="Enter Weight"
                        {...field}
                        type="number"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        className="h-9 w-full"
                      />
                    </FormControl>
                    <FormLabel className="mb-0">Kg</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center md:col-span-3">
            <Button type="submit" className="px-10">
              Calculate BMI
            </Button>
          </div>
        </form>
      </Form>

      <BmiChart bmi={bmi} percentileRes={percentileRes} />
    </div>
  );
};

export default BmiCalc;
