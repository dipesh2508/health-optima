import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const About = () => {
  return (
    <section 
      className="my-4 grid grid-cols-1 items-center gap-0 bg-secondary py-24 md:grid-cols-3 md:gap-8"
      aria-label="About Health Optima"
    >
      <div className="m-0 mx-20 my-4 rounded-lg bg-white px-4 py-8 shadow-custom md:mx-0 md:my-12 md:ml-40 md:px-16 md:py-32">
        <Image 
          src={logo} 
          height={480} 
          width={800} 
          alt="Health Optima Logo and Brand Identity" 
          loading="lazy"
        />
      </div>
      <div className="col-span-2 mx-16 flex flex-col items-center md:mx-0 md:mr-64 md:items-start">
        <h3 className="mb-4 text-sm font-light text-white md:text-2xl">
          Discover Our Story
        </h3>
        <h2 className="mb-4 font-serif text-3xl font-semibold text-white md:text-4xl">
          About Health Optima
        </h2>
        <p className="text-justify font-sans text-sm font-light text-white md:text-base">
          At HealthOptima, we&apos;re dedicated to revolutionizing personal wellness through 
          innovative health-centric resources and cutting-edge tools. Our platform serves 
          as your trusted companion on the journey to a healthier, more balanced life.
          <br /><br />
          Explore our extensive collection of evidence-based health resources, 
          expertly curated to inform, inspire, and empower. From fitness and nutrition 
          to mental wellness and preventive care, our comprehensive content supports 
          your complete health transformation.
        </p>
        <Link 
          href="/about"
          aria-label="Learn more about Health Optima's mission and services"
        >
          <Button className="mt-4">Discover Our Mission</Button>
        </Link>
      </div>
    </section>
  );
};

export default About;
