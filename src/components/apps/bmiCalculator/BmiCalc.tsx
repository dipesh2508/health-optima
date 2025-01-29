import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { string, z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
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
import { BmiTable } from "./BmiTable";
import { BmiChildTable } from "./BmiChildTable";
import { calculateBMIAndPercentile } from "@/utils/bmiCalculator";
import BmiBlog from "./BmiBlog";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

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

interface BmiValues {
  userId: string;
  heightFeet: number;
  heightInches: number;
  weight: number;
  bmi: number;
  gender: string;
  age: number;
}

interface PercentileResult {
  bmiVal: string;
  percentile: string;
  category: string;
}

const BlogSkeleton = () => (
  <Card className="flex h-auto w-full flex-col overflow-hidden border-none shadow-custom md:h-[200px] md:flex-row">
    <div className="relative h-[200px] w-full md:h-full md:w-[40%]">
      <Skeleton className="h-full w-full" />
    </div>
    <div className="flex w-full flex-col justify-between p-4 md:w-[60%]">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="mt-4 flex justify-start md:mt-auto">
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  </Card>
);

const BmiCalc = async () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      UserGender: "female",
      Age: 2,
      HeightFeet: 1,
      HeightInches: 1,
      Weight: 1,
    },
  });

  const [bmi, setBmi] = useState<string>("");
  const [toggleHeightUnit, setToggleHeightUnit] = useState<boolean>(true);
  const [toggleSex, setToggleSex] = useState(true);
  const [percentileRes, setPercentileRes] = useState<PercentileResult | null>(
    null,
  );
  const [isBmiChildren, setIsBmiChildren] = useState(true);

  const calBmiChildren = (val: fieldType, meters: number) => {
    try {
      // Validate gender
      const gender =
        typeof val.UserGender === "string" &&
        (val.UserGender[0] === "m" || val.UserGender[0] === "f")
          ? val.UserGender[0]
          : "f";

      // Validate weight and height
      const weight =
        val.Weight && typeof val.Weight === "number" ? val.Weight : 0;
      const height = meters && typeof meters === "number" ? meters : 0;

      if (!weight || !height) {
        throw new Error("Invalid weight or height");
      }

      // Validate age
      const ageInMonths =
        val.Age && typeof val.Age === "number" ? val.Age * 12 : 0;

      if (!ageInMonths) {
        throw new Error("Invalid age");
      }

      // Calculate BMI
      const { bmiTeen, percentile } = calculateBMIAndPercentile(
        weight,
        height,
        ageInMonths,
        gender,
      );

      if (!bmiTeen || !percentile) {
        throw new Error("Invalid BMI result");
      }

      console.log("BMI teen: ", bmiTeen);
      setBmi(bmiTeen.toFixed(2));

      setPercentileRes({
        bmiVal: bmiTeen.toFixed(2),
        percentile: percentile.toFixed(1),
        category: getCategory(percentile, bmiTeen),
      });
    } catch (error: any) {
      console.error("Error in BMI calculation: ", error);
      alert(`Error: ${error.message}`);
    }
  };

  const getCategory = (percentile: number, bmiTeen: number) => {
    if (percentile < 5) return "Underweight";
    if (percentile < 85) return "Normal weight";
    if (percentile < 95) return "Overweight";
    if (percentile >= 95 && (percentile >= 120 || bmiTeen >= 35))
      return "Severe Obesity";
    return "Obesity";
  };

  function handleBMISubmit(val: fieldType) {
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
      if (toggleHeightUnit) {
        bmiValue = (val.Weight / (meters * meters)).toFixed(1);
      } else {
        bmiValue = (val.Weight / (meters * meters)).toFixed(1);
      }
      setBmi(bmiValue);
    }
    console.log("Percetile Res object", percentileRes);
    console.log("BmI: ", bmi);
  }

  return (
    <>
      <div className="relative mx-24 my-14 grid max-h-[75vh] grid-cols-12 gap-8 rounded-md bg-cover bg-center px-10 py-7 shadow-lg shadow-purple-200">
        {/* Background Image */}
        <Image
          src={DoodleBg}
          alt="bmiBg"
          className="absolute inset-0 z-0 h-full w-full object-cover" // Position absolutely and cover the entire div
          fill // Makes the image fill the container
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleBMISubmit)}
            className="z-10 col-span-8 grid grid-cols-3 gap-x-8 gap-y-10"
          >
            <div className="col-span-2 flex w-full">
              <FormField
                control={form.control}
                name="UserGender"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex w-full space-x-6"
                      >
                        {/* Female Option */}
                        <FormItem className="flex w-full items-center space-x-3">
                          <FormControl>
                            <label className="w-full">
                              <RadioGroupItem
                                value="female"
                                className="sr-only"
                              />
                              <div
                                className={cn(
                                  "flex w-full grow cursor-pointer flex-col items-center gap-2 rounded-md border-2 bg-white px-3 pb-6 pt-4 hover:bg-purple-50",
                                  toggleSex
                                    ? "border-primary-4"
                                    : "border-transparent",
                                )}
                                onClick={() => setToggleSex((prev) => !prev)}
                              >
                                <div className="mb-1 flex w-14 items-center justify-center rounded-full bg-primary-5 px-2 py-4">
                                  <FaFemale className="text-2xl text-white" />
                                </div>
                                {/* Remove default margin from the paragraph */}
                                <p className="m-0 font-medium">Female</p>
                              </div>
                            </label>
                          </FormControl>
                        </FormItem>

                        {/* Male Option */}
                        <FormItem className="flex w-full items-center space-x-3">
                          <FormControl>
                            <label className="w-full">
                              <RadioGroupItem
                                value="male"
                                className="peer sr-only"
                              />
                              <div
                                className={cn(
                                  "flex w-full grow cursor-pointer flex-col items-center gap-2 rounded-md border-2 bg-white px-3 pb-6 pt-4 hover:bg-purple-50",
                                  toggleSex
                                    ? "border-transparent"
                                    : "border-primary-4",
                                )}
                                onClick={() => setToggleSex((prev) => !prev)}
                              >
                                <div className="mb-1 flex w-14 items-center justify-center rounded-full bg-primary-5 px-2 py-4">
                                  <FaMale className="text-2xl text-white" />
                                </div>
                                {/* Remove default margin from the paragraph */}
                                <p className="m-0 font-medium">Male</p>
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
                <FormItem className="mb-4 flex flex-col items-center gap-2 rounded-md bg-white px-3 py-2">
                  <h4 className="text-md mt-3 text-center font-medium">Age</h4>
                  <div className="flex items-center gap-3">
                    {/* Decrease Button */}
                    <Button
                      // variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full bg-primary-5 hover:border-primary-8 hover:bg-primary-8"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent form submission
                        const newValue = Math.max(0, Number(field.value) - 1); // Decrease by 1, ensure it doesn't go below 0
                        field.onChange(newValue); // Update the form value
                      }}
                      disabled={Number(field.value) <= 0} // Disable if value is 0 or less
                    >
                      <Minus className="h-4 w-4 text-white" />
                      <span className="sr-only">Decrease</span>
                    </Button>

                    {/* Input Field */}
                    <FormControl>
                      <Input
                        placeholder="Age"
                        {...field}
                        // type="number"
                        value={Number(field.value) || 2} // Default to 0 if field.value is undefined
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value === "" ? 2 : Number(value)); // Handle empty input
                        }}
                        className="h-12 w-16 border-primary-5 text-center" // Center the text
                      />
                    </FormControl>

                    {/* Increase Button */}
                    <Button
                      // variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full bg-primary-5 hover:border-primary-8 hover:bg-primary-8"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent form submission
                        const newValue = Number(field.value) + 1; // Increase by 1
                        field.onChange(newValue); // Update the form value
                      }}
                    >
                      <Plus className="h-4 w-4 text-white" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                </FormItem>
              )}
            />
            {toggleHeightUnit ? (
              <div className="col-span-2 flex gap-3 rounded-md bg-white px-3 py-4">
                <FormField
                  control={form.control}
                  name="HeightFeet"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter in feet"
                            {...field}
                            value={field.value || ""} // Ensure the value is not undefined
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            } // Convert to number
                          />
                        </FormControl>
                        <FormLabel>Ft</FormLabel>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="HeightInches"
                  render={({ field }) => (
                    <FormItem>
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
                          />
                        </FormControl>
                        <FormLabel>In</FormLabel>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  // variant="outline"
                  onClick={() => {
                    setToggleHeightUnit((prev) => !prev);
                  }}
                  className="px-6 py-4"
                >
                  Switch to cm
                </Button>
              </div>
            ) : (
              <div className="col-span-2 flex items-center justify-evenly gap-3 rounded-md bg-white px-3 py-4">
                <FormField
                  control={form.control}
                  name="HeightFeet"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter Height"
                            {...field}
                            value={field.value || ""} // Ensure the value is not undefined
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            } // Convert to number
                          />
                        </FormControl>
                        <FormLabel>Cm</FormLabel>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  // variant="outline"
                  onClick={() => {
                    setToggleHeightUnit((prev) => !prev);
                  }}
                  className="px-6 py-4"
                >
                  Switch to feet
                </Button>
              </div>
            )}

            <div className="grid-start-1 items-center gap-2 rounded-md bg-white px-5 py-4">
              <FormField
                control={form.control}
                name="Weight"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Input
                          placeholder="Enter Weight"
                          {...field}
                          type="number"
                          value={field.value || ""} // Ensure the value is not undefined
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormLabel>Kg</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-3 flex justify-center">
              <Button type="submit" className="px-10">
                Calculate BMI
              </Button>
            </div>
          </form>
        </Form>

        <BmiChart bmi={bmi} percentileRes={percentileRes} />
      </div>

      <div className="my-16">
        <div className="flex gap-6">
          <BmiTable />
          <BmiChildTable />
        </div>
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <BmiBlog />
      </Suspense>
    </>
  );
};

export default BmiCalc;
