const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden" aria-label="Welcome to Health Optima">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        aria-label="Background video showing health and wellness activities"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/dw5m5d0tl/video/upload/q_auto,f_auto,w_1920/v1719844666/bgVideo_htnodr.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-center font-serif text-2xl leading-loose text-white md:text-4xl lg:text-7xl">
            Empower Your Wellness Journey <br /> with{" "}
            <span className="text-primary-5">Health Optima</span>
          </h1>
          <h3 className="font-sans text-lg font-thin text-white md:text-3xl mt-4">
            Your Ultimate Health and Wellness Companion
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;