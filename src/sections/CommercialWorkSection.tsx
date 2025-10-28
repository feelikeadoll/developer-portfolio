import SlideOnHover from "../components/SlideOnHover"

function CommercialWorkSection() {
    return <section
        id="commercial"
        className="w-full bg-midgrey text-black h-full lg:h-screen flex flex-col justify-between"
    >
        <div className="w-full px-10 xl:px-20 2xl:px-30 flex flex-col items-start justify-center ">
            <h1 className="pt-16 xl:pt-20">WORK</h1>
        </div>
        <SlideOnHover />
        <div className="w-full px-10 xl:px-20 2xl:px-30 flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-12 md:mb-20">
            <h2 className="text-5xl md:text-7xl">Commercial</h2>
            <p className="py-6 md:pt-0 text-sm md:text-base w-5/6 md:w-2/5">
                I created the portfolio for a creative photography studio based
                in Barcelona that craft the most beautiful content for beauty +
                wellness brands.
            </p>
        </div>
    </section >
}

export default CommercialWorkSection