import Dipesh from '@/assets/images/dipesh.png'
import Isheta from '@/assets/images/isheta.png'
import Divyanshu from '@/assets/images/divyanshu.png'
import Preyanshu from '@/assets/images/preyanshu.png'

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

import Image from 'next/image'
import Link from 'next/link'

const data = [
  {
    name: 'Dipesh Ranjan',
    image: Dipesh,
    team: 'Team Lead',
    role: 'Front-End Developer and UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/dipesh-ranjan/',
    instagram: 'https://www.instagram.com/dipesh_ranjan07/',
    github: 'https://github.com/dipesh2508'
  },
  {
    name: 'Isheta Aggarwal',
    image: Isheta,
    team: 'Team Member',
    role: 'Research Analyst and Copywriter',
    linkedin: 'https://www.linkedin.com/in/isheta-aggarwal/',
    instagram: 'https://www.instagram.com/isheta20/',
    github: 'https://github.com/Isheta20'
  },
  {
    name: 'Divyanshu Agarwal',
    image: Divyanshu,
    team: 'Team Member',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/divyanshu-agarwal-15774b222/',
    instagram: 'https://www.instagram.com/divyanshu_agarwal8/',
    github: 'https://github.com/Divyanshu2309'
  },
  {
    name: 'Preyanshu Dapola',
    image: Preyanshu,
    team: 'Team Member',
    role: 'Front-End Developer and Keyframe Animator',
    linkedin: 'https://www.linkedin.com/in/preyanshu-d-852019231/',
    instagram: 'https://www.instagram.com/dpreyanshu/',
    github: 'https://github.com/sickCoder6184'
  }
];

const about = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-serif text-4xl font-semibold mb-12 -z-50">Meet Our <span className="text-primary">Team</span></h1>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-12 md:gap-0">
      {data.map((item, index) => (
          <div className='flex flex-col gap-1 items-center ease-in-out duration-400' key={index}>

            <div className='w-72 h-80 -z-40 left-0 top-0 ease-in-out duration-400 bg-gradient-radial hover:bg-gradient-to-b from-blue-500 to-purple-500 rounded-tl-3xl rounded-br-3xl'>
            <Image src={item.image} alt={item.name} className='-z-30 transition ease-in-out duration-400 w-72 h-80 scale-90 hover:scale-100 rounded-tl-3xl rounded-br-3xl' />
            </div>
            
              
              <h1 className=' font-serif mt-4 text-2xl font-medium md:font-semibold text-secondary'>
                  {item.name}
              </h1>
              <h1 className='text-sm font-sans font-light '>
                  {item.team}
              </h1>
              <h1 className='text-md font-sans font-medium text-center '>
                  {item.role}
              </h1>
              <div className='flex justify-center md:justify-start'>
                <Link href={item.linkedin} target="_blank" className='cursor-pointer' rel="noopener noreferrer"> <BsLinkedin className="h-8 w-8 m-2 cursor-pointer  hover:text-secondary" /> </Link>
                <Link href={item.instagram} target="_blank" className='cursor-pointer' rel="noopener noreferrer"><BsInstagram className="h-8 w-8 m-2 cursor-pointer hover:text-secondary" /></Link>
                <Link href={item.github} target="_blank" className='cursor-pointer' rel="noopener noreferrer"> <BsGithub className="h-8 w-8 m-2 cursor-pointer hover:text-secondary" /> </Link>
          </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default about