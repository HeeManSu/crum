import React from 'react'
import Image from 'next/image'
import { AiFillPlusCircle } from 'react-icons/ai';
import { FcElectricity } from 'react-icons/fc';

const HomePage = () => {
  return (
    <div className='flex justify-between items-center px-10 mt-10'>
        <div className=''>
            <p className='text-3xl'> Real-Time Collab with your friends <br /> While Coding...</p>
            <div className='flex justify-around mt-10 text-lg'>
                <button className='flex justify-between items-center px-10 py-3 bg-blue-500 rounded-full '><AiFillPlusCircle  className='mr-3 text-2xl'/>New Room</button>
                <button className='flex justify-between items-center px-10 py-3 bg-white text-black rounded-full '>< FcElectricity className='mr-3 text-2xl'/>Enter a Room</button>
            </div>
        </div>
        <Image src="/homepage_image.png" alt="homepage code collab" height={355} width={2790} className='w-[400px]'/>
    </div>
  )
}

export default HomePage