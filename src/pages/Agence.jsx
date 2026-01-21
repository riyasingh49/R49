import React, { useRef } from "react";
import image1 from "../assets/image1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.avif";
import image6 from "../assets/image6.avif";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.avif";
import image9 from "../assets/image9.avif";
import image10 from "../assets/image10.avif";
import image11 from "../assets/image11.avif";
import image12 from "../assets/image12.avif";
import image13 from "../assets/image13.avif";
import { Link } from "react-router-dom";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,  
        anticipatePin: 1, 
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="bg-blue-100">
      <div className="section1 py-1 mb-40">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-2xl  left-[35vw] top-60"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src={image1}
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[18vw]">
              Natural <br />
              Harmony
            </h1>
          </div>
          <div className="pl-[51%] mt-[20] pr-2">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Step into a
              world shaped by nature’s gentle rhythm, where every moment feels
              alive, every breath carries calm, and every experience invites you
              to rediscover beauty, peace, and connection within.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full bg-black  relative">
        <div className="text-white flex gap-4 p-4 pt-7">
          <div className="font-[font2] text-6xl border-2 p-2 px-4 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] items-center ">
            <Link className="text-[5.5vw] mt-6" to="/projects">
              explore
            </Link>
          </div>
          <div className="font-[font2] text-6xl border-2 p-2 px-4 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] items-center ">
            <Link className="text-[5.5vw]  mt-6" to="/agence">
              experience
            </Link>
          </div>
          <div className="font-[font2] text-[5.5vw] text-6xl border-2 p-2 px-4 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]  items-center ml-auto">
            contact
          </div>
        </div>
        <div className="font-[font1] text-gray-500 absolute bottom-0 w-full p-2 ">
          © 2026 Riya Singh. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Agence;
