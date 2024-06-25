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
          <div className="flex-col w-full">
            <h2 className="pt-20">RESUME</h2>
            <div className="w-full flex justify-center">
              <div className="w-5/12 px-6">
                <h3 className="text-4xl mt-8 mb-4">Education</h3>
                <div className="w-11/12 mx-8">
                  <h5 className="text-xl mt-8">Web Development Bootcamp</h5>
                  <p className="text-sm">2024, Ironhack | remote</p>
                  <h5 className="text-xl mt-8">
                    Introduction to Computer Science
                  </h5>
                  <p className="text-sm">2023, Harvard’s CS50 | remote</p>
                  <h5 className="text-xl mt-8">Image Consulting I and II</h5>
                  <p className="text-sm">
                    2019, Fashion Institute of Technology | New York, US
                  </p>
                  <h5 className="text-xl mt-8">Fashion Design</h5>
                  <p className="text-sm">
                    2010-2016, LCI Barcelona - FD Moda | Barcelona, Spain
                  </p>
                </div>
              </div>
              <div className="w-5/12 px-16 ">
                <h3 className="text-4xl mt-8 mb-4">Experience</h3>
                <div className="w-11/12 mx-8">
                  <h5 className="text-xl mt-8">Fashion E-Commerce Founder</h5>
                  <p className="text-sm">
                    2019-2024,{" "}
                    <a
                      href="https://www.somethingsneverfade.com/"
                      target="_blank"
                      className="underline underline-0"
                    >
                      Some Things Never Fade
                    </a>
                  </p>
                  <h5 className="text-xl mt-8">Wholesale Representative</h5>
                  <p className="text-sm">
                    2022-2023, FashionLab Agency | New York, US
                  </p>
                  <h5 className="text-xl mt-8">
                    Image consultant and CS Agent
                  </h5>
                  <p className="text-sm">
                    2020, Vudoir Hub S.L. | Spain and US brands
                  </p>
                  <h5 className="text-xl mt-8">Fashion Brand Founder</h5>
                  <p className="text-sm">
                    2016-2018,{" "}
                    <a
                      href="https://www.instagram.com/arxethelabel/"
                      target="_blank"
                      className="underline underline-0"
                    >
                      Arxé
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="mt-16 btn btn-neutral bg-black text-white">
                <h3 className="text-md pr-2">SEE MY FULL CV</h3>
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
                        <rect width="24" height="24" fill="white"></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <CurrentStack />
    </div>
  );
}

export default About;
