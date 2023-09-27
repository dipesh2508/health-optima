import popular1 from "@/assets/images/popular1.jpg";
import popular2 from "@/assets/images/popular2.jpg";
import popular3 from "@/assets/images/popular3.jpg";

import blog1 from "@/assets/images/blog 1.png";
import blog2 from "@/assets/images/blog 2.png";
import blog3 from "@/assets/images/blog 3.png";
import blog4 from "@/assets/images/blog 4.png";

import Image from "next/image";

const popular = [
  {
    name: "Title of the Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular1
  },
  {
    name: "Title of the Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular2
  },
  {
    name: "Title of the Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "",
    image: popular3
  }
];

const featured = [
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog3
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog4
  },
];

const blog = [
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog1
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog2
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog3
  },
  {
    category: "Category",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Aenean id imperdiet risus, vel fermentum...",
    link: "",
    image: blog4
  }
]



const blogs = () => {
  return (
    <main>
      <section>
        <h1>Popular works</h1>
        {popular.map((app, index) => (
          <div key={index}>
            <div className="">
              <Image src={app.image} alt={app.name} className="rounded-full"/>
            </div>
            <div><h2>{app.name}</h2>
            <p>{app.description}</p></div>
          </div>
        ))}
      </section>
      <section>
        <h1>Featured</h1>
        {featured.map((app, index) => (
          <div key={index}>
            <h2>{app.name}</h2>
            <p>{app.description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default blogs