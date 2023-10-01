import popular1 from "@/assets/images/popular1.jpg";
import popular2 from "@/assets/images/popular2.jpg";
import popular3 from "@/assets/images/popular3.jpg";
import run from "@/assets/images/run.jpg";
import blog1 from "@/assets/images/blog 1.png";
import blog2 from "@/assets/images/blog 2.png";
import blog3 from "@/assets/images/blog 3.png";
import blog4 from "@/assets/images/blog 4.png";

import { FaTag } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const popular = [
  {
    name: "Title of the Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular1,
  },
  {
    name: "Title of the Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular2,
  },
  {
    name: "Title of the Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular3,
  },
];

const featured = [
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog3,
  },
  {
    category: "Wellness",
    name: "The Silent Struggle: Insomnia and How to Overcome It",
    description:
      "A pervasive sleep disorder that can have a devastating impact on your health, work, and relationships. Learn about the causes, effects, and practical solutions in this comprehensive blog.",
    link: "/blogs/The-Silent-Struggle",
    image: blog4,
  },
];

const blog = [
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog1,
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog2,
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog3,
  },
  {
    category: "Wellness",
    name: "The Silent Struggle: Insomnia and How to Overcome It",
    description:
      "A pervasive sleep disorder that can have a devastating impact on your health, work, and relationships. Learn about the causes, effects, and practical solutions in this comprehensive blog.",
    link: "/blogs/The-Silent-Struggle",
    image: blog4,
  },
];

const blogs = () => {
  return (
    <main>
      <section className="mx-8 my-12 px-2 md:mx-28">
        <h1 className="text-center font-serif text-2xl font-semibold text-purple-950 md:text-left md:text-4xl">
          Popular works
        </h1>
        <div className="my-8 flex flex-col gap-4 md:my-12 md:flex-row">
          {popular.map((app, index) => (
            <div key={index} className="flex flex-row gap-2 md:w-auto">
              <div className="grid content-center">
                <Image
                  height={121}
                  width={121}
                  src={app.image}
                  alt={app.name}
                  className="rounded-full shadow-custom"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-serif text-lg font-medium md:text-2xl">
                  {app.name}
                </h2>
                <p className="font-sans text-xs font-light md:text-sm">
                  {app.description}
                </p>
                <div>
                  <Button className="mt-1 py-1" size={"sm"}>
                    see
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-8 px-2 md:mx-28">
        <h1 className="text-center font-serif text-2xl font-semibold text-secondary md:text-left md:text-4xl">
          Featured
        </h1>
        <div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3">
            <div className="relative ml-0 w-72 md:w-96">
              <Image
                src={run}
                alt="featured image"
                height={384}
                width={384}
                className="rounded-3xl"
              />
              <div className="absolute left-0 top-0 h-72 w-72  rounded-3xl bg-black opacity-40 duration-200 ease-in-out hover:bg-transparent md:h-96 md:w-96"></div>
              <h4 className="absolute left-4 top-4 bg-black p-1 text-white">
                Featured
              </h4>
              <div className="absolute left-48 top-4 flex items-center gap-1 p-1 md:left-72 ">
                <FaTag />
                <h2 className="font-sans">Health</h2>
              </div>
              <div className="absolute bottom-8 left-8">
                <h1 className="font-serif text-3xl text-white">
                  Blog Title Goes here
                </h1>
                <p className="mr-8 font-sans text-xs text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </p>
              </div>
            </div>
            <div className="col-span-2 mt-4 flex flex-col items-center gap-8">
              {featured.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 align-middle md:grid-cols-3 md:content-center md:gap-3"
                >
                  <div className="grid items-center">
                    <Image
                      height={34}
                      width={300}
                      src={item.image}
                      alt=""
                      className="rounded-md hover:shadow-custom"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-span-2 mt-4 flex flex-col items-center text-center md:mt-0 md:items-start md:text-left">
                    <h1 className="font-sans text-base font-light ">
                      {item.category}
                    </h1>

                    <h1 className="font-serif text-2xl font-semibold leading-6">
                      {item.name}
                    </h1>
                    <h1 className="mt-1 font-sans text-xs font-light">
                      {item.description}
                    </h1>
                    <div className="flex justify-center md:justify-start">
                      <Link href={item.link}>
                      <Button
                        variant={"secondary"}
                        size={"sm"}
                        className="mt-2"
                      >
                        Read
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-8 my-16 px-2 md:mx-28">
        <h1 className=" text-center font-serif text-2xl font-semibold text-black md:text-left md:text-5xl">
          ALL <span className="text-purple-950">BLOGS</span>
        </h1>
        <div className="col-span-2 mt-8 flex flex-col items-center gap-12 md:mt-16">
          {blog.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 align-middle md:grid-cols-3 md:content-center md:gap-3"
            >
              <div className="grid-1 grid content-center">
                <Image
                  height={34}
                  width={500}
                  src={item.image}
                  alt=""
                  className="rounded-md hover:shadow-custom"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 mt-4 flex flex-col gap-1 text-center md:mt-0 md:gap-2 md:text-left">
                <h1 className="font-sans text-base font-light md:text-2xl ">
                  {item.category}
                </h1>

                <h1 className="font-serif text-lg font-semibold leading-6 md:text-4xl">
                  {item.name}
                </h1>
                <h1 className="mt-1 font-sans text-base font-light md:text-base">
                  {item.description}
                </h1>
                <div className="flex justify-center md:justify-start">
                  <Link href={item.link}><Button className="mt-2">Read</Button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default blogs;
