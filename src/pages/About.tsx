import CurrentStack from "../components/CurrentStack";

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
