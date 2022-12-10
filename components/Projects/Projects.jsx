import React, { useState } from 'react'
import Project from './Project'
import data from './data'

 const Projects = () => {
    const [project,setProject]=useState(data);
    return (
        <div id='projects' className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='w-24 h-10 bg-[#81e6cedd] text-black rounded-lg  my-4  py-1 font-semibold px-2 text-xl tracking-wide'>
              Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {project.map((data)=>{
                    return <Project
                    key={data.id}
                    name={data.name}
                    img={data.img}
                    url={data.url}
                    />
                })}
                
                </div>
            </div>
         </div>
    )
}
export default Projects
