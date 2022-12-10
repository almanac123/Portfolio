import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='w-full' id='contact'>
        
         <div className='flex  items-center justify-between max-w-[330px] m-auto py-4 mb-8'>
            <a
              href='https://github.com/almanac123'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full  bg-white  shadow-gray-400  cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Image src='/../public/assets/github3.png' alt='oops' width='48' height ='48'/>
               </div>
            </a>
            <a
              href='https://www.linkedin.com/in/anubhabpatra02/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full  bg-white shadow-gray-600  cursor-pointer hover:scale-110 ease-in duration-300 p-3'>
              <Image src='/../public/assets/linkedin-4.png' alt='oops' width='28' height ='28'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full  p-2 shadow-gray-400  cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <Image src='/../public/assets/mail.png' alt='oops' width='32' height ='32'/>
              </div>
            </Link>
          </div>  
    </div>
  )
}

export default Contact