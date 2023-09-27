import Sleep from "@/assets/images/sleep tracker.png";
import BMI from "@/assets/images/bmi.png";
import Water from "@/assets/images/water drinking.png";
import Task from "@/assets/images/to do list.png";

import {Button} from "@/components/ui/button";

import Image from "next/image";

const data = [
  {
    name: "Rest Assured",
    tagline: "Your Trusted Partner for Optimal Sleep Health",
    description:
      "Experience the science of sound sleep with our intuitive Sleep Tracker, providing personalized insights for a rejuvenated you.",
    link: "",
    image: Sleep,
  },
  {
    name: "BMI Wizard",
    tagline: "BMI Calculator for Wellness",
    description:
      "Calculate BMI, get insights, and set goals with our user-friendly BMI Calculator. Your path to wellness begins here.",
    link: "",
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
    link: "",
    image: Task,
  },
];

const apps = () => {
  return (
    <section className="m-12 md:mx-64 my-8">
      <h1 className="text-center font-serif text-4xl md:text-6xl font-semibold text-primary">
        Our Applications
      </h1>
      {data.map((app, index) => (
        <div key={index} className="my-8 flex flex-col items-center md:items-start md:flex-row gap-1 md:gap-4">
            <Image src={app.image} alt={app.name} height={250} width={250} loading="lazy" className="rounded-lg shadow-lg"/>
          <div className="flex flex-col gap-2 items-center md:items-start md:gap-4">
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-semibold text-secondary">
              {app.name}
            </h2>
            <h3 className="font-sans text-xl md:text-3xl text-center md:text-start font-light">{app.tagline}</h3>
            <p className="font-sans text-sm md:text-xl font-normal text-center md:text-start">{app.description}</p>
            <div><Button size='sm'>See</Button></div>
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default apps;
