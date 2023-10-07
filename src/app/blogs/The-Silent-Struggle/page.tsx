import insomnia1 from "@/assets/images/insomnia1.jpg";
import insomnia2 from "@/assets/images/insomnia2.jpg";
import insomnia3 from "@/assets/images/insomnia3.jpg";
import insomnia4 from "@/assets/images/insomnia4.jpg";
import author from "@/assets/images/author.png";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      {/* title section */}
      <section
        id="headline"
        className="grid grid-cols-12 gap-8 bg-primary py-12"
      >
        <div className="col-span-7 ml-28 grid content-end gap-4">
          {/* headline section  */}
          <h1 className="font-serif text-4xl font-semibold text-white">
            The Silent Struggle: Insomnia and How to Overcome It
          </h1>
          <p className="text-justify font-sans text-base font-medium text-black">
            With everyone stuck in the rat race, a good night&#39;s sleep is
            often hard to find. For some watching the sunrise after not sleeping
            for hours has become much more of a common occurrence than viewing
            it after getting up. This &#39;midnight tormentor&#39; torments
            millions all over the world irrespective of age or class, disrupting
            work-life balance as well as bodily functions. In this blog, we will
            deep dive into the world of insomnia
          </p>
        </div>

        {/* title image */}
        <div className="col-span-5 mr-28">
          <Image src={insomnia1} alt="title image" className="rounded-lg" />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 px-28 py-12">
        {/* blog content */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* youtube video embedding */}
          <iframe
            src={
              "https://www.youtube.com/embed/cHKs2aVxOmQ?si=hs0Db9KbK9mbUQAl"
            }
            title={"YouTube video player"}
            width="560"
            height="315"
            className="ml-20 rounded-2xl drop-shadow-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-8 flex flex-col gap-4" id="UI">
            <h2 className="font-serif text-3xl font-medium text-purple-900">
              Understanding Insomnia
            </h2>
            <p className="text-justify font-sans text-base text-slate-800">
              Insomnia is more than just a few sleepless nights. If you face
              emotional repercussions as an effect of your lack of sleep then
              you are suffering from insomnia. Insomnia affects roughly 10% of
              the world&#39;s population. It is not deadly though it does have a
              big impact on your physical and mental well-being.
            </p>

            <h3 className=" mt-4 font-serif text-2xl font-medium text-purple-800">
              Types of Insomania
            </h3>
            <div className="mt-8 flex flex-col items-center">
              <Image
                src={insomnia2}
                className="h-72 w-auto rounded-lg drop-shadow-2xl"
                alt="types of insomnia"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 text-justify font-sans text-base text-slate-800">
              <p>There are two main categories of insomnia:</p>
              <p>
                <span className="font-semibold">Acute Insomnia:</span> This is
                short-term and usually happens on its own due to some
                particularly stressful or life-changing event. As you overcome
                those issues, the insomnia also fades away.
              </p>
              <p>
                <span className="font-semibold">Chronic Insomnia:</span> You
                might develop this disorder as a symptom of another illness,
                drugs, and other circumstances. This kind of insomnia may last
                for three months or longer, ruining at least three nights each
                week.
              </p>
            </div>
            <div>
              <h2 className=" mt-4 font-serif text-3xl font-medium text-purple-800">
                Common Causes of Insomnia
              </h2>
              <div className="mt-8 flex flex-col gap-4 text-justify font-sans text-base text-slate-800">
                <p>
                  There are numerous factors that can lead to insomnia,
                  including:
                </p>
                <p>
                  <span className="font-semibold">Stress:</span> An unwelcomed
                  guest that can be very hard to avoid at some point in life and
                  is one of the primary reasons for insomnia since it can result
                  in anxious thoughts and an overactive mind, affecting the
                  ability to sleep.
                </p>
                <p>
                  <span className="font-semibold">Anxiety and Gloom:</span>{" "}
                  Emotional conditions like anxiety and despair, can interfere
                  with sleep cycles.
                </p>
                <p>
                  <span className="font-semibold">Unhealthy Sleep Habits:</span>{" "}
                  Your sleep habits can also lead to insomnia. There are many
                  reasons that could lead to a bad sleeping routine: traveling,
                  working from home, heavy use of electronics before bed, or
                  enjoying or boosting yourself with coffee or alcohol close to
                  bedtime.
                </p>
                <p>
                  <span className="font-semibold">Medical Conditions</span> If
                  you are suffering from some form of illness then it can also
                  affect your sleep. Medical conditions could include chronic
                  pain, asthma, or Parkinson&#39;s disease which can even lead
                  to chronic insomnia.
                </p>
                <p>
                  <span className="font-semibold">Medications</span> Sometimes
                  the drugs that you consume to get better, particularly those
                  with stimulant effects, can interfere with sleep.
                </p>
              </div>
            </div>
            <div>
              <h2 className=" mt-4 font-serif text-3xl font-medium text-purple-800">
                The Effects of Insomnia
              </h2>
              <div className="mt-8 flex flex-col items-center">
                <Image
                  src={insomnia3}
                  className="h-72 w-auto rounded-lg drop-shadow-2xl"
                  alt="types of insomnia"
                />
              </div>
              <div className="mt-8 flex flex-col gap-4 text-justify font-sans text-base text-slate-800">
                <p>The effects of insomnia are followed up throughout the day affecting your daily activities and making it harder for you to keep up with life. These effects include: </p>
                
                
                <ul className="list-disc flex flex-col gap-2 ml-4">
                <li>Feeling like your body has been run over by a truck(tired and unwell). </li>
                <li>Mood disorders, anxiety, irritability, and depression.</li>
                <li>The attention span of a goldfish as well as delayed responses</li>
                <li>Reduced productivity, and finding it difficult to remember things.</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className=" mt-4 font-serif text-3xl font-medium text-purple-800">
                How to Overcome Insomnia
              </h2>
              <div className="mt-8 flex flex-col gap-4 text-justify font-sans text-base text-slate-800">
              <p>You can defeat insomnia by following a number of ways and bringing certain changes to your lifestyle and health. You can follow the tips below to get rid of this menace:</p>
              <ul className="list-disc flex flex-col gap-2 ml-4">
                <li>Maintaining a consistent sleeping schedule. You can consider writing in a journal regarding when you sleep, and for how many hours you sleep to keep track of yourself.</li>
                <li>Avoiding certain foods like coffee before sleep.</li>
                <li>Supplements and medications that help to fall asleep.</li>
                <li>Using essential oils before bedtime can also work wonders in calming your mind.</li>
                <li>Exercising regularly is a must to ensure good stress-free sleep. This could include yoga, meditation, or practicing a sport that you prefer. </li>
                <li>Take fewer naps. From none to at max a 20-30 minutes nap, if necessary. </li>
                <li>Leave your phone alone! The light of electronic devices can make your brain think that it is not nighttime and hence disrupt your sleep.</li>
                </ul>
                <p>If the insomnia persists or the struggle has turned into a full-blown war, consult a medical professional as they are the best person to guide you through the possible treatments.</p>
                <div className="mt-4 flex flex-col items-center">
                <Image
                  src={insomnia4}
                  className="h-72 w-auto rounded-lg drop-shadow-2xl"
                  alt="types of insomnia"
                />
              </div>
              <p>As the song &#39;Let Her Go&#39; implies you only realize the importance of something when it is missing or gone. Similarly, many people fail to understand the worth of sleep and take it for granted. Lack of sleep can have a huge effect on your overall health. So, if you have trouble sleeping, don’t take it lightly and work on the issue as soon as possible. After all, sleeping is the best medicine next to laughter.</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side bar */}
        <div className="flex flex-col">
          {/* author card */}
          <div className="flex flex-row items-center gap-3">
            <Image src={author} alt="isheta" />
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-2xl font-semibold text-purple-900">
                Isheta Aggarwal
              </h3>
              <h5 className="font-sans text-lg font-medium text-slate-500">
                Published on 2nd October 2023
              </h5>
            </div>
          </div>

          {/* sideway navigation menu */}
          <div className="mt-3 flex flex-col gap-3 pt-4 font-sans text-base font-medium text-slate-800">
            <hr className="border-purple-900" />
            <Link href="#UI">
              <h5>Understanding Insomnia</h5>
            </Link>
            <hr className="border-purple-900" />
            <h5>Common Causes of Insomnia</h5>
            <hr className="border-purple-900" />
            <h5>The Effects of Insomnia</h5>
            <hr className="border-purple-900" />
            <h5>How to Overcome Insomnia </h5>
            <hr className="border-purple-900" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
