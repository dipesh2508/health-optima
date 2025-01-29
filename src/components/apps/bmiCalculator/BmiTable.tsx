import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const bmiCategories = [
  {
    category: "Underweight",
    bmiRange: "Less than 18.5",
    description: "May indicate malnutrition or other health issues",
    color: "bg-primary-4 text-white",
  },
  {
    category: "Normal weight",
    bmiRange: "18.5 to less than equal to 24.9",
    description: "Generally considered healthy",
    color: "bg-primary-5 text-white",
  },
  {
    category: "Overweight",
    bmiRange: "25 to less than equal to 29.9",
    description: "May increase risk of health issues",
    color: "bg-primary-8 text-white",
  },
  {
    category: "Obesity",
    bmiRange: "30 or less",
    description: "Increased risk of various health problems",
    color: "bg-[#50187D] text-white",
  },
  {
    category: "Severe Obesity",
    bmiRange: "30 or greater",
    description: "Increased risk of various health problems",
    color: "bg-[#371256] text-white",
  },
];

export function BmiTable() {
  return (
    <div className="flex w-1/2 flex-col gap-3">
      <h2 className="bg-gradient-to-r from-primary-6 to-primary-8 bg-clip-text text-3xl font-semibold text-transparent">
        BMI Categories for adults and Health Implications
      </h2>
      <Table className="rounded-md bg-white">
        <TableHeader>
          <TableRow className="rounded-md bg-primary-5 hover:bg-primary-6">
            <TableHead className="w-[150px] text-white">Category</TableHead>
            <TableHead className="w-[150px] text-white">
              BMI Range
            </TableHead>{" "}
            {/* Ensure consistent width */}
            <TableHead className="w-[200px] text-white">
              Description
            </TableHead>{" "}
            {/* Ensure consistent width */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bmiCategories.map((category) => (
            <TableRow key={category.category}>
              <TableCell
                className={`${category.category === "Severe Obesity" ? "pb-9" : ""} font-medium`}
              >
                <Badge className={category.color}>{category.category}</Badge>
              </TableCell>
              <TableCell
                className={`${category.category === "Severe Obesity" ? "pb-9" : ""}`}
              >
                {category.bmiRange}
              </TableCell>
              <TableCell
                className={`${category.category === "Severe Obesity" ? "pb-9" : ""}`}
              >
                {category.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
