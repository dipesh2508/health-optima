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
    <>
      <h1 className="mt-8 text-center font-serif text-4xl font-semibold text-purple-950">
        Sleep Tracker
      </h1>
      <div className=" mt-8 h-auto ">
        <div className=" m-4 box-border flex justify-evenly rounded-3xl border-2 border-purple-950 p-6">
          <div className="flex flex-col items-center rounded-lg border-2 bg-primary p-6">
            <h1 className="text-center font-sans text-4xl font-semibold">
              DAILY
            </h1>

            <form>
              <p className=" m-2 rounded-lg bg-white p-4 text-center text-3xl font-semibold text-black">
                XX : XX : XX
              </p>
              <div className=" flex  justify-around text-xl font-semibold">
                <Button className="m-4" size="sm" variant="secondary">
                  Start
                </Button>

                <Button className="m-4" size="sm" variant="destructive">
                  Stop
                </Button>

                <Button className="m-4" size="sm" variant="warning">
                  Reset
                </Button>
              </div>

              <Button className="m-4" size="sm" variant="cta">
                Submit
              </Button>
            </form>
          </div>

          <div className="m-4 rounded-lg border-2 bg-primary p-8 font-sans drop-shadow-2xl">
            <div>
              <div className="mr-12 mt-4 flex flex-row">
                <h1 className="p-3 text-2xl font-semibold">
                  Last 7 days Average Duration:
                </h1>
                <div className="w-36 rounded-lg bg-white">.</div>
              </div>
              <div>
                <h1 className="m-4 text-2xl font-semibold">Last 7 days:</h1>
              </div>
              <div className="flex flex-row gap-4">
                {data.map((data, index) => (
                  <div className="bg-white w-1/4 rounded-md p-2" key={index}>
                    {data.data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
