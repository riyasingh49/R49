import React, { useContext, useRef } from "react";
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
import {NavbarContext} from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const fullScreenRef = useRef(null);

  function gsapAnimation() {
    gsap.set(".fullscreennav", {
      display: "block",
    });
  
    const tl = gsap.timeline();
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
  
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
  
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
        opacity: 0,
        rotateX: 90,
        stagger: {
            amount: 0.1
        }
    })
    tl.to('.stairing', {
        height: 0,
        stagger: {
            amount: 0.1
        }
    })
    tl.to('.navlink', {
        opacity: 0
    })
    tl.to('.fullscreennav', {
        display: 'none',
        delay: 2
    })
}
useGSAP(function () {
  if (navOpen) {

      gsapAnimation()
  } else {

      gsapAnimationReverse()

  }
}, [navOpen])

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav h-screen w-full overflow-hidden z-50 text-white absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex ">
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between p-1 items-start">
          <div>
            <img src={logo} alt="Nav Logo" className="w-[4vw] h-auto" />
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-20 w-20 pt-2 relative cursor-pointer"
          >
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
