import React from "react";
import { Button } from "@/components/ui/button";

const data = [
  {
    data: ".",
  },
  {
    data: ".",
  },
  {
    data: ".",
  },
  {
    data: ".",
  },
  {
    data: ".",
  },
  {
    data: ".",
  },
  {
    data: ".",
  },
];
const page = () => {
  return (
    <main>
      <h1 className="mt-8 text-center font-serif text-4xl font-semibold text-purple-950">
        Sleep Tracker
      </h1>
      <div className=" mt-8 h-auto ">
        <div className=" my-4 mx-32 box-border flex justify-evenly rounded-3xl border-2 border-purple-950 p-6">
          <div className="flex flex-col items-center rounded-lg border-2 bg-primary p-6">
            <h1 className="text-center font-sans text-4xl font-semibold text-purple-950">
              DAILY
            </h1>

              <div className=" m-2 rounded-lg bg-background p-4 text-center text-3xl font-semibold text-purple-950">
                XX : XX : XX
              </div>
              <div className="flex flex-col gap-4">
                <div className=" flex justify-around text-xl font-semibold mt-4">
                  <Button className="mx-4" size="sm" variant="secondary">
                    Start
                  </Button>

                  <Button className="mx-4" size="sm" variant="destructive">
                    Stop
                  </Button>

                  <Button className="mx-4" size="sm" variant="warning">
                    Reset
                  </Button>
                </div>

                <Button className="mx-4" size="sm" variant="cta">
                  Submit
                </Button>
              </div>
          </div>

          <div className="m-4 w-1/2 rounded-lg border-2 bg-primary p-8 font-sans drop-shadow-2xl">
            <div>
              <div className=" mt-4 flex flex-row">
                <h1 className="p-3 text-2xl font-semibold text-purple-950">
                  Last 7 days Average Duration
                </h1>
                <div className="ml-8 w-1/3 rounded-lg bg-background">.</div>
              </div>
              <div>
                <h1 className="m-4 text-2xl font-semibold text-purple-950">Last 7 days:</h1>
              </div>
              <div className="m-4 flex flex-row gap-4">
                {data.map((data, index) => (
                  <div className="w-1/4 rounded-md bg-background p-2" key={index}>
                    {data.data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
