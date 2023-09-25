import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const about = () => {
  return (
    <section className="my-4 grid grid-cols-1 items-center gap-0 bg-secondary py-24 md:grid-cols-3 md:gap-8">
      <div className="m-0 mx-20 my-4 rounded-lg bg-white px-4 py-8 shadow-custom md:mx-0 md:my-12 md:ml-40 md:px-16 md:py-32">
        <Image src={logo} height={480} width={800} alt="logo" />
      </div>
      <div className="col-span-2 mx-16 flex flex-col items-center md:mx-0 md:mr-64 md:items-start">
        <h3 className="mb-4 text-sm font-light text-white md:text-2xl">
          Discover Our Story
        </h3>
        <h1 className="mb-4 font-serif text-3xl font-semibold text-white md:text-4xl">
          About Us
        </h1>
        <p className="text-justify font-sans text-sm font-light text-white md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra
          magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum.
          Proin a tincidunt est. Donec vitae dui in velit ultricies fermentum.
          Ut euismod, massa vitae hendrerit tincidunt, lorem ipsum ultrices
          massa, auctor ultricies nisl est eget nunc. Donec vitae dui in velit
          ultricies fermentum. Ut euismod, massa vitae hendrerit tincidunt,
          lorem ipsum ultrices massa, auctor ultricies nisl est eget nunc.
        </p>
        <Button className="mt-4">learn more</Button>
      </div>
    </section>
  );
};

export default about;
