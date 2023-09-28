import popular1 from "@/assets/images/popular1.jpg";
import popular2 from "@/assets/images/popular2.jpg";
import popular3 from "@/assets/images/popular3.jpg";
import run from "@/assets/images/run.jpg";
import blog1 from "@/assets/images/blog 1.png";
import blog2 from "@/assets/images/blog 2.png";
import blog3 from "@/assets/images/blog 3.png";
import blog4 from "@/assets/images/blog 4.png";

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
      <section className="mx-28 my-12 px-2">
        <h1 className="font-serif text-4xl font-semibold text-purple-950">
          Popular works
        </h1>
        <div className="my-12 flex flex-row gap-4">
          {popular.map((app, index) => (
            <div key={index} className="flex flex-row gap-2">
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
        <h1 className="font-serif text-4xl font-semibold text-secondary">
          Featured
        </h1>
        <div>
          <div className="relative">
            <Image src={run} alt="featured image" height={384} width={384} className="rounded-3xl" />
            <div className="absolute top-0 left-0 bg-black hover:bg-transparent ease-in-out duration-200 opacity-40 h-96 w-96 rounded-3xl">
            </div>
            <h4 className="absolute bg-black top-4 left-4 p-1 text-white">Featured</h4>
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
