import { metric } from "@trifoia/bmi-percentile-calculator";

export const calculateBMIAndPercentile = (
  weight: number,
  height: number,
  ageInMonths: number,
  sex: "m" | "f"
): { bmiTeen: number; percentile: number } => {
//   const heightInMeters = height / 100;
  const result = metric(weight, height, sex, ageInMonths);
  return {
    bmiTeen: result.bmi,
    percentile: result.percentile,
  };
};
