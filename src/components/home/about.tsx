import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const about = () => {
  return (
    <section className="my-4 grid grid-cols-1 items-center gap-0 bg-secondary py-24 md:grid-cols-3 md:gap-8">
      <div className="m-0 mx-20 my-4 rounded-lg bg-white px-4 py-8 shadow-custom md:mx-0 md:my-12 md:ml-40 md:px-16 md:py-32">
        <Image src={logo} height={480} width={800} alt="logo" loading="lazy" />
      </div>
      <div className="col-span-2 mx-16 flex flex-col items-center md:mx-0 md:mr-64 md:items-start">
        <h3 className="mb-4 text-sm font-light text-white md:text-2xl">
          Discover Our Story
        </h3>
        <h1 className="mb-4 font-serif text-3xl font-semibold text-white md:text-4xl">
          About Us
        </h1>
        <p className="text-justify font-sans text-sm font-light text-white md:text-base">
        At HealthOptima, we&#39;re dedicated to promoting comprehensive
              well-being through a diverse range of health-centric resources and
              tools. Our platform is your trusted companion on the journey to a
              healthier and more balanced life. <br />
              <br />
              Explore our extensive collection of health-related blog posts,
              carefully curated to inform, inspire, and empower you. Dive into
              topics spanning fitness, nutrition, mental health, and more.
              Whether you&#39;re seeking insights on the latest wellness trends
              or practical advice for daily living, our expertly crafted content
              is designed to enrich your understanding of holistic health.
        </p>
        <Link href="/about">
        <Button className="mt-4">learn more</Button>
        </Link>
      </div>
    </section>
  );
};

export default about;
