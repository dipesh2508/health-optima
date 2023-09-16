import React from 'react'
import Image from 'next/image'

import { BsLinkedin } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { FaSquareTwitter } from 'react-icons/fa6'
import logo from "@/assets/images/logo.png"

import Link from 'next/link'
 const footbar = () => {
  return (
    <>
    <footer className='bg-primary text-white px-32 pt-16 pb-8'>

    <div className=' flex justify-between'>
      <div>
        <Image className='bg-white p-6 rounded-2xl drop-shadow-xl mb-4' alt='logo' src={logo}  width={230} height={50} />
        <h1 className='text-4xl font-bold font-serif'>HEALTH OPTIMA INC.</h1>
        <h2 className="text-2xl mt-2 font-light">CARE N&#39; CURE</h2>
      </div>

      <div className="">
        <ul className='text-2xl  font-medium flex flex-col space-y-4'>
          <li className=' hover:text-secondary flex'><Link href="#" className='text-right flex-1'>Home</Link></li>
          <li className=' hover:text-secondary flex'><Link href="/" className='text-right flex-1'>Blogs</Link></li>
          <li className=' hover:text-secondary flex'><Link href="/" className='text-right flex-1'>Apps</Link></li>
          <li className=' hover:text-secondary flex'><Link href="/" className='text-right flex-1'>About</Link></li>
          <li className=' hover:text-secondary flex'><Link href="/" className='text-right flex-1'>Contact</Link></li>
        </ul>
      </div>

      </div>
      <hr className=' mt-7 mb-6 bg-white h-1 '/>
     <div className='flex justify-between'>
      <span className='text-white '>&copy; 2023 Health Optima. All rights rerserved</span>
      <div className='flex '>
        <h1 className=' mt-1 text-2xl font'>Follow us on:</h1>
        <ul className='flex saturate '>
        <li className='hover:text-secondary'><Link href=""> <FaSquareTwitter className="ml-6 h-12 w-12" /> </Link></li>
        <li className='hover:text-secondary'><Link href=""><BsLinkedin className="ml-6 mt-1 h-10 w-10"/></Link></li>
        <li className='hover:text-secondary'><Link href=""><ImFacebook2 className="ml-6 mt-1 h-10 w-10"/></Link></li>
        </ul>
      </div>
      </div> 
    </footer>
    </>
    
  )
}

export default footbar