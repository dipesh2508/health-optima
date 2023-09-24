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

            <div className='w-72 h-80 left-0 top-0 ease-in-out duration-400 bg-gradient-radial hover:bg-gradient-to-b from-blue-500 to-purple-500 rounded-tl-3xl rounded-br-3xl'>
            <Image src={item.image} alt={item.name} className=' transition ease-in-out duration-400 w-72 h-80 scale-90 hover:scale-100 rounded-tl-3xl rounded-br-3xl' />
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

      <div className='m-4 md:m-16 p-4 bg-secondary rounded-lg'>
        <div className='bg-white p-1 rounded-lg'>
          <div className='bg-secondary p-2 md:p-4 rounded-lg flex flex-col items-center'>
          <h1 className='text-4xl font-serif text-white'>About Us</h1>
          <p className='text-white font-sans text-sm m-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex massa, ornare commodo lobortis sed, rutrum at elit. Aliquam malesuada ac neque id dignissim. Nullam id finibus velit, sed vulputate nisl. Integer et lorem elit. Etiam at mi augue. Curabitur porttitor sed urna ut elementum.<br></br><br></br>
Nullam accumsan neque efficitur enim condimentum euismod. Mauris accumsan tortor ut massa facilisis volutpat. Nullam auctor urna eget ligula pellentesque dictum. Aenean sit amet efficitur mauris, et pretium nisl. Donec nec facilisis leo. Integer consequat dapibus sem, id porttitor lacus eleifend at. Mauris mauris tortor, faucibus eget diam sit amet, pharetra rhoncus nulla. Pellentesque feugiat dolor odio, vitae facilisis nulla hendrerit ac. Maecenas mattis nulla metus, a vulputate lacus rhoncus at. Cras neque nibh, commodo nec sem vitae, imperdiet ultrices arcu. Aenean efficitur hendrerit quam sit amet convallis. Pellentesque tempor ante non sollicitudin egestas. Sed ut eleifend augue, id posuere dui. Vestibulum nibh velit, tincidunt in lacus at, ullamcorper mollis orci.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-8 md:gap-4 items-center my-12 mx-4 md:m-16'>
        <div className='bg-primary rounded-lg p-4  text-white flex flex-col gap-4 items-center'>
          <h3 className='bg-secondary mt-2 p-1 text-white font-sans'>WHO WE ARE, WHAT WE DO</h3>
          <h1 className='font-serif text-3xl font-semibold'>OUR VISION</h1>
          <p className='text-justify mt-0 m-4 md:m-8 font-sans text-black font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex massa, ornare commodo lobortis sed, rutrum at elit. Aliquam malesuada ac neque id dignissim. Nullam id finibus velit, sed vulputate nisl. Integer et lorem elit. Etiam at mi augue. Curabitur porttitor sed urna ut elementum.</p>
        </div>
        <div className='bg-primary rounded-lg p-4 text-white flex flex-col gap-4 items-center'>
          <h3 className='bg-secondary mt-2 p-1 text-white font-sans'>WHAT WE ASPIRE TO BE</h3>
          <h1 className='font-serif text-3xl font-semibold'>OUR MISSION</h1>
          <p className='text-justify mt-0 m-4 md:m-8 font-sans text-black font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor justo lacinia, bibendum tellus a, ultricies magna. Etiam ex massa, ornare commodo lobortis sed, rutrum at elit. Aliquam malesuada ac neque id dignissim. Nullam id finibus velit, sed vulputate nisl. Integer et lorem elit. Etiam at mi augue. Curabitur porttitor sed urna ut elementum.</p>
        </div>
      </div>
    </section>
  )
}

export default about