import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import blog1 from "@/assets/images/blog 1.png";
import blog2 from "@/assets/images/blog 2.png";
import blog3 from "@/assets/images/blog 3.png";
import blog4 from "@/assets/images/blog 4.png";

const data = [
  {
    no: "01",
    image: blog1,
    category: "category",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.",
    link: "#",
  },
  {
    no: "02",
    image: blog2,
    category: "category",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.",
    link: "#",
  },
  {
    no: "03",
    image: blog3,
    category: "category",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.",
    link: "#",
  },
  {
    no: "04",
    image: blog4,
    category: "Wellness",
    title: "The Silent Struggle: Insomnia and How to Overcome It",
    description:
      "A pervasive sleep disorder that can have a devastating impact on your health, work, and relationships. Learn about the causes, effects, and practical solutions in this comprehensive blog.",
    link: "/blogs/The-Silent-Struggle",
    
  },
];
const blog = () => {
  return (
    <section className="mt-28 flex min-h-screen flex-col items-center">
      <h1 className="font-serif text-3xl font-bold md:text-5xl">
        Take a <span className="text-secondary">Look</span>
      </h1>

      <div className="content center mx-12 my-14 grid grid-cols-1 gap-12 md:mx-24 md:mt-28 md:grid-cols-2">
        {data.map((item, index) => (
          <div
            className="grid grid-cols-1 gap-3 align-middle md:grid-cols-2 md:content-center"
            key={index}
          >
            <div className="grid-1 grid content-center">
              <Image
                height={34}
                width={473}
                src={item.image}
                alt={item.title}
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
