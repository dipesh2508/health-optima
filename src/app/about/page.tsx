import Dipesh from "@/assets/images/dipesh.png";
import Isheta from "@/assets/images/isheta.png";
import Divyanshu from "@/assets/images/divyanshu.png";
import Preyanshu from "@/assets/images/preyanshu.png";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "Dipesh Ranjan",
    image: Dipesh,
    team: "Team Lead",
    role: "Front-End Developer and UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/dipesh-ranjan/",
    instagram: "https://www.instagram.com/dipesh_ranjan07/",
    github: "https://github.com/dipesh2508",
  },
  {
    name: "Isheta Aggarwal",
    image: Isheta,
    team: "Team Member",
    role: "Research Analyst and Copywriter",
    linkedin: "https://www.linkedin.com/in/isheta-aggarwal/",
    instagram: "https://www.instagram.com/isheta20/",
    github: "https://github.com/Isheta20",
  },
  {
    name: "Divyanshu Agarwal",
    image: Divyanshu,
    team: "Team Member",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/divyanshu-agarwal-15774b222/",
    instagram: "https://www.instagram.com/divyanshu_agarwal8/",
    github: "https://github.com/Divyanshu2309",
  },
  {
    name: "Preyanshu Dapola",
    image: Preyanshu,
    team: "Team Member",
    role: "Front-End Developer and Keyframe Animator",
    linkedin: "https://www.linkedin.com/in/preyanshu-d-852019231/",
    instagram: "https://www.instagram.com/dpreyanshu/",
    github: "https://github.com/sickCoder6184",
  },
];

const about = () => {
  return (
    <section className="">
      <div className="mt-8 flex flex-col items-center">
        <h1 className="-z-50 mb-12 font-serif text-4xl font-semibold">
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <div className="flex flex-col gap-12 md:grid md:grid-cols-4 md:gap-0">
          {data.map((item, index) => (
            <div
              className="duration-400 flex flex-col items-center gap-1 ease-in-out"
              key={index}
            >
              <div className="duration-400 left-0 top-0 h-80 w-72 rounded-br-3xl rounded-tl-3xl bg-gradient-radial from-blue-500 to-purple-500 ease-in-out hover:bg-gradient-to-b">
                <Image
                  src={item.image}
                  alt={item.name}
                  className=" duration-400 h-80 w-72 scale-90 rounded-br-3xl rounded-tl-3xl transition ease-in-out hover:scale-100"
                  loading="lazy"
                />
              </div>

              <h1 className=" mt-4 font-serif text-2xl font-medium text-secondary md:font-semibold">
                {item.name}
              </h1>
              <h1 className="font-sans text-sm font-light ">{item.team}</h1>
              <h1 className="text-md text-center font-sans font-medium ">
                {item.role}
              </h1>
              <div className="flex justify-center md:justify-start">
                <Link
                  href={item.linkedin}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <BsLinkedin className="m-2 h-8 w-8 cursor-pointer  hover:text-secondary" />{" "}
                </Link>
                <Link
                  href={item.instagram}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="m-2 h-8 w-8 cursor-pointer hover:text-secondary" />
                </Link>
                <Link
                  href={item.github}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <BsGithub className="m-2 h-8 w-8 cursor-pointer hover:text-secondary" />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-4 rounded-lg bg-secondary p-4 md:m-16 shadow-2xl">
        <div className="rounded-lg bg-white p-1">
          <div className="flex flex-col items-center rounded-lg bg-secondary p-2 md:p-4">
            <h1 className="font-serif text-4xl text-white">About Us</h1>
            <p className="m-4 text-justify font-sans text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex
              massa, ornare commodo lobortis sed, rutrum at elit. Aliquam
              malesuada ac neque id dignissim. Nullam id finibus velit, sed
              vulputate nisl. Integer et lorem elit. Etiam at mi augue.
              Curabitur porttitor sed urna ut elementum.<br></br>
              <br></br>
              Nullam accumsan neque efficitur enim condimentum euismod. Mauris
              accumsan tortor ut massa facilisis volutpat. Nullam auctor urna
              eget ligula pellentesque dictum. Aenean sit amet efficitur mauris,
              et pretium nisl. Donec nec facilisis leo. Integer consequat
              dapibus sem, id porttitor lacus eleifend at. Mauris mauris tortor,
              faucibus eget diam sit amet, pharetra rhoncus nulla. Pellentesque
              feugiat dolor odio, vitae facilisis nulla hendrerit ac. Maecenas
              mattis nulla metus, a vulputate lacus rhoncus at. Cras neque nibh,
              commodo nec sem vitae, imperdiet ultrices arcu. Aenean efficitur
              hendrerit quam sit amet convallis. Pellentesque tempor ante non
              sollicitudin egestas. Sed ut eleifend augue, id posuere dui.
              Vestibulum nibh velit, tincidunt in lacus at, ullamcorper mollis
              orci.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 my-12 flex flex-col items-center gap-8 md:m-16 md:flex-row md:gap-4">
        <div className="flex flex-col items-center shadow-custom gap-4 rounded-lg bg-primary p-4 text-white">
          <h3 className="mt-2 bg-secondary p-1 font-sans text-white">
            WHO WE ARE, WHAT WE DO
          </h3>
          <h1 className="font-serif text-3xl font-semibold">OUR VISION</h1>
          <p className="m-4 mt-0 text-justify font-sans font-medium text-black md:m-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex
            massa, ornare commodo lobortis sed, rutrum at elit. Aliquam
            malesuada ac neque id dignissim. Nullam id finibus velit, sed
            vulputate nisl. Integer et lorem elit. Etiam at mi augue. Curabitur
            porttitor sed urna ut elementum.
          </p>
        </div>
        <div className="flex flex-col items-center shadow-custom gap-4 rounded-lg bg-primary p-4 text-white">
          <h3 className="mt-2 bg-secondary p-1 font-sans text-white">
            WHAT WE ASPIRE TO BE
          </h3>
          <h1 className="font-serif text-3xl font-semibold">OUR MISSION</h1>
          <p className="m-4 mt-0 text-justify font-sans font-medium text-black md:m-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex
            massa, ornare commodo lobortis sed, rutrum at elit. Aliquam
            malesuada ac neque id dignissim. Nullam id finibus velit, sed
            vulputate nisl. Integer et lorem elit. Etiam at mi augue. Curabitur
            porttitor sed urna ut elementum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
