import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import explorePage1  from "../assets/explorePage1.avif";
import explorePage2 from "../assets/explorePage2.avif";
import explorePage3 from "../assets/explorePage3.avif";
import explorePage4 from "../assets/explorePage4.avif";
import explorePage5 from "../assets/explorePage5.avif";
import explorePage6 from "../assets/explorePage6.avif";
import explorePage7 from "../assets/explorePage7.avif";
import explorePage8 from "../assets/explorePage8.avif";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";



const Projects = () => {
  const projects = [
    {image1: explorePage1, image2: explorePage2},
    {image1: explorePage3, image2: explorePage4},
    {image1: explorePage5, image2: explorePage6},
    {image1:explorePage7, image2: explorePage8}
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:"100px",
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:".lol",
        markers:true,
        start:"top 100%",
        end:"top -150%",
        scrub:true
      }
    })
  })

  return (
    <div className="p-4 mb-[40vh]">
      <div className=" pt-[40vh]">
        <h2 className="font-[font2] text-[9.5vw] uppercase">Explore</h2>
      </div>
      <div className="-mt-10 lol">
        {projects.map(function(elem,idx){
          return <div key={idx} className="hero w-full h-[300px] mb-4 flex gap-4 " >
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}

      </div>
    </div>
  );
};

export default Projects;
