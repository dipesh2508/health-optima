import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { blogData } from "../constants";


const blog = () => {
  return (
    <section className="mt-28 flex min-h-screen flex-col items-center">
      <h1 className="font-serif text-3xl font-bold md:text-5xl">
        Take a <span className="text-secondary">Look</span>
      </h1>

      <div className="content center mx-12 my-14 grid grid-cols-1 gap-12 md:mx-24 md:mt-28 md:grid-cols-2">
        {blogData.map((item, index) => (
          <div
            className="grid grid-cols-1 gap-3 align-middle md:grid-cols-2 md:content-center"
            key={index}
          >
            <div className="grid-1 grid content-center">
              <Image
                height={34}
                width={473}
                src={item.image}
                alt=""
                className="rounded-md hover:shadow-custom"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-sans text-base font-light ">
                {item.category}
              </h1>

              <h1 className="font-serif text-2xl font-semibold leading-6">
                {item.title}
              </h1>
              <h1 className="mt-1 font-sans text-xs font-light">
                {item.description}
              </h1>
              <div className="flex justify-center md:justify-start">
                <Link href={item.link}>
                <Button variant={"secondary"} size={"sm"} className="mt-2">
                  Read
                </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/blogs">
        <Button variant={"secondary"}>See More</Button>
      </Link>
    </section>
  );
};

export default blog;
