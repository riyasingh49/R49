import React, { useRef } from "react";
import explore1 from "../../assets/explore1.avif";
import explore2 from "../../assets/explore2.avif";
import experience1 from "../../assets/experience1.avif";
import experience2 from "../../assets/experience2.avif";
import discover1 from "../../assets/discover1.avif";
import discover2 from "../../assets/discover2.avif";
import connect1 from "../../assets/connect1.avif";
import connect2 from "../../assets/connect2.avif";
import logo from "../../assets/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullScreenNav = () => {
  const fullNavLinksRef =  useRef(null);
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.from(".stairing", {
      delay:1,
      height: 0,
      stagger: {
        amount: -0.2,
      },
    }),
    tl.from(fullNavLinksRef.current,{
      opacity: 0,
    }),
    tl.from('.links',{
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    })
   
  });
  return (
    <div
      id="fullscreennav"
      className="h-screen w-full hidden overflow-hidden text-white absolute"
    >
      <diving className="h-screen w-full fixed">
        <div className="h-full w-full flex ">
          <div className=" stairing h-full w-1/5 bg-red-900"></div>
          <div className=" stairing h-full w-1/5 bg-red-900"></div>
          <div className=" stairing h-full w-1/5 bg-red-900"></div>
          <div className=" stairing h-full w-1/5 bg-red-900"></div>
          <div className=" stairing h-full w-1/5 bg-red-900"></div>
        </div>
      </diving>
      <div ref={fullNavLinksRef} className="relative">
        <div className="flex w-full justify-between p-1 items-start">
          <div>
            <img src={logo} alt="Nav Logo" className="w-[6vw] h-auto" />
          </div>
          <div className="h-20 w-20 pt-2 relative cursor-pointer">
            <div className="h-26 w-1 absolute -rotate-45 origin-top bg-fuchsia-200"></div>
            <div className="h-26 w-1 absolute right-0 rotate-45 origin-top bg-fuchsia-200"></div>
          </div>
        </div>
        <div className="py-10 ">
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
              Explore
            </h1>
            <div className="moveLink absolute bg-fuchsia-200 text-black flex top-0">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Find Your Escape
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={explore1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Find Your Escape
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={explore2}
                ></img>
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Find Your Escape
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={explore1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Find Your Escape
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={explore2}
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
              Experience
            </h1>
            <div className="moveLink absolute bg-fuchsia-200 text-black flex top-0">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Live the Moment
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={experience1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Live the Moment
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={experience2}
                ></img>
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Live the Moment
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={experience1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Live the Moment
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={experience2}
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
              Discover
            </h1>
            <div className="moveLink absolute bg-fuchsia-200 text-black flex top-0">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Beyond the Obvious
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={discover1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Beyond the Obvious
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={discover2}
                ></img>
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Beyond the Obvious
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={discover1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Beyond the Obvious
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={discover2}
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top  relative border-y border-white">
            <h1 className="font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
              Connect
            </h1>
            <div className="moveLink absolute bg-fuchsia-200 text-black flex top-0">
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Be Part of It
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={connect1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Be Part of It
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={connect2}
                ></img>
              </div>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Be Part of It
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={connect1}
                ></img>
                <h2 className="whitespace-nowrap font-[font2] text-[9vw] leading-[0.8] pt-5 text-center uppercase">
                  Be Part of It
                </h2>
                <img
                  className="h-22 rounded-full shrink-0 w-50 object-cover"
                  src={connect2}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
