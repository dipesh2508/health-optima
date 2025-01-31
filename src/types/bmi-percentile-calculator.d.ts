declare module "@trifoia/bmi-percentile-calculator" {
    export function metric(
      weight: number,
      height: number,
      sex: "m" | "f",
      ageInMonths: number
    ): { bmi: number; percentile: number };
  }
  