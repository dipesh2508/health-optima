import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

import blog1 from '@/assets/images/blog 1.png'
import blog2 from '@/assets/images/blog 2.png'
import blog3 from '@/assets/images/blog 3.png'
import blog4 from '@/assets/images/blog 4.png'

const data = [
    {
        no: '01',
        image: blog1,
        category: 'category',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.',
        link: '#'
    }
    ,
    {
        no: '02',
        image: blog2,
        category: 'category',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.',
        link: '#'
    },
    {
        no: '03',
        image: blog3,
        category: 'category',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.',
        link: '#'
    },
    {
        no: '04',
        image: blog4,
        category: 'category',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est.',
        link: '#'
    }
]
const blog = () => {
    return (
        <section className='min-h-screen mt-28 flex flex-col items-center'>
            <h1 className='text-4xl font-serif font-bold'>
                Take a <span className='text-secondary'>Look</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mx-12 md:mx-24 my-14 md:mt-28 content center'>
                {data.map((item, index) => (

                        <div className='grid grid-cols-1 md:grid-cols-2 md:content-center align-middle gap-3' key={index}>
                            <div className='grid grid-1 content-center'>
                                <Image height={34} width={473} src={item.image} alt="" className='rounded-md hover:drop-shadow-lg' />
                            </div>
                            <div className='flex flex-col text-center md:text-left'>
                                <h1 className='text-base font-sans font-thin '>
                                    {item.category}
                                </h1>
                                
                                
                                <h1 className='text-2xl font-serif leading-6 font-semibold'>
                                    {item.title}
                                </h1>
                                <h1 className='text-xs font-sans font-light mt-1'>
                                    {item.description}
                                </h1>
                                <div className='flex justify-center md:justify-start'><Button variant={'secondary'} size={'sm'} className='mt-2'>Read</Button></div>
                                
                            </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default blog