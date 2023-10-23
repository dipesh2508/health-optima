import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white p-2 border-2 border-primary ease-in-out duration-250 hover:border-primary hover:text-primary hover:bg-transparent",
        destructive:
          "bg-red-500 text-slate-50 border-2 border-red-500 hover:text-red-500 hover:bg-transparent",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-secondary text-white p-2 border-2 border-secondary ease-in-out duration-250 hover:border-secondary hover:text-secondary hover:bg-transparent",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        warning: "bg-yellow-500 text-slate-50 border-2 border-yellow-500 hover:text-yellow-500 hover:bg-transparent",
        cta: "bg-purple-950 text-white p-2 border-2 border-purple-950 ease-in-out duration-250 hover:border-purple-950 hover:text-purple-950 hover:bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-3 py-1 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
