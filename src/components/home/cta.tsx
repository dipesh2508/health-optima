import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import bmi1 from '@/assets/images/bmi1.png'
import sleep1 from '@/assets/images/sleep1.png'
import water1 from '@/assets/images/water1.png'

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
        <div className='bg-primary rounded-md shadow-custom m-16 py-12 flex flex-col items-center'>

            <h3 className='text-xl text-white font-regular'>Unlock your Potential</h3>

            <h1 className='text-4xl font-serif text-white font-semibold'>Harness the Power of our Applications</h1>

            <div className='flex flex-row gap-8 justify-center mt-8'>


                {data.map((item, index) => (
                    <div className='relative' key={index}>
                        <Image src={item.image} height={400} width={400} className='rounded grayscale hover:grayscale-0 ease-in-out delay-100' alt={item.title} />
                        <div className='absolute bottom-0 text-center left-0 right-0 m-auto px-4 py-4 text-lg'>
                            <h1 className='font-sans text-white font-semibold font-outline-2 text-4xl'>{item.title}</h1>
                        </div>
                    </div>
                ))}

            </div>

            <Button className='mt-8' variant={'cta'}>learn more</Button>
        </div>
    )
}

export default cta