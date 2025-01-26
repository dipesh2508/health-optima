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
    bmiRange: "< 18.5",
    description: "May indicate malnutrition or other health issues",
    color: "bg-[#A855F7] text-white",
  },
  {
    category: "Normal weight",
    bmiRange: "18.5–24.9",
    description: "Generally considered healthy",
    color: "bg-[#9333EA] text-white",
  },
  {
    category: "Overweight",
    bmiRange: "25–29.9",
    description: "May increase risk of health issues",
    color: "bg-[#7E22CE] text-white",
  },
  {
    category: "Obesity",
    bmiRange: "≥ 30",
    description: "Increased risk of various health problems",
    color: "bg-[#6B21A8] text-white",
  },
];

export function BmiTable() {
  return (
    <Table className="bg-white">
      <TableCaption>BMI Categories and Health Implications</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Category</TableHead>
          <TableHead>BMI Range</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bmiCategories.map((category) => (
          <TableRow key={category.category}>
            <TableCell className="font-medium">
              <Badge className={category.color}>{category.category}</Badge>
            </TableCell>
            <TableCell>{category.bmiRange}</TableCell>
            <TableCell>{category.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
