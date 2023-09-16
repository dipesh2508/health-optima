"use client"
import React from 'react'
import Image from 'next/image'
import facebook from '@/assets/images/facebook.png'
import linkden from '@/assets/images/linkden.png'

import logo from "@/assets/images/logo.png"
import twiter from "@/assets/images/twiter.svg"

import Link from 'next/link'
 const footbar = () => {
  return (
    <>
    <footer className='bg-purple-500 text-white p-16'>

    <div className=' flex justify-between'>
      <div>
        <Image className='bg-white p-6 rounded-2xl shadow-xl mb-4' alt='logo' src={logo}  width={230} height={50} />
        <h1 className='text-4xl font-bold'>HEALTH OPTIMA INC.</h1>
        <h2 className='text-2xl mt-2'>CARE N'CURE</h2>
      </div>

      <div className=''>
        <ul className='text-2xl mr-10  flex flex-col space-y-4'>
          <li className=' hover:text-black'><Link href="#">Home</Link></li>
          <li className=' hover:text-black'><Link href="/">Blogs</Link></li>
          <li className=' hover:text-black'><Link href="/">Apps</Link></li>
          <li className=' hover:text-black'><Link href="/">About</Link></li>
          <li className=' hover:text-black'><Link href="/">Contact</Link></li>
        </ul>
      </div>

      </div>
      <hr className=' mt-7 mb-6 bg-white h-1 '/>
     <div className='flex justify-between'>
      <span className='text-white '>&copy; 2023 Health Optima. All rights rerserved</span>
      <div className='flex '>
        <h1 className=' mt-1 text-2xl font'>Follow us on:</h1>
        <ul className='flex saturate '>
        <li className='hover:fill-cyan-700'><Link href=""><Image className='ml-6 mt-1' alt='logo' src={twiter}  width={37} height={10} /></Link></li>
        <li><Link href=""><Image className='ml-6 fill-black ' alt='logo' src={linkden}  width={47} height={10} /></Link></li>
        <li><Link href=""><Image className='ml-6 ' alt='logo' src={facebook}  width={47} height={10} /></Link></li>
        </ul>
      </div>
      </div> 
    </footer>
    </>
    
  )
}

export default footbar