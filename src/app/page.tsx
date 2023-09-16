export default function Home() {
  return (
    <>
      <main className='min-h-screen pt-[15vh]'>
        <video
          muted
          loop
          autoPlay
          className="absolute top-12 left-0 min-w-full min-h-full -z-50 object-cover"
        >
          <source src= '/video/bgVideo.mp4'type="video/mp4" />
          <source src='/video/bgVideo.mp4' type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        <div className=" bg-black opacity-80 w-full min-h-[99vh] md:min-h-[140vh] absolute top-0 left-0 -z-40"></div>
        <div className=" w-full py-10 px-0 mt-16 flex flex-col items-center justify-center">
          <div className="w-[90%] m-auto flex flex-col items-center gap-10">
            <h1 className="font-serif text-center text-2xl md:text-4xl lg:text-7xl leading-loose text-white">
            Empower Your Wellness  Journey <br /> with <span className="text-primary">Health Optima</span>
            </h1>
            <h3 className="text-white text-lg text-center md:text-3xl font-thin">Your Ultimate Health and Wellness Companion</h3>
          </div>
        </div>
      </main>
    </>
  )
}
