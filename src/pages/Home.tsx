import { Link } from "react-router-dom";

import HuetopiaDevices from "../assets/HuetopiaDevices.png";
import Button from "../components/Button";
import RigthArrow from "../components/RightArrow";

import introPicURL from '../assets/intro-pic.jpg'
import SlideOnHover from "../components/SlideOnHover";

function Home() {
  return (
    <div className="w-full">
      <section
        id="intro"
        className="w-full bg-black md:bg-introPic md:bg-no-repeat md:bg-right-top lg:bg-40% bg-50% text-white h-full lg:h-screen"
        style={{ '--intro-image-url': `url(${introPicURL})` }}
      >
        <div className="z-50 pt-10 pb-20 md:py-20 lg:pb-0 lg:pt-28 h-full md:h-85% flex flex-col items-start justify-center" >
          <div className="xl:px-12 2xl:px-24 w-full flex flex-col items-start justify-center mx-auto">
            <div className="w-full lg:w-2/3 pt-20 mb-4 px-10 xl:px-8 2xl:px-6">
              <h1 className="text-xl md:text-2xl -mb-4 lg:-mb-6 xl:-mb-10">PORTFOLIO</h1>
              <h2 className="hidden md:block text-8xl lg:text-8.5xl xl:text-9xl font-bold">
                WEB DEV.
              </h2>
              <h2 className="block md:hidden text-8xl font-bold -mb-8">
                WEB
              </h2>
              <h2 className="block md:hidden text-8xl font-bold -mt-8">
                DEV.
              </h2>
            </div>
          </div>
          <div className="w-full">
            <hr className="border mb-4" />
            <div className="h-full flex flex-col items-start justify-center mx-auto px-10 xl:px-12 2xl:px-24">
              <Link to="/work">
                <button className="btn btn-neutral bg-black border-0 text-white px-0 md:px-4 lg:px-6">
                  <h3 className="text-sm md:text-md pr-2">SEE MY WORKS</h3>
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
          <div className="px-10 xl:px-12 2xl:px-24 pt-16 w-full flex flex-col items-start justify-center mx-auto ">
            <h3 className="text-sm md:text-md px-0 md:px-4 lg:px-6">HI, MY NAME IS LAIA!</h3>
            <p className="text-xl md:text-2xl lg:text-3xl px-0 md:px-4 lg:px-6">I am a Frontend Developer</p>
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div className="bg-introPic bg-no-repeat bg-center bg-full h-75% sm:h-85%"
          style={{ '--intro-image-url': `url(${introPicURL})` }}
        ></div>
      </section>
      <section
        id="quality"
        className="w-full px-10 xl:px-8 2xl:px-6 bg-lightgrey text-black h-full lg:h-screen"
      >
        <div className="xl:px-12 2xl:px-24 mx-auto flex justify-between items-center">
          <div className="flex flex-col lg:h-85% justify-between">
            <h2 className="pt-16 xl:pt-20">QUALITY DRIVEN</h2>
            <div className="pt-10 flex flex-col lg:flex-row items-center lg:justify-evenly">
              <img src={HuetopiaDevices} alt="" className="w-full lg:w-2/3" />
              <div className="mb-24 mt-8 lg:mt-0 w-5/6 md:w-4/5 lg:w-1/4 2xl:w-1/5 flex flex-col items-center justify-between">
                <p className="text-md md:text-base text-center lg:text-left">
                  I specialise in creating innovative and intuitive web-applications,
                  ensuring a seamless user experience across all devices.
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
        <div className="xl:px-12 2xl:px-24 mx-auto flex justify-between items-center">
          <div className="w-full flex flex-col justify-between h-screen">
            <h1 className="pt-16 xl:pt-20">WORK</h1>
            <SlideOnHover />
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-12 md:mb-20">
              <h2 className="text-5xl md:text-7xl">Commercial</h2>
              <p className="py-6 md:pt-0 text-sm md:text-base w-5/6 md:w-2/5">
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
        <div className="xl:px-12 2xl:px-24 mx-auto flex flex-col justify-between items-start">
          <h1 className="text-5xl md:text-7xl pt-16">Personal projects</h1>
          <div className="w-full flex py-12 px-4">
            <div className="w-1/2 h-50% flex flex-col justify-between">
              <p className="text-sm md:text-base md:w-7/12">
                I have always enjoyed creating for pleasure. Inspired by my
                passion for Japan and color theory, each project highlights my
                dedication to learning and the joy of bringing ideas to life
                through code.
              </p>
              <div>
                <button
                  id="nippon-adv-btn"
                  className="text-md flex items-center justify-between mt-2 pl-4 pr-2 bg-midgrey w-5/6 h-8"
                >
                  <p>Nippon Adventure</p>
                  <RigthArrow size="18px" color="#000" />
                </button>
                <button
                  id="huetopia-btn"
                  className="text-md flex items-center justify-between mt-2 pl-4 pr-2 bg-midgrey w-5/6 h-8"
                >
                  <p>Huetopia</p>
                  <RigthArrow size="18px" color="#000" />
                </button>
                <button
                  id="mai-practice-btn"
                  className="text-md flex items-center justify-between mt-2 pl-4 pr-2 bg-midgrey w-5/6 h-8"
                >
                  <p>Mai Practice</p>
                  <RigthArrow size="18px" color="#000" />
                </button>
              </div>
            </div>
            <div className="w-2/3 border rounded-xl shadow-project"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
