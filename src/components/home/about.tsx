import Image from 'next/image'
import { Button } from '@/components/ui/button'
import logo from '@/assets/images/logo.png'

const about = () => {
  return (
    <div className='bg-secondary grid grid-cols-3 py-24 gap-8 my-4'>
        <div className='bg-white my-12 ml-40 px-16 py-32 rounded-lg shadow-custom'>
            <Image src={logo} height={480} width={800} alt='logo' />
        </div>
        <div className='col-span-2 mr-64 mt-16'>
            <h3 className='text-white font-light text-2xl mb-4'>
                Discover Our Story
            </h3>
            <h1 className='text-white font-semibold font-serif text-6xl mb-4'> 
                About Us
            </h1>

            <p className='text-white font-thin text-lg text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra magna sed pretium sagittis. Nullam ultrices nec ipsum non vestibulum. Proin a tincidunt est. Donec vitae dui in velit ultricies fermentum. Ut euismod, massa vitae hendrerit tincidunt, lorem ipsum ultrices massa, auctor ultricies nisl est eget nunc. Donec vitae dui in velit ultricies fermentum. Ut euismod, massa vitae hendrerit tincidunt, lorem ipsum ultrices massa, auctor ultricies nisl est eget nunc.
            </p>
            <Button className='mt-4'>learn more</Button>
        </div>
    </div>
  )
}

export default about