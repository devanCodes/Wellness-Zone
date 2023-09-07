import React from "react";
import Slideshow from "../components/Slideshow.jsx";
import HarrisBenedictCalculator from "../components/HarrisBenedictCalculator.jsx";
import TransformationSlideshow from "../components/TransformationSlideshow.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Logos from "../components/Logos.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="relative container flex flex-col mx-auto xl:w-3/4 lg:w-3/4 md:w-screen sm:w-screen">
      <Logos />
      <Navigation />
      <div id="Slideshow">
        <Slideshow />
      </div>
      <div className="bg-white" id="TransformationSlideshow">
        <h1 className="text-3xl flex justify-center pt-10 pb-5 font-semibold">
          Transformations
        </h1>
        <TransformationSlideshow />
      </div>
      <div className="bg-gradient-to-b from-stone-500 to-stone-300">
        <div id="Testimonials">
          <h1 className="text-3xl flex justify-center mt-10 font-semibold text-white">
            Testimonials
          </h1>
          <Testimonials />
        </div>
        <hr></hr>
        <div
          className="text-3xl flex flex-col justify-center items-center pb-10 container mx-auto"
          id="HarrisBenedictCalculator"
        >
          <h1 className="py-5 px-5 font-semibold text-center">
            Calculate Your Maintenance Calories <div></div> (Harris-Benedict
            Formula)
          </h1>
          <HarrisBenedictCalculator />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
