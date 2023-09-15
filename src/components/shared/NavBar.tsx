import Image from "next/image";
import Link from "next/link";
import logo from './src/assets/images/logo.png'
import {Button} from '../ui/Button';

const NavBar = () => {
    return (
        
<nav className="bg-purple-200 text-slate-800 border-gray-200 h-24">
  <div className="max-w-screen-xl max-h-96 flex flex-wrap items-center justify-between mx-auto pt-2">
    <a href="" className="flex items-center">
        <Image src={logo} height={75} className="m-0" alt="Health Optima" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded" >Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Blogs</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Apps</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 hover:bg-purple-300 hover:text-purple-900 hover:rounded">Contact</a>
        </li>
        <li>
          <Button>Login/Register</Button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default NavBar;