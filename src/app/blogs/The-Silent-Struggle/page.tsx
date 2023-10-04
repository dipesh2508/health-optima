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
