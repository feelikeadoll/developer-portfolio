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
      <div className="w-full h-20 md:h-32 left-0 py-4 bg-lightgrey absolute z-50 px-10 xl:px-0">
        <div className="max-w-7xl mx-auto flex justify-between items-start md:items-center">
          <div className="hidden md:flex items-center w-full lg:w-3/4 xl:w-1/2 text-black">
            <NavLink to="/" className="text-lg font-bold flex items-center">
              <img
                src={LNlogo}
                alt="Laia Navalon Arxe Fullstack Web Developer"
                className="h-8 pr-8"
              />
              LAIA NAVALON
            </NavLink>
            <NavLink
              to="/about"
              className="hover:font-medium md:ml-20 xl:ml-32"
            >
              ABOUT
            </NavLink>
            <HashLink
              to="#contact"
              smooth
              className="hover:font-medium md:ml-28 xl:ml-36"
            >
              CONTACT
            </HashLink>
          </div>
          <div className="md:hidden w-full flex items-start justify-between py-2 text-black">
            <NavLink to="/" className="text-lg font-bold flex items-center">
              <img
                src={LNlogo}
                alt="Laia Navalon Arxe Fullstack Web Developer"
                className="h-8 pr-8"
              />
              LAIA NAVALON
            </NavLink>
            <div className="w-1/2 h-screen px-16 flex flex-col absolute right-0 py-14 bg-lightgrey z-40">
              <NavLink
                to="/about"
                onClick={props.closeNavbar}
                className={({ isActive }) =>
                  isActive ? "font-bold py-4" : "py-4"
                }
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/work"
                onClick={props.closeNavbar}
                className={({ isActive }) =>
                  isActive ? "font-bold py-4" : "py-4"
                }
              >
                WORK
              </NavLink>
              <NavLink
                to="/work/commercial"
                onClick={props.closeNavbar}
                className={({ isActive }) =>
                  isActive ? "font-bold py-4" : "py-4"
                }
              >
                COMMERCIAL
              </NavLink>
              <NavLink
                to="/work/personal"
                onClick={props.closeNavbar}
                className={({ isActive }) =>
                  isActive ? "font-bold py-4" : "py-4"
                }
              >
                PERSONAL
              </NavLink>
              <HashLink
                to="#contact"
                smooth
                onClick={props.closeNavbar}
                className="hover:font-medium py-4"
              >
                CONTACT
              </HashLink>
            </div>
          </div>
          <button
            onClick={props.closeNavbar}
            className="btn btn-ghost btn-square z-50"
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
                <g clipPath="url(#clip0_429_10978)">
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
        <div className="max-w-7xl h-8 py-1 mx-auto hidden md:block">
          <div className="text-black">
            <NavLink to="/work" className="text-lg font-bold ml-36">
              WORK
            </NavLink>
            <NavLink
              to="/work/commercial"
              className="hover:font-medium md:ml-20 xl:ml-32"
            >
              COMMERCIAL
            </NavLink>
            <NavLink
              to="/work/personal"
              className="hover:font-medium md:ml-12 xl:ml-20"
            >
              PERSONAL
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
