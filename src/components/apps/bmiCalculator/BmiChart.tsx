"use client";

import { Label, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartData = [
  { category: "Underweight", value: 15, fill: "#9333EA" },
  { category: "Normal weight", value: 45, fill: "#A855F7" },
  { category: "Overweight", value: 30, fill: "#C084FC" },
  { category: "Obesity", value: 10, fill: "#D8B4FE" },
  { category: "Morbid Obesity", value: 10, fill: "#7E22CE" },
];

const chartConfig = {
  value: {
    label: "Percentage",
  },
  underweight: {
    label: "Underweight",
    color: "#9333EA",
  },
  normalWeight: {
    label: "Normal weight",
    color: "#A855F7",
  },
  overweight: {
    label: "Overweight",
    color: "#C084FC",
  },
  obesity: {
    label: "Obesity",
    color: "#D8B4FE",
  },
  morbidObesity: {
    label: "Morbid Obesity",
    color: "#7E22CE",
  },
} satisfies ChartConfig;

export function BmiChart({ bmi }: { bmi: string }) {
  const [category, setCategory] = useState("Normal Weight");

  const [activeIdx, setActiveIdx] = useState<number>(1);
  useEffect(() => {
    const parsedBmi = parseFloat(bmi);
    if (isNaN(parsedBmi)) return; // Skip if BMI is invalid

    if (parsedBmi < 18.5) {
      setActiveIdx(0);
      setCategory("Underweight");
    } else if (parsedBmi >= 18.5 && parsedBmi < 24.9) {
      setActiveIdx(1);
      setCategory("Normal weight");
    } else if (parsedBmi >= 25 && parsedBmi < 29.9) {
      setActiveIdx(2);
      setCategory("Overweight");
    } else if (parsedBmi >= 30 && parsedBmi < 35) {
      setActiveIdx(3);
      setCategory("Obese");
    } else {
      setActiveIdx(4);
      setCategory("Morbid Obesity");
    }
  }, [bmi]);

  return (
    <Card className="z-10 col-span-4 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>BMI Distribution Chart</CardTitle>
        <CardDescription>Body Mass Index Categories</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
              activeIndex={activeIdx}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              <Label
                value="BMI"
                position="center"
                className="fill-muted-foreground text-lg font-bold"
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-5">
          {`You are ${category} with BMI Index: ${bmi}`}
        </div>
        {/* <div className="text-muted-foreground text-center leading-5">
          <p className="text-primary-9">BMI Categories:</p>
          <p>Underweight (&lt;18.5)</p>
          <p>Normal (18.5-24.9)</p>
          <p>Overweight (25-29.9)</p>
          <p>Obese (≥30)</p>
        </div> */}
      </CardFooter>
    </Card>
  );
}
