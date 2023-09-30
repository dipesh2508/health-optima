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
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
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
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog4,
  },
];

const blogs = () => {
  return (
    <main>
      <section className="mx-8 md:mx-28 my-12 px-2">
        <h1 className="font-serif text-4xl font-semibold text-center md:text-left text-purple-950">
          Popular works
        </h1>
        <div className="my-12 flex flex-col md:flex-row gap-4">
          {popular.map((app, index) => (
            <div key={index} className="flex flex-row md:w-auto gap-2">
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
                <h2 className="font-serif text-2xl font-medium">{app.name}</h2>
                <p className="font-sans text-sm font-light">
                  {app.description}
                </p>
                <div>
                  <Button className="mt-1" size={"sm"}>
                    see
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-28 px-2">
        <h1 className="font-serif text-4xl font-semibold text-secondary text-center md:text-left">
          Featured
        </h1>
        <div>
          <div className="relative -ml-16 md:ml-0 w-96 mt-8">
            <Image
              src={run}
              alt="featured image"
              height={384}
              width={384}
              className="rounded-3xl"
            />
            <div className="absolute left-0 top-0 h-96 w-96 rounded-3xl bg-black opacity-40 duration-200 ease-in-out hover:bg-transparent"></div>
            <h4 className="absolute left-4 top-4 bg-black p-1 text-white">
              Featured
            </h4>
            <div className="absolute left-72 top-4 flex items-center gap-1 p-1 ">
              <FaTag />
              <h2 className="font-sans">Health</h2>
            </div>
            <div className="absolute left-8 bottom-8">
              <h1 className="text-3xl font-serif text-white">Blog Title Goes here</h1>
              <p className="text-xs font-sans mr-8 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
          </div>
          <div className="mt-64">
            {featured.map((item, index) => (
              <div key={index}>
                <Image src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default blogs;
