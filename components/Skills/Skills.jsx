import React, { useState } from 'react'
import Skill from './Skill'
import data from './data'

const Skills = () => {
    const [skill,setSkill]=useState(data);
  return (
    <div id='skills' className='w-full lg:h-screen p-2 mt-0 md:mt-20 lg:mt-0'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='w-16 h-10 bg-[#81e6cedd] text-black rounded-lg  my-4  py-1 font-semibold px-2 text-xl tracking-wide'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
           {skill.map((data)=>{
            return <Skill 
            key={data.id}
            img={data.img}
            name={data.name}
            />
           })}
        </div>
      </div>
    </div>  
    
  )
}

export default Skills