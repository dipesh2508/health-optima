import Link from "next/link";
import Image from "next/image";
import author from "@/assets/images/author.png";

import title from "@/assets/images/blog 3.png";
const page = () => {
  return (
    <main>
      {/* title section */}
      <section
        id="headline"
        className="grid gap-8 bg-primary py-12 md:grid-cols-12"
      >
        <div className="mx-8 grid content-end gap-4 md:col-span-7 md:mx-0 md:ml-28">
          {/* headline section  */}
          <h1 className="text-center font-serif text-2xl font-semibold text-white md:text-left md:text-4xl">
            The Lifesaving Elixir: Why Staying Hydrated is Vital for Your Health
          </h1>
          <p className="text-justify font-sans text-sm font-medium text-black md:text-base">
            Water, the essence of life, is often taken for granted in our daily
            routines. Its vital role in maintaining health often goes unnoticed,
            yet it serves as the cornerstone of our overall well-being. In this
            comprehensive article, we will explore the profound importance of
            drinking water and staying regularly hydrated, shedding light on how
            it can significantly benefit your health. As the cornerstone of our
            existence, water is the key to unlocking a healthier and happier
            life, and we are about to delve deep into the reasons why.
          </p>
        </div>

        {/* title image */}
        <div className="mx-8 md:col-span-5 md:mx-0 md:mr-28">
          <Image
            src={title}
            alt="title image"
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-4 px-4 py-12 md:grid-cols-3 md:px-28">
        {/* blog content */}
        <div className="order-last flex flex-col gap-8 md:order-first md:col-span-2">
          {/* youtube video embedding */}
          <iframe
            src={
              "https://www.youtube.com/embed/31F0laJjyy8?si=vgpciZv1tPfT-cn9"
            }
            title={"YouTube video player"}
            className="h-48 w-80 rounded-2xl drop-shadow-2xl md:ml-20 md:h-[315px] md:w-[560px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-8 flex flex-col gap-4" id="UI">
            <h2 className="font-serif text-2xl font-medium text-dark-primary md:text-3xl">
              Hydration and Physical Wellness
            </h2>
            <p className="text-justify font-sans text-base text-slate-800">
              When it comes to safeguarding your physical well-being, there is
              no simpler or more effective strategy than ensuring proper
              hydration. Water plays a role in nearly every bodily function,
              making it an essential element of our existence. Here&#39;s how it
              bolsters your physical health:
            </p>

            <div className="mt-4 flex flex-col items-center md:mt-8">
              {/* <Image
                src={}
                className="mt:h-72 h-56 w-auto rounded-lg drop-shadow-2xl"
                alt="types of insomnia"
                loading="lazy"
              /> */}
            </div>

            <div className="mt-4 flex flex-col gap-4 text-justify font-sans text-base text-slate-800 md:mt-8">
              <p>
                <span className="font-semibold">Optimal Organ Function:</span>{" "}
                Your body relies on water to aid in digestion, absorb nutrients,
                and eliminate waste. Sufficient hydration ensures your organs
                function at their best, enhancing digestion and nutrient
                absorption.
              </p>
              <p>
                <span className="font-semibold">Temperature Regulation:</span>{" "}
                Sweating is your body&#39;s natural cooling mechanism.
                Inadequate water intake can impede your ability to regulate
                temperature, resulting in overheating and potentially dangerous
                conditions like heatstroke.
              </p>
              <p>
                <span className="font-semibold">Joint Health:</span> Water acts
                as a natural lubricant for your joints, keeping them supple.
                Dehydration can lead to joint pain and stiffness, affecting your
                mobility and overall comfort.
              </p>
              <p>
                <span className="font-semibold">Radiant Skin:</span> Proper
                hydration contributes to a glowing complexion. Water moisturizes
                your skin from the inside out, reducing dryness and promoting a
                youthful appearance.
              </p>
              <p>
                <span className="font-semibold">Muscle Performance:</span>{" "}
                Dehydration can lead to muscle cramps and reduced endurance.
                Athletes and those engaged in physical activities should pay
                particular attention to their hydration levels.
              </p>
            </div>
            <div>
              <h2 className="mt-4 font-serif text-2xl font-medium text-purple-800 md:mt-8 md:text-3xl">
                Cognitive Clarity and Mental Health
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-justify font-sans text-base text-slate-800 md:mt-8">
                <p>
                  Hydration isn&#39;t limited to its impact on the body; it
                  profoundly influences your mental health and cognitive
                  function. The brain, comprising about 73% water, is highly
                  sensitive to even mild dehydration, affecting your ability to
                  think clearly and concentrate. Here&#39;s how hydration
                  supports mental well-being:
                </p>
                <p>
                  <span className="font-semibold">Sharper Focus:</span> Adequate
                  hydration promotes sharper focus, enhances memory, and boosts
                  cognitive abilities. When well-hydrated, you&#39;re more alert
                  and capable of handling tasks effectively.
                </p>
                <p>
                  <span className="font-semibold">Anxiety and Gloom:</span>{" "}
                  Emotional conditions like anxiety and despair, can interfere
                  with sleep cycles.
                </p>
                <p>
                  <span className="font-semibold">Mood Stabilization:</span>{" "}
                  Dehydration can lead to mood swings and irritability. Drinking
                  sufficient water can help stabilize your mood, reducing stress
                  and anxiety.
                </p>
                <p>
                  <span className="font-semibold">Enhanced Sleep:</span> Staying
                  hydrated can improve the quality of your sleep. Dehydration
                  can cause nighttime restlessness, disrupting your sleep
                  patterns.
                </p>
              </div>
            </div>
            <div>
              <h2 className=" mt-4 font-serif text-2xl font-medium text-purple-800 md:mt-8 md:text-3xl">
                Weight Management and Nutrition
              </h2>
              <div className="mt-4 flex flex-col items-center md:mt-8">
                {/* <Image
                  src={}
                  className="mt:h-72 h-56 w-auto rounded-lg drop-shadow-2xl"
                  alt="types of insomnia"
                  loading="lazy"
                /> */}
              </div>
              <div className="mt-8 flex flex-col gap-4 text-justify font-sans text-base text-slate-800">
                <p>
                  If you&#39;re striving for a healthy weight and a balanced
                  diet, proper hydration is a fundamental component of your
                  journey. Here&#39;s why:
                </p>
                <p>
                  <span className="font-semibold">Appetite Control:</span> At
                  times, our bodies confuse thirst with hunger, leading to
                  unnecessary snacking. Staying hydrated can help distinguish
                  between thirst and hunger, preventing overeating.
                </p>
                <p>
                  <span className="font-semibold">
                    Digestion and Nutrient Absorption:
                  </span>{" "}
                  Water is crucial for breaking down and absorbing nutrients. It
                  facilitates the transport of essential vitamins and minerals
                  to where they are needed, supporting a healthier metabolism.
                </p>
                <p>
                  <span className="font-semibold">Weight Loss Aid:</span>{" "}
                  Drinking water before meals can reduce calorie intake by
                  creating a sense of fullness. This strategy can be invaluable
                  for those looking to shed extra pounds.
                </p>
              </div>
            </div>
            <div>
              <h2 className=" mt-4 font-serif text-2xl font-medium text-purple-800 md:mt-8 md:text-3xl">
                The Importance of Regular Hydration for Managing Health
                Conditions
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-justify font-sans text-base text-slate-800 md:mt-8">
                <p>
                  For individuals dealing with specific health conditions,
                  maintaining proper hydration is even more crucial. Conditions
                  like urinary tract infections, kidney stones, and constipation
                  can worsen with inadequate water intake. Consistent hydration
                  can help manage and even prevent these health issues.
                </p>
                <p>
                  <span className="font-semibold">Urinary Tract Health:</span>{" "}
                  Drinking sufficient water can flush out bacteria, reducing the
                  risk of urinary tract infections. It also dilutes urine,
                  lowering the likelihood of painful kidney stones.
                </p>
                <p>
                  <span className="font-semibold">Skin Conditions:</span> Skin
                  conditions like acne and eczema can improve with proper
                  hydration. Water aids in detoxifying your body, promoting a
                  clear complexion.
                </p>
                <p>
                  <span className="font-semibold">Digestive Health:</span>{" "}
                  Adequate hydration can prevent constipation by keeping the
                  digestive system functioning efficiently. It softens stool,
                  making it easier to pass.
                </p>
                <p>
                  <span className="font-semibold">Cardiovascular Health:</span>{" "}
                  Staying hydrated can help maintain healthy blood pressure
                  levels. Dehydration can lead to thicker blood, increasing the
                  workload on your heart.
                </p>

                <div className="mt:mt-8 mt-4 flex flex-col items-center">
                  {/* <Image
                    src={}
                    className="mt:h-72 h-56 w-auto rounded-lg drop-shadow-2xl"
                    alt="types of insomnia"
                    loading="lazy"
                  /> */}
                </div>
                <p>
                  Water, the unsung hero of our well-being, is critical to every
                  facet of our health. From physical well-being and mental
                  acuity to weight management and the management of various
                  health conditions, staying well-hydrated is non-negotiable.
                  So, raise your glass and drink up for a healthier, happier
                  life. By prioritizing hydration, you are providing your body
                  with the care it deserves. Remember, your body relies on water
                  to function at its best, and it&#39;s a simple yet powerful
                  way to support your health, both now and in the future.
                  Here&#39;s to a healthier, more vibrant you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side bar */}
        <div className="order-first flex flex-col md:order-last">
          {/* author card */}
          <div className="flex flex-row items-center gap-3">
            <Image src={author} alt="isheta" loading="lazy" />
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl font-semibold text-dark-primary">
                Isheta Aggarwal
              </h3>
              <h5 className="font-sans text-lg font-medium text-slate-500">
                Published on 29th October 2023
              </h5>
            </div>
          </div>

          {/* sideway navigation menu */}
          <div className="mt-3 flex flex-col gap-3 pt-4 font-sans text-base font-medium text-slate-800">
            <hr className="border-dark-primary" />
            <Link href="#UI">
              <h5>Understanding Insomnia</h5>
            </Link>
            <hr className="border-dark-primary" />
            <h5>Common Causes of Insomnia</h5>
            <hr className="border-dark-primary" />
            <h5>The Effects of Insomnia</h5>
            <hr className="border-dark-primary" />
            <h5>How to Overcome Insomnia </h5>
            <hr className="border-dark-primary" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
