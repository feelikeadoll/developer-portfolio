import { Link } from "react-router-dom";

import Commercial from "../assets/work-commercial.png";
import Personal from "../assets/work-personal-1.png";
import Button from "../components/Button";

function WorkSection() {
  return (
    <section
      id="work"
      className="w-full px-10 xl:px-8 2xl:px-6 bg-lightgrey text-black h-full xl:h-screen"
    >
      <div className="xl:px-12 2xl:px-24 mx-auto flex justify-between items-center md:h-82%">
        <div className="bflex flex-col w-full justify-between">
          <h2 className="pt-16 xl:pt-20">WORK</h2>
          <div className="flex flex-col md:flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl my-4 xl:my-8 2xl:my-10">Commercial</h3>
              <Link to="/work/commercial" className="w-10/12">
                <img src={Commercial} alt="" />
              </Link>
              <Link to="/work/commercial" className="mt-8 mb-10 md:my-10">
                <Button text="SEE MORE" />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl my-4 xl:my-8 2xl:my-10">Personal</h3>
              <Link to="/work/personal" className="w-10/12">
                <img src={Personal} alt="" />
              </Link>
              <Link to="/work/personal" className="mt-8 mb-20 md:my-10">
                <Button text="SEE MORE" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
