import Button from "../components/Button";

function ResumeSection() {
  return (
    <section
      id="resume"
      className="w-full px-10 xl:px-8 2xl:px-6 bg-midgrey text-black h-full xl:h-screen"
    >
      <div className="xl:px-12 2xl:px-24 mx-auto flex justify-between h-screen">
        <div className="flex flex-col w-full justify-between">
          <h2 className="pt-16 xl:pt-20">RESUME</h2>
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center">
            <div className="px-8 pt-4 lg:pt-0 lg:px-16 ">
              <h3 className="text-3xl md:text-4xl mt-8 mb-4">Experience</h3>
              <div className="w-11/12 mx-8">
                <h5 className="text-xl mt-8">Junior Fullstack Developer</h5>
                <p className="text-sm">Radisson Hotel Group</p>
                <p className="text-sm">2024-present | Madrid, Spain</p>
                <h5 className="text-xl mt-8">Embroidery Digitizer</h5>
                <p className="text-sm">Bordados Arxé S.A.</p>
                <p className="text-sm">2023-present | remote</p>
                <h5 className="text-xl mt-8">Wholesale Representative</h5>
                <p className="text-sm">FashionLab Agency</p>
                <p className="text-sm">
                  2022-2023 | New York, US
                </p>
                <h5 className="text-xl mt-8">E-Commerce Founder</h5>
                <p className="text-sm">Some Things Never Fade</p>
                <p className="text-sm">2019-2024 | remote</p>
              </div>
            </div>
            <div className="px-8">
              <h3 className="text-3xl md:text-4xl mt-8 mb-4">Education</h3>
              <div className="w-11/12 mx-8">
                <h5 className="text-xl mt-8">Web Development Bootcamp</h5>
                <p className="text-sm">Ironhack</p>
                <p className="text-sm">2024 | remote</p>
                <h5 className="text-xl mt-8">
                  Introduction to Computer Science
                </h5>
                <p className="text-sm">Harvard’s CS50</p>
                <p className="text-sm">2023 | remote</p>
                <h5 className="text-xl mt-8">Image Consulting I and II</h5>
                <p className="text-sm">Fashion Institute of Technology</p>
                <p className="text-sm">2019 | New York, US</p>
                <h5 className="text-xl mt-8">Fashion Design</h5>
                <p className="text-sm">LCI Barcelona - FD Moda</p>
                <p className="text-sm">2010-2016 | Barcelona, Spain</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 mb-20 md:mb-0 pb-20">
            <Button text="SEE MORE" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
