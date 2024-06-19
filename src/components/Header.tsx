import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import LNlogo from "../assets/LN-logo-white.png";

import Navbar from "./Navbar";

function Header() {
  const [displayNavbar, setDisplayNavbar] = useState<string>("hidden");

  const openNavbar = (): void => {
    setDisplayNavbar("block");
  };
  const closeNavbar = (): void => {
    setDisplayNavbar("hidden");
  };

  return (
    <div className="absolute w-full z-40">
      <Navbar displayNavbar={displayNavbar} closeNavbar={closeNavbar} />
      <div className="py-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center w-1/2 text-white">
          <NavLink to="/" className="text-lg font-bold flex items-center">
            <img
              src={LNlogo}
              alt="Laia Navalon Arxe Fullstack Web Developer"
              className="h-8 pr-8"
            />
            LAIA NAVALON
          </NavLink>
          <NavLink to="/about" className="hover:font-medium ml-32">
            ABOUT
          </NavLink>
          <HashLink to="#contact" smooth className="hover:font-medium ml-36">
            CONTACT
          </HashLink>
        </div>
        <button onClick={openNavbar}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clipPath="url(#clip0_429_11066)">
                {" "}
                <path
                  d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                  stroke="#000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11066">
                  {" "}
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.000915527)"
                  ></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
