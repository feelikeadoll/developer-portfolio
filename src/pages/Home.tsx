import HuetopiaDevices from "../assets/HuetopiaDevices.png";

function Home() {
  return (
    <div className="w-full">
      <section
        id="intro"
        className="w-full bg-black bg-introPic bg-no-repeat bg-right-top bg-50% text-white h-screen"
      >
        <div className="max-w-7xl mx-auto z-50 ">
          <h2 className="text-2xl">PORTFOLIO</h2>
          <h1 className="text-9xl font-bold">WEB DEV.</h1>
          <h3 className="text-sm">SEE MY WORKS</h3>
          <h3 className="text-sm">HI, MY NAME IS LAIA!</h3>
          <p className="text-2xl">I am a Fullstack Developer</p>
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
