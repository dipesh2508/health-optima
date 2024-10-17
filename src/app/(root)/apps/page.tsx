import Sleep from "@/assets/images/sleep tracker.png";
import BMI from "@/assets/images/bmi.png";
import Water from "@/assets/images/water drinking.png";
import Task from "@/assets/images/to do list.png";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import MotionDiv from "@/components/animations/MotionDiv";
import MotionP from "@/components/animations/MotionP";

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
const page = () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl"
      >
        <h1 className="text-primary-900 mb-4 text-center font-serif text-5xl font-bold">
          Our Applications
        </h1>
        <h2 className="mb-12 text-center font-sans text-xl text-gray-600">
          Choose an App to Enhance Your Day-to-Day Life
        </h2>

        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.map((app, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex transform flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:flex-row"
            >
              <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
                <Image
                  src={app.image}
                  alt={app.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <div className="flex w-full flex-col justify-between p-6 sm:w-3/5">
                <div>
                  <h3 className="text-primary-800 mb-2 font-serif text-2xl font-semibold">
                    {app.name}
                  </h3>
                  <p className="mb-3 text-base font-medium text-gray-600">
                    {app.tagline}
                  </p>
                  <MotionP
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-4 text-sm text-gray-500"
                  >
                    {app.description}
                  </MotionP>
                </div>
                <Link href={app.link} className="mt-auto">
                  <Button className="w-full rounded-md px-4 py-2 text-base font-semibold text-white transition duration-300">
                    Explore {app.name}
                  </Button>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default page;
