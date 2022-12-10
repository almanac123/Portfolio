import React, { useState } from 'react'
import Project from './Project'
import data from './data'

 const Projects = () => {
    const [project,setProject]=useState(data)
    return (
        <div id='projects' className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {project.map((data)=>{
                    <Project
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
