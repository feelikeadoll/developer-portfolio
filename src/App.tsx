import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Commercial from "./pages/Commercial";
import Personal from "./pages/Personal";

function App() {
  return (
    <div className="font-montserrat tracking-widest">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/commercial" element={<Commercial />} />
        <Route path="/work/personal" element={<Personal />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
