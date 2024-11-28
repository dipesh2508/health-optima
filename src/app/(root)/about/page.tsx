import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import About from "@/assets/images/about.png";
import Mission from "@/assets/images/mission.png";
import Vision from "@/assets/images/vision.png";
import TNT from "@/assets/images/TNT.png";
import DeviImage from "@/assets/images/devi.png";

import { MotionDiv } from "@/components/animations/MotionDiv";
import { teamMembers } from "@/constants/profile";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const metadata: Metadata = {
  title: 'About Us | Health Optima',
  description: 'Learn about Health Optima - your trusted companion for comprehensive well-being.',
  keywords: 'Health Optima, healthcare platform, wellness company, health technology, medical services, health team, Devi AI assistant',
  openGraph: {
    title: 'About Us | Health Optima',
    description: 'Discover the team and vision behind Health Optima - your partner in comprehensive health and wellness solutions.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Health Optima Logo',
      },
    ],
    type: 'website',
    siteName: 'Health Optima',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Health Optima',
    description: 'Your trusted companion for comprehensive well-being. Discover our mission and meet our team.',
    images: ['/logo.png'],
    creator: '@dipeshranjan12',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://healthoptima.com/about',
  },
  authors: [{ name: 'Dipesh Ranjan' }, { name: 'Isheta Aggarwal' }],
};

export const viewport = {
  themeColor: '#7c3aed',
};

const about = () => {
  return (
    <section className="flex flex-col justify-center bg-zinc-50 font-serif">
      <div className="grid grid-cols-1 items-center gap-6 px-12 py-6 md:grid-cols-3 md:gap-12 md:px-32 md:py-10">
        <div className="col-span-1 text-2xl md:text-5xl">
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
            <h1 className="font-bold text-primary-10 md:font-semibold">
              HEALTH OPTIMA
            </h1>
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
          className="flex flex-col gap-2 md:col-span-2 md:gap-6 md:px-8"
        >
          <div className="flex items-end gap-2">
            <h2 className="text-2xl font-bold md:text-5xl md:font-medium">
              About <span className="text-primary-10">U</span>s
            </h2>
            <div className="mb-2 h-0.5 w-64 bg-teal-950 md:h-1"></div>
          </div>
          <div className="flex flex-col gap-2 text-base md:text-sm">
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
        className="mx-auto rounded-md px-8 pb-4 md:px-28 md:pb-12"
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
        className="flex flex-col gap-4 px-12 pb-8 text-center text-sm md:px-80 md:pb-12 md:text-base"
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
        viewport={{ once: true, amount: 0.2 }}
        className="mx-4 grid grid-cols-1 gap-6 rounded-sm bg-purple-100 px-10 py-8 md:mx-28 md:grid-cols-3 md:gap-16 md:px-20 md:py-16"
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
          className="col-span-1 flex flex-col items-center md:col-span-2"
        >
          <div className="my-auto flex flex-col gap-4">
            <h2 className="text-center text-2xl md:text-left md:text-5xl">
              Our Mission
            </h2>
            <p className="text-center text-sm md:text-left md:text-base">
              Our mission is to empower individuals on their path to holistic
              wellness. We combine advanced technology with personalized
              experiences to simplify health management, inspire positive
              lifestyle changes, and enhance quality of life. We aim to be your
              trusted companion in achieving optimal well-being, one step at a
              time.
            </p>
            <div className="flex flex-row gap-1 text-center text-base md:gap-3 md:text-xl">
              <h3 className="text-secondary">Join us, in our Mission.</h3>
              <Link href="/sign-up" className="text-primary-10 underline">
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
          className="col-span-1 flex flex-col items-center md:col-span-2"
        >
          <div className="my-auto flex flex-col gap-4">
            <h2 className="text-center text-2xl md:text-left md:text-5xl">
              Our Vision
            </h2>
            <p className="text-center text-sm md:text-left md:text-base">
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
        viewport={{ once: true, amount: 0.2 }}
        className="mx-4 grid grid-cols-1 gap-6 rounded-sm bg-purple-100 px-10 pb-8 md:mx-28 md:grid-cols-3 md:gap-16 md:px-20 md:pb-16"
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
          className="col-span-1 flex flex-col items-center md:col-span-2"
        >
          <div className="my-auto flex flex-col gap-4">
            <h2 className="text-center text-2xl md:text-left md:text-5xl">
              Meet Devi, Our AI Health Assistant
            </h2>
            <p className="text-center text-sm md:text-left md:text-base">
              Devi is our intelligent chatbot, developed by Dipesh Ranjan using
              Google AI Studio. Built upon the Google Gemini Flash 1.5 model and
              fine-tuned with a custom dataset, Devi is here to assist you with
              general health-related questions and provide information about our
              website and the Try N Test team.
            </p>
            <p className="text-center text-sm md:text-left md:text-base">
              Whether you need quick health advice or want to learn more about
              HealthOptima, Devi is always ready to help. Look for the chat icon
              in the bottom right corner to start a conversation!
            </p>
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
          <Image
            src={DeviImage}
            alt="Devi Chatbot"
            className="mx-auto h-48 w-48 rounded-full md:h-64 md:w-64"
          />
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
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 px-12 py-8 md:gap-12 md:px-28 md:py-24"
      >
        <div className="flex items-end gap-2">
          <h2 className="text-lg font-semibold md:text-4xl md:font-medium">
            <span className="text-3xl md:text-4xl">Meet Our Team</span> of Very
            Capable
            <br />
            Individuals in the field of Technology
          </h2>
          <div className="mb-2 h-1 w-64 bg-black" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <MotionDiv
              key={member.name}
              variants={variants}
              initial="hidden"
              transition={{
                delay: 0.5 + index * 0.1,
                ease: "easeInOut",
                duration: 0.4,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Link href={member.linkedIn}>
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
                />
              </Link>
              <div className="flex flex-col text-center md:gap-2">
                <h3 className="text-xl font-bold md:text-2xl">{member.name}</h3>
                <p className="font-sans text-sm leading-normal md:text-lg">
                  {member.role}
                </p>
              </div>
            </MotionDiv>
          ))}
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
        className="flex flex-col items-end justify-center px-8 pb-24 md:flex-row md:gap-4 md:px-28"
      >
        <Image src={TNT} alt="Try N Test" className="mx-auto w-96" />
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
          className="mx-auto mb-8 h-0.5 w-48 bg-black md:h-1 md:w-96"
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
          className="mb-6 flex flex-col gap-4 text-center text-xl md:text-left md:text-4xl"
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
