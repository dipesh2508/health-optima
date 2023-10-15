import Image from 'next/image';
import registerIm from "@/assets/images/registerIm.png"
import Link from 'next/link';

const login = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between p-5 md:p-10'>
        <div className='w-full mt-20 md:w-1/2 mb-5 md:mb-0'>
          <Image src={registerIm} width={600} height={500} alt='Picture of doctor' />
        </div>

        <div className='bg-pink-100 w-full md:w-1/2 p-5 md:p-10 rounded-lg flex flex-col'>
          <h1 className='text-3xl md:text-5xl text-center font-bold text-purple-900 mt-5 md:mt-8'>
            Hello Again
          </h1>
          <h2 className='text-xl md:text-2xl text-center font-light mt-3'>Glad to See You!</h2>
          <form className='flex flex-col mt-5 md:mt-10 text-xl md:text-2xl'>

            <div className='mb-3'>
              <h1 className='text-xl font-semibold mt-3 mb-1'>Email</h1>
              <input className="rounded-md w-full" type="email" name="Email" />
              <p className='text-xs'>Enter your email address</p>
            </div>


            <div className='mb-3'>
              <h1 className='text-xl font-semibold mt-3 mb-1'>Password</h1>
              <input className='rounded-md w-full' type="password" name="Password" />
            </div>

            <button type="button" className="w-full mt-4 p-2 bg-purple-500 hover:bg-white hover:text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs md:text-sm">
              Log in
            </button>

            <div className="mt-5 flex items-center">
              <hr className="border-t border-black flex-grow" />
              <span className="text-xs mx-2">OR</span>
              <hr className="border-t border-black flex-grow" />
            </div>

            <button type="button" className="mt-4 p-3 w-full flex justify-center items-center bg-white font-semibold text-xs md:text-sm shadow-md rounded-lg">
              <svg width="20" height="16" fill="" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Sign in with Google
            </button>

            <div className='flex justify-center items-center mt-7'>
              <h1 className='text-sm md:text-base mr-2 md:mr-3'>Don&#39;t have an account</h1>
              <Link href="/register"><button className='text-xs md:text-sm text-white p-1 md:p-2 rounded-md bg-green-900' >click here
                </button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;

