import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-center fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex items-center w-full h-full px-2 2xl:px-16 my-2'>
            <Image src='/../public/assets/A4.png' alt='/' width='125' height='50'
            />      
        </div>
           <ul className='hidden md:flex  '>
            <Link href='/'>
                <li className='text-lg  mx-10 my-6'>Home</li>
            </Link>
            <Link href='/'>
                <li className='text-lg  mx-10 my-6'>About</li>
            </Link>
            <Link href='/'>
                <li className='text-lg  mx-10 my-6'>Skills</li>
            </Link>
            <Link href='/'>
                <li className='text-lg  mx-10 my-6'>Projects</li>
            </Link>
            <Link href='/'>
                <li className='text-lg  mx-10 my-6'>Contact</li>
            </Link>
           </ul>
           <div className='md:hidden my-6 mx-4'>
            <AiOutlineMenu size={25}/>
           </div>
     {/* <div className='fixed left-0 top-0 w-full h-screen bg-white/30'>
        <div className='top-0 left-0 fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1A202C] p-10 ease-in duration-500'></div>
        </div>    */}
    </div>
  )
}

export default Navbar 