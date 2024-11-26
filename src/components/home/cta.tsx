import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ctaData } from "@/constants";

const CTA = () => {
  return (
    <section 
      className="mx-8 my-12 flex flex-col items-center rounded-lg bg-primary-5 px-3 py-12 shadow-custom md:m-16"
      aria-label="Health Optima Applications"
    >
      <h3 className="text-md font-regular text-white md:text-xl">
        Unlock your Health Potential
      </h3>

      <h2 className="text-center font-serif text-xl font-semibold text-white md:text-4xl">
        Comprehensive Wellness Applications
      </h2>

      <div 
        className="mt-8 flex flex-col justify-center gap-8 md:flex-row"
        role="list"
        aria-label="Featured applications"
      >
        {ctaData.map((item, index) => (
          <div
            className="group relative scale-90 duration-300 ease-in-out hover:scale-100"
            key={index}
            role="listitem"
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              className="rounded-lg shadow-custom duration-100 ease-in-out"
              alt={`${item.title} - Health Optima Application Interface`}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 m-auto mb-8 bg-black bg-opacity-50 px-4 py-12 text-center text-lg duration-300 ease-in-out group-hover:mb-12 md:py-4">
              <h3 className="font-regular font-sans text-2xl text-background md:text-4xl">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <Link 
        href='/apps'
        aria-label="Explore all Health Optima applications"
      >
        <Button className="mt-8" variant={"cta"}>
          Explore Applications
        </Button>
      </Link>
    </section>
  );
};

export default CTA;
