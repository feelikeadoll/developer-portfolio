import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import LNlogo from "../assets/LN-logo-black.png";

type NavbarProps = {
  displayNavbar: string;
  closeNavbar: () => void;
};

function Navbar(props: NavbarProps) {
  return (
    <div className={props.displayNavbar}>
      <div className="w-full py-4 bg-lightgrey absolute z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2 text-black">
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
          <button
            onClick={props.closeNavbar}
            className="btn btn-ghost btn-square"
          >
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
                <g clip-path="url(#clip0_429_10978)">
                  {" "}
                  <path
                    d="M16.9999 7.00004L6.99994 17"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M7.00006 7.00003L17.0001 17"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_429_10978">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="max-w-7xl h-10 mx-auto">
          <div className="text-black">
            <NavLink to="/work" className="text-lg font-bold ml-36">
              WORK
            </NavLink>
            <NavLink to="/work/commercial" className="hover:font-medium ml-32">
              COMMERCIAL
            </NavLink>
            <HashLink
              to="/work/personal"
              smooth
              className="hover:font-medium ml-20"
            >
              PERSONAL
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
