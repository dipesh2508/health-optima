"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import bmiCalcImg from "@/assets/images/bmiCalcImg.png";
import BmiCalc from "@/components/apps/bmiCalculator/BmiCalc";
import { BmiTable } from "@/components/apps/bmiCalculator/BmiTable";
import { BmiChildTable } from "@/components/apps/bmiCalculator/BmiChildTable";
import BmiBlog from "@/components/apps/bmiCalculator/BmiBlog";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto">
      <BmiCalc />
      <div className="my-16">
        <div className="flex gap-6">
          <BmiTable />
          <BmiChildTable />
        </div>
      </div>
      <BmiBlog />
    </div>
  );
};

export default Page;
