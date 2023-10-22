

import React from "react";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <>
      <h1 className="mt-8 text-center text-4xl font-medium">Sleep Tracker</h1>
      <div className=" mt-8 h-auto ">
        <div className=" m-4 box-border flex justify-evenly rounded-3xl border-2 p-6">
          <div className="flex flex-col items-center border-2 p-6">
            
            <h1 className="text-center text-4xl font-bold">DAILY</h1>]

            <form>
              <p className=" m-2 bg-white p-4 text-center text-3xl font-semibold text-black">
                XX : XX : XX
              </p>
              <div className=" flex  justify-around text-xl font-semibold">
              <Button
              
              className="m-4" size="sm" variant="secondary"
            >
              Start
            </Button>

            <Button
              
              className="m-4" size="sm" variant="destructive"
            >
              Stop
            </Button>

            <Button
              
              className="m-4" size="sm" variant="ghost"
            >
              Reset
            </Button>

              </div>

              <Button 
              
              className="m-4" size="sm" 
            >
              Submit
            </Button>

            </form>

          </div>

          <div className="border-2 m-4">
            <div>
                <h1 className="text-2xl p-3 font-semibold">Last 7 days Average Duration: <input ></input></h1>

                <div>
                    <h1 className="text-2xl font-semibold m-4">Last 7 days:</h1> 
                </div>

                <div className="border-2">
                 fetch the data herer
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;