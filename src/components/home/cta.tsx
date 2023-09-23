import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import bmi1 from '@/assets/images/bmi1.jpg'
import sleep1 from '@/assets/images/sleep1.png'
import water1 from '@/assets/images/water1.jpg'

const data = [
    {
        no: '01',
        image: sleep1,
        title: 'Sleep Tracker'
    },
    {
        no: '02',
        image: bmi1,
        title: 'BMI Calculator'
    },
    {
        no: '03',
        image: water1,
        title: 'Water Tracker'
    }
]
const cta = () => {
    return (
        <section className='bg-primary rounded-lg shadow-custom px-3 mx-8 my-12 md:m-16 py-12 flex flex-col items-center'>

            <h3 className='text-md md:text-xl text-white font-regular'>Unlock your Potential</h3>

            <h1 className='text-xl md:text-4xl font-serif text-center text-white font-semibold'>Harness the Power of our Applications</h1>

            <div className='flex flex-col md:flex-row gap-8 justify-center mt-8'>


                {data.map((item, index) => (
                    <div className='relative group scale-90 hover:scale-100  duration-300 ease-in-out' key={index}>
                        <Image src={item.image} height={400} width={400} className='shadow-custom rounded-lg ease-in-out duration-100' alt={item.title} />
                        <div className='ease-in-out duration-300 absolute bottom-0 bg-black bg-opacity-50 text-center left-0 right-0 m-auto mb-8 group-hover:mb-12 px-4 py-12 md:py-4 text-lg'>
                            <h1 className='font-sans text-background font-regular text-2xl md:text-4xl'>{item.title}</h1>
                        </div>
                    </div>
                ))}

            </div>

            <Button className='mt-8' variant={'cta'}>learn more</Button>
        </section>
    )
}

export default cta