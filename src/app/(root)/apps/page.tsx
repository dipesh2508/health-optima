import Sleep from "@/assets/images/sleep tracker.png";
import BMI from "@/assets/images/bmi.png";
import Water from "@/assets/images/water drinking.png";
import Task from "@/assets/images/to do list.png";
import Link from "next/link";
import { auth } from '@clerk/nextjs/server';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

const data = [
  {
    name: "Sleep Tracker",
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
    name: "Water Tracker",
    tagline: "Your Hydration Companion",
    description:
      "Stay hydrated with ease. Track your daily water intake and level up your wellness journey with personalized hydration goals",
    link: "",
    image: Water,
  },
  {
    name: "Task Log",
    tagline: "Where Tasks find their place",
    description:
      "Organize, prioritize, and conquer your day with our intuitive to-do list app. Your ultimate productivity partner is here.",
    link: "/apps/todo-list",
    image: Task,
  },
];

const Apps = () => {

  const { userId } : { userId: string | null } = auth();

  if (!userId){
    redirect("/sign-in")
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 m-12 my-16 md:px-20">
      <h1 className="sm:col-span-2 text-center font-serif text-4xl font-semibold text-primary-10 md:text-5xl">
        Our Applications
      </h1>
      <h2 className="text-black font-medium text-center text-lg sm:col-span-2 mt-4 mb-2">Choose an App to Enhance Your Day-to-Day Life</h2>
      {data.map((app, index) => (
        <div
          key={index}
          className="my-6 hover:scale-105 transition duration-300 flex flex-col items-center md:flex-row md:items-start md:gap-4 p-4 bg-white shadow-lg"
        >
          <Image
            src={app.image}
            alt={app.name}
            height={248}
            width={248}
            loading="lazy"
            className="rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
            <h2 className="mt-4 font-serif text-xl font-semibold text-secondary md:text-3xl min-h-8">
              {app.name}
            </h2>
            <h3 className="text-center font-sans text-xl font-light md:text-start md:text-2xl min-h-14">
              {app.tagline}
            </h3>
            <div className="text-center font-sans text-sm font-normal md:text-start md:text-sm min-h-16">
              {app.description}
            </div>
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

export default Apps;
