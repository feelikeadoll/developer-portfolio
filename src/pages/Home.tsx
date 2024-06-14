function Home() {
  return (
    <div className="w-full">
      <section id="intro" className="w-full bg-black text-white min-h-96">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Intro section</h1>
        </div>
      </section>
      <section id="quality" className="w-full bg-lightgrey text-black min-h-96">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Quality driven section</h1>
        </div>
      </section>
      <section
        id="commercial"
        className="w-full bg-midgrey text-black min-h-96"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Commercial section</h1>
        </div>
      </section>
      <section
        id="personal"
        className="w-full bg-lightgrey text-black min-h-96"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Personal section</h1>
        </div>
      </section>
      <section id="stack" className="w-full bg-white text-black min-h-96">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>Stack section</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
