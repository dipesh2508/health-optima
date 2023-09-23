"use client"

import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <nav className="bg-purple-200 text-slate-800 border-gray-200 h-24">
      <div className="max-w-screen-xl max-h-96 flex z-50 flex-wrap items-center justify-between mx-auto pt-2 px-2 md:px-0">
        <a href="" className="flex items-center">
          <Image src={logo} height={75} className="m-0" alt="Health Optima" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-primary dark:text-purple-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
            <li>
              <Link href="/" className="block cursor-pointer py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded" >
                Home</Link>
            </li>
            <li>
              <Link href="/blogs" className="block cursor-pointer py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">
                Blogs
                </Link>
            </li>
            <li>
              <Link href="/apps" className="block cursor-pointer py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">
                Apps
                </Link>
            </li>
            <li>
              <Link href="/about" className="block cursor-pointer py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">
                About
                </Link>
            </li>
            <li>
              <Link href="#contact" className="block cursor-pointer py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">
                Contact
                </Link>
            </li>
            <li>
              <Button>Login/Register</Button>
            </li>
          </ul>
        </div>
      </div>
      {isOpen &&
        <div className="w-full flex flex-col z-[100] mt-3 py-4 px-3 md:hidden bg-purple-200 text-base uppercase text-center font-semibold">
          <Link href="/" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded" >Home</Link>
          <Link href="/blogs" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Blogs</Link>
          <Link href="/apps" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Apps</Link>
          <Link href="/about" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">About</Link>
          <Link href="/app#contact" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Contact</Link>
          <Button>Login/Register</Button>
        </div>
      }
    </nav>

  )
}

export default NavBar;