"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import bmiCalcImg from "@/assets/images/bmiCalcImg.png";
import BmiCalc from "@/components/apps/bmiCalculator/BmiCalc";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto">
      <BmiCalc />
    </div>
  );
};

export default Page;
