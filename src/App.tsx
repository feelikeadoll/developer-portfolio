import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Commercial from "./pages/Commercial";
import Personal from "./pages/Personal";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
