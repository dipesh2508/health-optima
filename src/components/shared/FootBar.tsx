import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import logo from "@/assets/images/logo.png";

const Footbar = () => {
  return (
    <footer className='bg-primary text-white p-4 sm:p-6 md:p-8 lg:p-16'>

      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='mb-4 sm:mb-0'>
            <Image
              className='bg-white p-6 rounded-2xl shadow-xl'
              alt='logo'
              src={logo}
              width={200}
              height={50}
            />
            <h1 className='text-xl sm:text-2xl font-bold mt-4 font-serif'>HEALTH OPTIMA INC.</h1>
            <h2 className='text-md sm:text-lg font-light'>CARE N&#39; CURE</h2>
          </div>

          <div className="mt-4 sm:mt-0">
          <ul className='text-lg sm:text-xl font-medium flex flex-col gap-3'>
            <li className='hover:text-secondary flex'>
              <Link href="#" className='md:text-right flex-1'>
                Home
              </Link>
            </li>
            <li className='hover:text-secondary flex'>
              <Link href="/" className='md:text-right flex-1'>
                Blogs
              </Link>
            </li>
            <li className='hover:text-secondary flex'>
              <Link href="/" className='md:text-right flex-1'>
                Apps
              </Link>
            </li>
            <li className='hover:text-secondary flex'>
              <Link href="/" className='md:text-right flex-1'>
                About
              </Link>
            </li>
            <li className='hover:text-secondary flex'>
              <Link href="/" className='md:text-right flex-1'>
                Contact
              </Link>
            </li>
          </ul>

          </div>
        </div>

        <hr className='mt-4 sm:mt-7 mb-4 sm:mb-6 bg-white h-1' />

        <div className='flex flex-col sm:flex-row justify-between'>
          <span className='text-white'>&copy; 2023 Health Optima. All rights reserved</span>
          <div className='flex align-middle'>
            <h1 className='mt-1 text-md md:text-2xl font-semibold'>Follow us on:</h1>
            <ul className='flex saturate ml-4'>
              <li className='hover:text-secondary'>
                <Link href="">
                  <FaSquareXTwitter className="ml-2 sm:ml-6 h-12 w-12" />
                </Link>
              </li>
              <li className='hover:text-secondary'>
                <Link href="">
                  <BsLinkedin className="ml-2 sm:ml-6 mt-1 h-10 w-10" />
                </Link>
              </li>
              <li className='hover:text-secondary'>
                <Link href="">
                  <ImFacebook2 className="ml-2 sm:ml-6 mt-1 h-10 w-10" />
                </Link>
              </li>
              <li className='hover:text-secondary'>
                <Link href="">
                  <FaInstagramSquare className="ml-2 sm:ml-6 h-12 w-12" />
                </Link>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
