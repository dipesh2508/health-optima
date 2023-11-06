"use client"
import Sleep from "@/assets/images/sleep tracker.png";
import BMI from "@/assets/images/bmi.png";
import Water from "@/assets/images/water drinking.png";
import Task from "@/assets/images/to do list.png";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { getSession, signIn } from "next-auth/react";
import { useState,useEffect, use } from "react";

const data = [
  {
    name: "Rest Assured",
    tagline: "Your Trusted Partner for Optimal Sleep Health",
    description:
      "Experience the science of sound sleep with our intuitive Sleep Tracker, providing personalized insights for a rejuvenated you.",
    link: "../apps/sleepTracker",
    image: Sleep,
  },
  {
    name: "BMI Wizard",
    tagline: "BMI Calculator for Wellness",
    description:
      "Calculate BMI, get insights, and set goals with our user-friendly BMI Calculator. Your path to wellness begins here.",
    link: "../apps/BMI",
    image: BMI,
  },
  {
    name: "Aquatrack",
    tagline: "Your Hydration Companion",
    description:
      "Stay hydrated with ease. Track your daily water intake and level up your wellness journey with personalized hydration goals",
    link: "",
    image: Water,
  },
  {
    name: "TaskMinder",
    tagline: "Where Tasks find their place",
    description:
      "Organize, prioritize, and conquer your day with our intuitive to-do list app. Your ultimate productivity partner is here.",
    link: "/apps/todo-list",
    image: Task,
  },
];

const apps = () => {
  
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const securePage=async () => {
      const session=await getSession()
      if (!session) {
        signIn("google")
      }
      else{
        setLoading(false)
      }
    }
    securePage()
  },[])

  if(loading){
    return<h2> Loading.. </h2>
  }

  return (
    <section className="m-12 my-8 md:mx-64">
      <h1 className="text-center font-serif text-4xl font-semibold text-primary md:text-6xl">
        Our Applications
      </h1>
      {data.map((app, index) => (
        <div
          key={index}
          className="my-8 flex flex-col items-center gap-1 md:flex-row md:items-start md:gap-4"
        >
          <Image
            src={app.image}
            alt={app.name}
            height={250}
            width={250}
            loading="lazy"
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-secondary md:text-5xl">
              {app.name}
            </h2>
            <h3 className="text-center font-sans text-xl font-light md:text-start md:text-3xl">
              {app.tagline}
            </h3>
            <p className="text-center font-sans text-sm font-normal md:text-start md:text-xl">
              {app.description}
            </p>
            <div>
              <Link href={app.link}>
              <Button size="sm">See</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default apps;
