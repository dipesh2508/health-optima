import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/animations/MotionDiv";

import { ctaData } from "@/constants";
import { Card } from "../ui/card";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CTA = () => (
  <section className="mx-8 my-12 flex flex-col items-center rounded-lg bg-primary-5 px-3 py-12 shadow-custom md:m-16">
    <MotionDiv
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="container mx-auto space-y-6"
    >
      <MotionDiv variants={item}>
        <h3 className="text-md font-regular text-center text-white md:text-xl">
          Unlock your Health Potential
        </h3>
      </MotionDiv>

      <MotionDiv variants={item}>
        <h2 className="text-center font-serif text-xl font-semibold text-white md:text-4xl">
          Comprehensive Wellness Applications
        </h2>
      </MotionDiv>

      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:gap-8 md:grid-cols-3">
        {ctaData.map((item, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Card className="group relative h-[300px] w-full overflow-hidden rounded-lg border-none p-0 shadow-custom">
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={`${item.title} - Health Optima Application Interface`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-medium text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
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

export default CTA;
