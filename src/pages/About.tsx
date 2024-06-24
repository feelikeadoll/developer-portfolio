import { Link } from "react-router-dom";

import CurrentStack from "../components/CurrentStack";

import Commercial from "../assets/work-commercial.png";
import Personal from "../assets/work-personal-1.png";

function About() {
  return (
    <div className="w-full">
      <section id="about-intro" className="w-full bg-black text-white h-screen">
        <div className="z-50">
          <div className="max-w-7xl pt-28 h-full flex flex-col items-start justify-center mx-auto ">
            <div className="w-2/3 pt-20 mb-4">
              <h2 className="text-2xl">ABOUT ME</h2>

              <p className="text-md">
                After years of experience in the fashion industry, I decided to
                make a 180 degree turn and dive further into Web Development.
              </p>
              <p className="text-md">
                My journey in IT started with Harvard’s CS50 Introduction to
                Computer Science, it was just the first step into freeing myself
                from the limiting beliefs that kept me from growing and
                evolving.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="w-full bg-lightgrey text-black h-screen">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-col">
            <h2 className="pt-20">WORK</h2>
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl my-4">Commercial</h3>
                <img src={Commercial} alt="" className="w-10/12" />
                <Link to="/work/commercial">
                  <button className="my-10 btn btn-neutral bg-black text-white">
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
                        {" "}
                        <g clipPath="url(#clip0_429_11254)">
                          {" "}
                          <path
                            d="M10 17L15 12"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M15 12L10 7"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="clip0_429_11254">
                            {" "}
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            ></rect>{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl my-4">Personal</h3>
                <img src={Personal} alt="" className="w-10/12" />
                <Link to="/work/personal">
                  <button className="my-10 btn btn-neutral bg-black text-white">
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
                        {" "}
                        <g clipPath="url(#clip0_429_11254)">
                          {" "}
                          <path
                            d="M10 17L15 12"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M15 12L10 7"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="clip0_429_11254">
                            {" "}
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            ></rect>{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </g>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="w-full bg-midgrey text-black h-screen">
        {" "}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-col">
            <h2 className="pt-20">RESUME</h2>
          </div>
        </div>
      </section>
      <CurrentStack />
    </div>
  );
}

export default About;
