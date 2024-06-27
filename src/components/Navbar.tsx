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
      <div className="w-full h-20 md:h-32 left-0 py-4 bg-lightgrey absolute z-50 px-10 xl:px-8 2xl:px-6">
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
              className="hover:font-medium md:ml-20 xl:ml-28 2xl:ml-32"
            >
              ABOUT
            </NavLink>
            <HashLink
              to="#contact"
              smooth
              className="hover:font-medium md:ml-28 xl:ml-32 2xl:ml-36"
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
            <div className="w-1/2 h-screen px-16 flex flex-col justify-between absolute right-0 py-14 bg-lightgrey z-40">
              <div className="flex flex-col">
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
                <div className="pl-4 flex flex-col">
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
                </div>
                <HashLink
                  to="#contact"
                  smooth
                  onClick={props.closeNavbar}
                  className="hover:font-medium py-4"
                >
                  CONTACT
                </HashLink>
              </div>
              <div>
                <h3>LET'S CONNECT!</h3>
                <div className="flex pt-6">
                  <a
                    href="https://www.linkedin.com/in/laianavalonarxe/"
                    target="_blank"
                  >
                    <svg
                      className="mr-4"
                      width="34px"
                      height="34px"
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
                        <path
                          d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a href="https://github.com/feelikeadoll" target="_blank">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-140.000000, -7559.000000)"
                            fill="#000000"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                id="github-[#000000]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
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
