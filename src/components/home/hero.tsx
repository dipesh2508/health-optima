import React from 'react'

const hero = () => {
    return (
        <section className='min-h-screen'>
            <video
                muted
                loop
                autoPlay
                className="absolute top-12 left-0 min-w-full min-h-full -z-50 object-cover"
            >
                <source src='/video/bgVideo.mp4' type="video/mp4" />
                <source src='/video/bgVideo.mp4' type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            <div className=" bg-black opacity-80 w-full min-h-[99vh] md:min-h-[122vh] absolute top-0 left-0 -z-40"></div>
            <div className=" w-full top-0 px-0 flex min-h-[99vh] md:min-h-[120vh] -mt-24 -z-30 flex-col items-center justify-center">
                <div className="w-[90%] m-auto flex flex-col items-center gap-10">
                    <h1 className="font-serif -z-20 text-center text-2xl md:text-4xl lg:text-7xl leading-loose text-white">
                        Empower Your Wellness  Journey <br /> with <span className="text-primary">Health Optima</span>
                    </h1>
                    <h3 className="text-white text-lg font-sans text-center md:text-3xl font-thin">Your Ultimate Health and Wellness Companion</h3>
                </div>
            </div>
        </section>
    )
}

export default hero