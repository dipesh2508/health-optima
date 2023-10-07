import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ctaData } from "../constants";


const cta = () => {
  return (
    <section className="mx-8 my-12 flex flex-col items-center rounded-lg bg-primary px-3 py-12 shadow-custom md:m-16">
      <h3 className="text-md font-regular text-white md:text-xl">
        Unlock your Potential
      </h3>

      <h1 className="text-center font-serif text-xl font-semibold text-white md:text-4xl">
        Harness the Power of our Applications
      </h1>

      <div className="mt-8 flex flex-col justify-center gap-8 md:flex-row">
        {ctaData.map((item, index) => (
          <div
            className="group relative scale-90 duration-300  ease-in-out hover:scale-100"
            key={index}
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              className="rounded-lg shadow-custom duration-100 ease-in-out"
              alt={item.title}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 m-auto mb-8 bg-black bg-opacity-50 px-4 py-12 text-center text-lg duration-300 ease-in-out group-hover:mb-12 md:py-4">
              <h1 className="font-regular font-sans text-2xl text-background md:text-4xl">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <Button className="mt-8" variant={"cta"}>
        learn more
      </Button>
    </section>
  );
};

export default cta;
