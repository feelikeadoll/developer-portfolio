import { Link } from "react-router-dom";

import Commercial from "../assets/work-commercial.png";
import Personal from "../assets/work-personal-1.png";

function WorkSection() {
  return (
    <section
      id="work"
      className="w-full px-10 xl:px-8 2xl:px-6 bg-lightgrey text-black h-full lg:h-screen"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-col">
          <h2 className="pt-16 xl:pt-20">WORK</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl my-4">Commercial</h3>
              <Link to="/work/commercial" className="w-10/12">
                <img src={Commercial} alt="" />
              </Link>
              <Link to="/work/commercial">
                <button className="mt-8 mb-10 md:my-10 btn btn-neutral bg-black text-white">
                  <h3 className="text-md pr-2">SEE MORE</h3>
                  <svg
                    width="30px"
                    height="30px"
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
                      <g clipPath="url(#clip0_429_11254)">
                        <path
                          d="M10 17L15 12"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15 12L10 7"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11254">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl my-4">Personal</h3>
              <Link to="/work/personal" className="w-10/12">
                <img src={Personal} alt="" />
              </Link>
              <Link to="/work/personal">
                <button className="mt-8 mb-20 md:my-10 btn btn-neutral bg-black text-white">
                  <h3 className="text-md pr-2">SEE MORE</h3>
                  <svg
                    width="30px"
                    height="30px"
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
                      <g clipPath="url(#clip0_429_11254)">
                        <path
                          d="M10 17L15 12"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15 12L10 7"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_429_11254">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
