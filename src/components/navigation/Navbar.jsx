import React, { useContext, useRef } from "react";
import logo from "../../assets/logo.png";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavbarContext);

  return (
    <div className="z-40 flex fixed top-0 w-full items-center justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="Nav Logo" className="w-[6vw] h-10" />
        </Link>
      </div>

      <div
        onClick={() => setnavOpen(true)}
        onMouseEnter={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = "0%";
        }}
        className="h-14 bg-black relative w-[16vw] "
      >
        <div
          ref={navGreenRef}
          className="bg-[#7d4cd7] absolute transition-all duration-300 top-0 h-0 w-full"
        ></div>

        <div className="h-full px-12 relative flex flex-col justify-center items-end gap-1.5">
          <div className="w-16 h-0.5 bg-white"></div>
          <div className="w-10 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
