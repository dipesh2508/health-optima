"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-24 border-gray-200 bg-purple-200 text-slate-800">
      <div className="z-50 mx-auto flex max-h-96 max-w-screen-xl flex-wrap items-center justify-between px-2 pt-2 md:px-0">
        <a href="" className="flex items-center">
          <Image src={logo} height={75} className="m-0" alt="Health Optima" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-primary dark:text-purple-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 ">
            <li>
              <Link
                href="/"
                className="block cursor-pointer py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="block cursor-pointer py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/apps"
                className="block cursor-pointer py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
              >
                Apps
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block cursor-pointer py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block cursor-pointer py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
              >
                Contact
              </Link>
            </li>
            <li>
              <Button>Login/Register</Button>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="z-[100] mt-3 flex w-full flex-col bg-purple-200 px-3 py-4 text-center text-base font-semibold uppercase md:hidden">
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="block py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
          >
            Blogs
          </Link>
          <Link
            href="/apps"
            className="block py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
          >
            Apps
          </Link>
          <Link
            href="/about"
            className="block py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
          >
            About
          </Link>
          <Link
            href="/app#contact"
            className="block py-2 pl-3 pr-4 hover:rounded hover:bg-purple-300 hover:text-purple-900"
          >
            Contact
          </Link>
          <Button>Login/Register</Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
