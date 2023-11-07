"use client"

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Image from 'next/image';
import bmiCalcImg from "@/assets/images/bmiCalcImg.png";

const Page: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBMI] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const calcBmi = (e: React.FormEvent) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid height and weight');
    } else {
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBMI(bmiValue);

      if (parseFloat(bmiValue) < 25) {
        setMessage('You are underweight');
      } else if (parseFloat(bmiValue) >= 25 && parseFloat(bmiValue) < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="container mx-auto">
      <h2 className='text-center text-4xl p-4'>BMI Calculator</h2>
      <div className='flex flex-col-reverse sm:flex-row justify-center text-center p-6 m-4 sm:m-12'>
        <div className='w-full sm:w-2/3'>
          <Image
            src={bmiCalcImg}
            width={450}
            height={400}
            alt="Picture of doctor"
            className='items-center'
          />
        </div>
        <div className='w-full sm:w-1/3'>
          <form onSubmit={calcBmi}>
            <div className='bg-red-400 p-5 m-4 rounded-2xl'>
              <label className='mt-3 font-extralight text-3xl'>Your Height(m): </label>
              <input
                type='number'
                placeholder='Enter Your Height'
                className='mb-4 text-2xl'
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
              <br />
              <label className='mt-4 font-extralight text-3xl'>Your Weight(kg): </label>
              <input
                type='number'
                placeholder='Enter your weight'
                value={weight}
                className='text-2xl'
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
              <div className='mt-4'>
                <Button>Compute BMI</Button>
                <Button className="ml-4" variant="outline" onClick={reload}>Reload</Button>
              </div>
              <div className='p-6'>
                <h3>Your BMI is: {bmi} </h3>
                <p>{message}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;

