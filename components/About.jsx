import React from 'react'
import Image from 'next/image';

const About = () => {
    return (
      <div id='about' className='w-full md:h-96 p-2 flex items-center '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='text-2xl w-24 h-10 bg-[#81e6cedd] text-black rounded-xl mt-3 py-1 font-medium px-2'>
              About
            </p>
            <h2 className='py-4 font-bold'>Who Am I</h2>
            <p className='py-2 text-lg text-white'>
             I'm Anubhab Patra, a sophomore from National Institute of Technology, Rourkela (INDIA) majoring in Electronics and Communication Engineering.I specialise in Fontend Developement having strong experience in HTML, CSS,Javascript and frameworks like Reactjs, Nextjs &Tailwind CSS.I am a quick learner and can pick up new tech stacks as needed.
              
            </p>
            <p className='py-2 text-lg  text-white'>
              I started web developement in 2021 and have built multiple websites mobile responsive front-end UI applications that connect with API’s and other backend technologies. Apart from Coding I engage myself in content development and organising events in clubs.
            </p>

          </div>
          <div className='w-full h-full m-auto  rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 mx-auto'>
            <Image src='/../public/assets/B4.png' width='264' height='264' className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    );
  };

export default About
