import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='w-full p-10 py-10 text-center h-screen '>
        <div className='max-w-[1240px] w-full h-full '>
            <div className='rounded-full w-40 h-40 mx-auto md:w-48 md:h-48 mt-36  relative overflow-hidden '>
            <Image src='/../public/assets/dp4.jpg' objectFit="cover" layout="fill" alt='img'>

            </Image>
            </div>
            <div className='flex flex-col my-6 justify-center '>
                <h1 className='text-gray-400'>Hi,I am <span className='text-white'>Anubhab Patra</span> from India </h1>
                <h2 className='my-2'>Frontend Developer</h2>
                <h3 src='/..public/assets/RESUME.pdf' className='w-24 h-8 bg-[#81e6cedd] text-black rounded-xl mx-auto my-4 py-1 font-bold px-2'>Resume</h3>

            </div>
            
        </div>
    </div>
  )
}

export default Profile