import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div id='profile' className='w-full mx-auto py-2 text-center  h-120 z-[5] '>
        <div className='max-w-[1440px] w-full h-full '>
            <div className='rounded-full w-40 h-40 mx-auto md:w-48 md:h-48 mt-40 relative overflow-hidden '>
            <Image src='/../public/assets/dp4.jpg' objectFit="cover" layout="fill" alt='img'>

            </Image>
            </div>
            <div className='flex flex-col my-6 justify-center '>
                <h1 className='text-gray-400 mt-4'>Hi,I am <span className='text-white'>Anubhab Patra</span> from India </h1>
                <h2 className='my-1'>Frontend Developer</h2>
                <h3 src='/..public/assets/RESUME.pdf' className='w-24 h-8 bg-[#81e6cedd] text-black rounded-lg mx-auto my-4 mb-16 py-1 font-semibold px-2'>Resume</h3>

            </div>
            
        </div>
    </div>
  )
}

export default Profile