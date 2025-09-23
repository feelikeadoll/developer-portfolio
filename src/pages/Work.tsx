import { HashLink } from "react-router-hash-link";
import WorkSection from "../components/WorkSection";

import workPicURL from '../assets/work-pic.jpg'

function Work() {
  console.log(workPicURL);

  return (
    <div className="w-full">
      <section
        id="work-intro"
        className="w-full bg-black md:bg-workPic md:bg-no-repeat md:bg-right-top lg:bg-40% bg-50% text-white h-50% md:h-82%"
        style={{ '--work-image-url': `url(${workPicURL})` }}
      >
        <div className="z-50 py-10 md:py-20 lg:pb-0 lg:pt-28">
          <div className="xl:px-12 2xl:px-24 h-50% flex flex-col items-center md:items-start justify-center mx-auto">
            <div className="w-full lg:w-7/12 mb-4 px-10 xl:px-8 2xl:px-6">
              <h2 className="text-xl md:text-2xl -mb-4 lg:-mb-6 xl:-mb-10">EXPLORE MY</h2>
              <h1 className="text-7xl md:text-7.5xl sm:text-8xl lg:text-8.5xl xl:text-9xl font-bold">
                WORK
              </h1>
            </div>
            <div className="w-full flex flex-col items-start lg:w-7/12mb-4 px-10 xl:px-8 2xl:px-6">
              <p className="text-sm md:text-md">Practice makes perfect, or so they say!</p>
              <HashLink to="#work" smooth>
                <button className="my-2 btn btn-neutral text-white bg-black border-0 btn-square">
                  <svg
                    fill="#000000"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    id="down-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
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
                        d="M12,3V21M9,18l3,3,3-3"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </g>
                  </svg>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div className="bg-workPic bg-no-repeat bg-right bg-full h-50%"
          style={{ '--work-image-url': `url(${workPicURL})` }}></div>
      </section>
      <WorkSection />
    </div>
  );
}

export default Work;
