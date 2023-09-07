import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Slideshow from "./components/Slideshow.jsx";
import TransformationSlideshow from "./components/TransformationSlideshow.jsx";
import Testimonials from "./components/Testimonials.jsx";
import HarrisBenedictCalculator from "./components/HarrisBenedictCalculator.jsx";
import HistorySlideshow from "./components/HistorySlideshow.jsx";
import ContactForm from "./components/ContactForm.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import TopOfPageButton from "./components/TopOfPageButton.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-800">
      <Router>
        <div className="relative container flex mx-auto">
          <TopOfPageButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#Slideshow" element={<Slideshow />} />
            <Route
              path="/#TransformationSlideshow"
              element={<TransformationSlideshow />}
            />
            <Route path="/#Testimonials" element={<Testimonials />} />
            <Route
              path="/#HarrisBenedictCalculator"
              element={<HarrisBenedictCalculator />}
            />
            <Route
              path="/about#HistorySlideshow"
              element={<HistorySlideshow />}
            />
            <Route path="/contact#ContactForm" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
