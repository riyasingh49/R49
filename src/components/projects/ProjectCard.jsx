import React from 'react'
import explorePage1 from "../../assets/explorePage1.avif";


const ProjectCard = (props) => {

  return (
    <div className="w-full h-[700px] mb-4 flex gap-4 ">
          <div className="w-1/2 h-full group relative transition-all hover:rounded-[50px] overflow-hidden">
            <img className="h-full w-full object-cover" src={props.image1} alt="" />
            <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
            <h2 className="uppercase text-4xl font-[font1] pt-2 px-4 border-3 text-white border-white rounded-full">Emerald Grove</h2>
            </div>
          </div>
          <div className="w-1/2 h-full group relative transition-all hover:rounded-[50px] overflow-hidden">
            <img className="h-full w-full object-cover" src={props.image2} alt=""/>
            <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
            <h2 className="uppercase text-4xl font-[font1] pt-2 px-4 border-3 text-white border-white rounded-full">Emerald Grove</h2>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard
