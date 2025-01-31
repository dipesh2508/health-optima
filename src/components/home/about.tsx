import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/animations/MotionDiv";
import about from "@/assets/images/home_about.png";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary px-4 py-24">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="bg-primary/30 absolute left-0 top-0 h-[500px] w-[500px] rounded-full blur-3xl"
      />

      <div className="container relative mx-auto grid gap-24 md:grid-cols-12">
        {/* Image Section */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative md:col-span-5"
        >
          <div className="aspect-square overflow-hidden rounded-2xl">
            <Image
              src={about}
              alt="Health Optima Platform"
              fill
              className="rounded-lg object-cover transition-transform duration-700"
              priority
            />
          </div>
        </MotionDiv>
        {/* Content Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-light tracking-[0.2em] text-slate-100">
                DISCOVER HEALTH OPTIMA
              </h3>
              <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text font-serif text-3xl font-bold tracking-tight text-transparent md:text-5xl">
                Your Trusted Companion for Well-being
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-300">
              At HealthOptima, we&apos;re dedicated to promoting comprehensive
              well-being through a diverse range of health-centric resources and
              tools. Our platform combines advanced technology with personalized
              experiences to simplify health management.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Task Manager", desc: "Track your daily activities" },
                { title: "Sleep Tracker", desc: "Monitor sleep patterns" },
                { title: "BMI Calculator", desc: "Measure body metrics" },
                { title: "Water Monitor", desc: "Stay hydrated daily" },
              ].map((item, i) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <h4 className="font-medium text-slate-100">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
                </MotionDiv>
              ))}
            </div>
            <div>
              <Link href="/about">
                <Button className="from-primary relative overflow-hidden bg-gradient-to-r to-primary-5 px-8 py-6 text-lg font-medium text-white hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;
