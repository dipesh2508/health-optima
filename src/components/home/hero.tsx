const hero = () => {
  return (
    <section>
      <video
        muted
        loop
        autoPlay
        className="absolute left-0 top-12 -z-50 min-h-full min-w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dw5m5d0tl/video/upload/v1719844666/bgVideo_htnodr.mp4" type="video/mp4" />
        <source src="https://res.cloudinary.com/dw5m5d0tl/video/upload/v1719844666/bgVideo_htnodr.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div className="-z-10 left-0 mt-24 top-0 absolute min-h-[95vh] w-full bg-black opacity-80 md:min-h-[116vh]"></div>
      <div className="-z-20 top-0 -mt-24 flex min-h-[99vh] w-full flex-col items-center justify-center px-0 md:min-h-[120vh]">
        <div className="-z-10 m-auto flex w-[90%] flex-col items-center gap-10">
          <h1 className=" text-center font-serif text-2xl leading-loose text-white md:text-4xl lg:text-7xl">
            Empower Your Wellness Journey <br /> with{" "}
            <span className="text-primary">Health Optima</span>
          </h1>
          <h3 className="text-center font-sans text-lg font-thin text-white md:text-3xl">
            Your Ultimate Health and Wellness Companion
          </h3>
        </div>
      </div>
    </section>
  );
};

export default hero;
