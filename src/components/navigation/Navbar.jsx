import React, { useRef } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navGreenRef = useRef(null);

  return (
    <div className="z-4 flex fixed top-0 w-full items-start justify-between">
      <div>
        <img src={logo} alt="Nav Logo" className="w-[6vw] h-auto" />
      </div>
      <div
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className=" h-14 bg-black relative w-[16vw]"
      >
        <div ref={navGreenRef} className="bg-[#7d4cd7] absolute transition-all top-0 h-0 w-full"></div>
        <div className="relative "></div>
      </div>
    </div>
  );
};

export default Navbar;
