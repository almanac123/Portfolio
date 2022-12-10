import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({img,tech,name,url}) => {
    return (
        <div className='relative  items-center justify-center h-auto w-full shadow-xl rounded-xl '>
        <Image className='rounded-xl shadow-2xl border-4' src={img} alt='/' /> 
        <div className='' >
            <h3 className='text-xl my-2 text-white tracking-wider text-center'>{name}</h3>
            <p className=' pt-2 text-[#81e6cedd] text-center'>{tech}</p>
            <Link href={url}>
                <p className='text-center py-3 rounded-xl bg-[#81e6cedd] text-black font-semibold text-lg cursor-pointer w-28 h-12 items-center mx-auto'>Learn More</p>
            </Link>
        </div>
     </div>
      )
}

export default Project