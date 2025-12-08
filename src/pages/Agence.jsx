import React, { useRef } from "react";
import image1 from "../assets/image1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null)
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 28%',
        end: 'top -70%',
        pin:true
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-2xl  left-[30vw] top-60 bg-amber-50">
          <img className="h-full object-cover w-full" src={image1} alt="" />
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[18vw]">
              Natural <br />
              Harmony
            </h1>
          </div>
          <div className="pl-[45%] mt-[20]">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Step into a world shaped by nature’s gentle rhythm, where every
              moment feels alive, every breath carries calm, and every
              experience invites you to rediscover beauty, peace, and connection
              within.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
