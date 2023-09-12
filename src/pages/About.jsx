import React from "react";
import HistorySlideshow from "../components/HistorySlideshow.jsx";
import Logos from "../components/Logos.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <div className="relative container flex flex-col mx-auto xl:w-3/4 lg:w-3/4 md:w-screen sm:w-screen">
      <Logos />
      <Navigation />
      <div id="HistorySlideshow">
        <HistorySlideshow />
      </div>
      <Footer />
    </div>
  );
};

export default About;
