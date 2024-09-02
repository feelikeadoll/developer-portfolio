import { HashLink } from "react-router-hash-link";
import Button from "../components/Button";
import CurrentStack from "../components/CurrentStack";

import WorkSection from "../components/WorkSection";

function About() {
  return (
    <div className="w-full">
      <section
        id="about-intro"
        className="w-full bg-black md:bg-aboutPic md:bg-no-repeat md:bg-right lg:bg-40% bg-50% text-white h-full lg:h-screen"
      >
        <div className="z-50 pb-20">
          <div className="max-w-7xl pt-12 h-full flex flex-col items-start justify-center mx-auto">
            <div className="w-full lg:w-7/12 pt-20 mb-4 px-10 xl:px-8 2xl:px-6">
              <h2 className="text-7xl font-bold">ABOUT</h2>
              <p className="text-md py-4">
                My name is Laia, a Full Stack Developer with a unique background
                in fashion design and e-commerce.
              </p>
              <p className="text-md py-4">
                My journey into tech started with a curiosity to innovate and
                create. Shifting to tech allowed me to blend my artistic skills
                with technical knowledge. My experience in design has given me a
                unique perspective on user experience and interface design,
                while running e-commerce businesses provided hands-on experience
                with web technologies and user-centric design.
              </p>
              <p className="text-md py-4 pb-6">
                If you're looking for a dedicated developer or want to
                connect...
              </p>
            </div>
          </div>
          <hr className="border mb-4" />
          <div className="max-w-7xl flex flex-col items-start justify-center mx-auto">
            <div className="flex items-center px-10 xl:px-4 2xl:px-2 pb-4">
              <HashLink to="#contact">
                <button className="text-md pr-4 btn btn-neutral font-normal bg-black border-0 text-white">
                  Feel free to reach out!
                </button>
              </HashLink>
              <a
                href="https://www.linkedin.com/in/laianavalonarxe/"
                target="_blank"
              >
                <button className="btn btn-neutral btn-square bg-black border-0">
                  <svg
                    width="26px"
                    height="26px"
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
                      <path
                        d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </button>
              </a>
              <a href="https://wa.me/34620182796" target="_blank">
                <button className="btn btn-neutral btn-square btn-square bg-black border-0">
                  <svg
                    width="26px"
                    height="26px"
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
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </button>
              </a>
              <a
                href="mailto:laianavalon@gmail.com"
                className="flex justify-between"
              >
                <button className="btn btn-neutral btn-square bg-black border-0">
                  <svg
                    width="26px"
                    height="26px"
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
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.54433 5.16792C3.0468 4.46923 3.86451 4 4.8 4H19.2C20.1355 4 20.9532 4.46923 21.4557 5.16792C21.7993 5.64567 22 6.235 22 6.86667V17.1333C22 18.682 20.7804 20 19.2 20H4.8C3.21964 20 2 18.682 2 17.1333V6.86667C2 6.23499 2.20074 5.64567 2.54433 5.16792ZM4.9327 6L11.2598 12.9647C11.6566 13.4015 12.3434 13.4015 12.7402 12.9647L19.0673 6H4.9327ZM20 7.94766L14.2205 14.3096C13.0301 15.6199 10.9699 15.6199 9.77948 14.3096L4 7.94766V17.1333C4 17.6466 4.39214 18 4.8 18H19.2C19.6079 18 20 17.6466 20 17.1333V7.94766Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <hr className="border mb-4" />
        </div>
      </section>
      <section className="block md:hidden">
        <div className="bg-aboutPic bg-no-repeat bg-right bg-full h-85%"></div>
      </section>
      <WorkSection />
      <section
        id="resume"
        className="w-full px-10 xl:px-8 2xl:px-6 bg-midgrey text-black h-full xl:h-screen"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-col w-full">
            <h2 className="pt-16 xl:pt-20">RESUME</h2>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
              <div className="w-full md:w-4/5 lg:w-5/12 px-8">
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
              <div className="w-full md:w-4/5 lg:w-5/12 px-8 pt-4 lg:pt-0 lg:px-16 ">
                <h3 className="text-4xl mt-8 mb-4">Experience</h3>
                <div className="w-11/12 mx-8">
                  <h5 className="text-xl mt-8">Web Developer</h5>
                  <p className="text-sm">2024-present, Freelance</p>
                  <h5 className="text-xl mt-8">E-Commerce Founder</h5>
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
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-16 mb-20 md:mb-0">
              <Button text="SEE MY CV" />
            </div>
          </div>
        </div>
      </section>
      <CurrentStack />
    </div>
  );
}

export default About;
