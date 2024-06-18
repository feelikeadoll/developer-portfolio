import HuetopiaDevices from "../assets/HuetopiaDevices.png";

function Home() {
  return (
    <div className="w-full">
      <section
        id="intro"
        className="w-full bg-black bg-introPic bg-no-repeat bg-right-top bg-40% text-white h-screen"
      >
        <div className="z-50">
          <div className="max-w-7xl pt-28 h-full flex flex-col items-start justify-center mx-auto ">
            <div className="w-2/3 pt-20 mb-4">
              <h2 className="text-2xl -mb-4 lg:-mb-6 xl:-mb-10">PORTFOLIO</h2>
              <h1 className="text-8xl lg:text-8.5xl xl:text-9xl font-bold">
                WEB DEV.
              </h1>
            </div>
          </div>
          <div className="w-full">
            <hr className="border mb-6" />
            <div className="max-w-7xl h-full flex flex-col items-start justify-center mx-auto ">
              <div className="flex items-center">
                <h3 className="text-md">SEE MY WORKS</h3>
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
              </div>
            </div>
            <hr className="border mt-6" />
          </div>

          <div className="pt-16 max-w-7xl h-full flex flex-col items-start justify-center mx-auto ">
            <h3 className="text-md">HI, MY NAME IS LAIA!</h3>
            <p className="text-3xl">I am a Fullstack Developer</p>
          </div>
        </div>
      </section>
      <section id="quality" className="w-full bg-lightgrey text-black h-screen">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-col">
            <h2 className="pt-20">QUALITY DRIVEN</h2>
            <div className="flex items-center justify-evenly">
              <img src={HuetopiaDevices} alt="" className="w-2/3" />
              <div className="flex-col w-1/4 items-start justify-between">
                <p>
                  I specialise in creating innovative web-applications that work
                  from every device to provide the best user experience.
                </p>
                <button className="text-white bg-black rounded px-6 py-2">
                  SEE MY WORKS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="commercial"
        className="w-full bg-midgrey text-black h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Commercial section</h1>
          <img src="" alt="" />
        </div>
      </section>
      <section
        id="personal"
        className="w-full bg-lightgrey text-black h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Personal section</h1>
        </div>
      </section>
      <section id="stack" className="w-full bg-white text-black h-screen">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Stack section</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
