import Image from "next/image";
import Link from "next/link";

import About from "@/assets/images/about.png";
import Mission from "@/assets/images/mission.png";
import Vision from "@/assets/images/vision.png";
import Dipesh from "@/assets/images/dipesh.png";
import Isheta from "@/assets/images/isheta.png";
import Preyanshu from "@/assets/images/preyanshu.png";
import Divyanshu from "@/assets/images/divyanshu.png";
import TNT from "@/assets/images/TNT.png";

import { MotionDiv } from "@/components/animations/MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const about = () => {
  return (
    <section className="flex flex-col justify-center bg-zinc-50 font-serif">
      <div className="grid grid-cols-3 items-center gap-12 px-32 py-10">
        <div className="col-span-1 text-5xl">
          <MotionDiv
            variants={variants}
            initial="hidden"
            transition={{
              delay: 0.3,
              ease: "easeInOut",
              duration: 0.4,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            We are
            <br />
            <h1 className="font-semibold text-dark-primary">HEALTH OPTIMA</h1>
          </MotionDiv>
        </div>
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.6,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-2 flex flex-col gap-6 pl-8 pr-8"
        >
          <div className="flex items-end gap-2">
            <h2 className="text-5xl font-medium">
              About <span className="text-dark-primary">U</span>s
            </h2>
            <div className="mb-2 h-1 w-64 bg-teal-950"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              At HealthOptima, we&#39;re dedicated to promoting comprehensive
              well-being through a diverse range of health-centric resources and
              tools. Our platform is your trusted companion on the journey to a
              healthier and more balanced life.
            </p>
            <p>
              Explore our extensive collection of health-related blog posts,
              carefully curated to inform, inspire, and empower you. Dive into
              topics spanning fitness, nutrition, mental health, and more.
              Whether you&#39;re seeking insights on the latest wellness trends
              or practical advice for daily living, our expertly crafted content
              is designed to enrich your understanding of holistic health.
            </p>
          </div>
        </MotionDiv>
      </div>
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.9,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto rounded-md px-28 pb-12"
      >
        <Image src={About} alt="About" className="rounded-md" />
      </MotionDiv>
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-4 px-80 pb-12 text-center"
      >
        <p>
          But HealthOptima goes beyond knowledge. Our suite of applications,
          including a task manager, sleep tracker, BMI calculator, and water
          consumption monitor, empowers you to take tangible steps toward
          well-being. We believe in the power of small, consistent actions to
          create lasting change.
        </p>
        <p>
          Join us in embracing the philosophy of &#39;Harmonious
          Well-Being.&#39; HealthOptima is your partner, supporting you as you
          pursue a healthier, more vibrant life.
        </p>
      </MotionDiv>
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mx-28 grid grid-cols-3 gap-16 rounded-sm bg-purple-100 px-20 py-16"
      >
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.6,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-2 flex flex-col items-center"
        >
          <div className="my-auto flex flex-col gap-4">
            <h2 className="text-5xl">Our Mission</h2>
            <p>
              Our mission is to empower individuals on their path to holistic
              wellness. We combine advanced technology with personalized
              experiences to simplify health management, inspire positive
              lifestyle changes, and enhance quality of life. We aim to be your
              trusted companion in achieving optimal well-being, one step at a
              time.
            </p>
            <div className="flex flex-row gap-3 text-xl">
              <h3 className="text-secondary">Join us, in our Mission.</h3>
              <Link href="/sign-up" className="text-dark-primary underline">
                Register Here
              </Link>
            </div>
          </div>
        </MotionDiv>
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1"
        >
          <Image src={Mission} alt="Mission" />
        </MotionDiv>
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.3,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-1"
        >
          <Image src={Vision} alt="Vision" />
        </MotionDiv>
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.6,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="col-span-2 flex flex-col items-center"
        >
          <div className="my-auto flex flex-col gap-4">
            <h2 className="text-5xl">Our Vision</h2>
            <p>
              Our vision is to pioneer a profound transformation in the way
              individuals approach their health and wellness. We envision a
              world where people are not only well-informed but also genuinely
              empowered to make positive choices for their physical, mental, and
              emotional well-being. Health Optima aspires to be the catalyst for
              this change.
              <br /> We&#39;re committed to redefining the pursuit of
              well-being, making it an accessible, engaging, and highly
              personalized journey. We see a future where individuals are not
              just passive recipients of health information, but active
              participants in their wellness. Our vision is to be the ultimate
              companion on this transformative journey, offering innovative and
              user-centric solutions that foster healthier, happier lives for
              all.
            </p>
          </div>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-12 px-28 py-24"
      >
        <div className="flex items-end gap-2">
          <h2 className="text-4xl font-medium">
            Meet Our Team of Very Capable <br />
            Individuals in the field of Technology
          </h2>
          <div className="mb-2 h-1 w-64 bg-black" />
        </div>
        <div className="grid grid-cols-4 gap-12">
          <MotionDiv
            variants={variants}
            initial="hidden"
            transition={{
              delay: 0.5,
              ease: "easeInOut",
              duration: 0.4,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4"
          >
            <Link href="https://www.linkedin.com/in/dipesh-ranjan/">
              <Image
                src={Dipesh}
                alt="Dipesh"
                className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Dipesh Ranjan</h3>
              <p className="font-sans text-lg leading-normal">
                Full-Stack Developer & UX Designer
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={variants}
            initial="hidden"
            transition={{
              delay: 0.6,
              ease: "easeInOut",
              duration: 0.4,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4"
          >
            <Link href="https://www.linkedin.com/in/isheta-aggarwal/">
              <Image
                src={Isheta}
                alt="Isheta"
                className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Isheta Aggarwal</h3>
              <p className="font-sans text-lg leading-normal">
                Front-End Developer & UX Designer
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={variants}
            initial="hidden"
            transition={{
              delay: 0.7,
              ease: "easeInOut",
              duration: 0.4,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4"
          >
            <Link href="https://www.linkedin.com/in/preyanshu-d-852019231/">
              <Image
                src={Preyanshu}
                alt="Preyanshu"
                className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Preyanshu Dhapola</h3>
              <p className="font-sans text-lg leading-normal">
                Front-End Developer
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={variants}
            initial="hidden"
            transition={{
              delay: 0.8,
              ease: "easeInOut",
              duration: 0.4,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4"
          >
            <Link href="https://www.linkedin.com/in/divyanshu-agarwal-15774b222/">
              <Image
                src={Divyanshu}
                alt="Divyanshu"
                className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Divyanshu Agarwal</h3>
              <p className="font-sans text-lg leading-normal">
                Back-End Developer
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-row items-end gap-4 px-28 pb-24"
      >
        <Image src={TNT} alt="Try N Test" className="w-96" />
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 h-1 w-96 bg-black"
        />
        <MotionDiv
          variants={variants}
          initial="hidden"
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-6 flex flex-col gap-4 text-4xl"
        >
          <h3>The Project is Made under the Organisation Try N&#39; Test</h3>
          <h3 className="font-semibold italic">
            Exploring, Innovating, Perfecting
          </h3>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default about;