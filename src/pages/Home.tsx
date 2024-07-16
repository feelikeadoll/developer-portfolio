import { Link } from "react-router-dom";

import HuetopiaDevices from "../assets/HuetopiaDevices.png";
import Button from "../components/Button";

function Home() {
  return (
    <div className="w-full">
      <section
        id="intro"
        className="w-full bg-black md:bg-introPic md:bg-no-repeat md:bg-right-top lg:bg-40% bg-50% text-white h-full lg:h-screen"
      >
        <div className="z-50 py-20 lg:pb-0 lg:pt-28">
          <div className="max-w-7xl h-full flex flex-col items-start justify-center mx-auto ">
            <div className="w-full lg:w-2/3 pt-20 mb-4 px-10 xl:px-8 2xl:px-6">
              <h1 className="text-2xl -mb-4 lg:-mb-6 xl:-mb-10">PORTFOLIO</h1>
              <h2 className="text-7.5xl sm:text-8xl lg:text-8.5xl xl:text-9xl font-bold">
                WEB DEV.
              </h2>
            </div>
          </div>
          <div className="w-full">
            <hr className="border mb-4" />
            <div className="max-w-7xl h-full flex flex-col items-start justify-center mx-auto px-10 xl:px-8 2xl:px-6">
              <Link to="/work">
                <button className="btn btn-neutral bg-black border-0 text-white">
                  <h3 className="text-md pr-2">SEE MY WORKS</h3>
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    id="right-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon line"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="primary"
                        d="M3,12H21m-3,3,3-3L18,9"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
            <hr className="border mt-4" />
          </div>
          <div className="px-10 xl:px-8 2xl:px-6 pt-16 max-w-7xl h-full flex flex-col items-start justify-center mx-auto ">
            <h3 className="text-md">HI, MY NAME IS LAIA!</h3>
            <p className="text-3xl">I am a Fullstack Developer</p>
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div className="bg-introPic bg-no-repeat bg-center bg-full h-85%"></div>
      </section>
      <section
        id="quality"
        className="w-full px-10 xl:px-8 2xl:px-6 bg-lightgrey text-black h-full lg:h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-col">
            <h2 className="pt-16 xl:pt-20">QUALITY DRIVEN</h2>
            <div className="pt-10 flex flex-col lg:flex-row items-center lg:justify-evenly">
              <img src={HuetopiaDevices} alt="" className="w-full lg:w-2/3" />
              <div className="mb-24 mt-8 lg:mt-0 w-3/4 lg:w-1/4 flex flex-col items-center justify-between">
                <p className="text-center lg:text-left">
                  I specialise in creating innovative web-applications that work
                  from every device to provide the best user experience.
                </p>
                <Link to="/work" className="mt-10 lg:my-10 ">
                  <Button text="SEE MY WORKS" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="commercial"
        className="w-full px-10 xl:px-8 2xl:px-6 bg-midgrey text-black h-full lg:h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col justify-between h-screen">
            <h1 className="pt-16 xl:pt-20">WORK</h1>
            <div className="w-full flex justify-between items-center my-20">
              <h2 className="text-7xl">Commercial</h2>
              <p className="w-2/5">
                I created the portfolio for a creative photography studio based
                in Barcelona that craft the most beautiful content for beauty +
                wellness brands.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="personal"
        className="w-full px-10 xl:px-8 2xl:px-6 bg-lightgrey text-black h-full lg:h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-7xl pt-16">Personal projects</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
