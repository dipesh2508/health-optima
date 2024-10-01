"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
