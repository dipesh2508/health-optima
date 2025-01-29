import { metric } from "@trifoia/bmi-percentile-calculator";

/**
 * Calculates BMI and BMI Percentile using metric units.
 * @param weight Weight in kilograms
 * @param height Height in centimeters
 * @param ageInMonths Age in months
 * @param sex "m" for male, "f" for female
 * @returns Object containing BMI and BMI percentile
 */
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
