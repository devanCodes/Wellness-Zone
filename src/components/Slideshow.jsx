import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsCircle,
} from "react-icons/bs";
import photo1 from "../resources/plan_photos/1.png";
import photo2 from "../resources/plan_photos/2.png";
import photo3 from "../resources/plan_photos/3.png";
import photo4 from "../resources/plan_photos/4.png";

const Slideshow = () => {
  // using the 'useState' hook to declare a state variable 'currentSlide' and a function 'setCurrentSlide' for updating it; 'currentSlide' is initialized with a value of 0
  const [currentSlide, setCurrentSlide] = useState(0);
  // creating a new variable 'navigate' which uses the 'useNavigate' hook to navigate to each of the slides within the component
  const navigate = useNavigate();

  // this function is defined to increment the 'currentSlide' state, ensuring it wraps back to an index of 0 when reaching the end (hence the modulo operation '% 4')
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  };

  // this function is defined to decrement the 'currentSlide' state, also ensuring it wraps around properly (just a handleNextSlide function)
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  // constructs a message based on the current slide and then uses the 'navigate' function to go to the Contact page with a state containing the 'prefilledMessage'
  const handleJoinNow = () => {
    let prefilledMessage = `Estoy interesado/a en plan #${currentSlide + 1}`;
    navigate("/contact", { state: { prefilledMessage } });
  };

  // function to set the 'currentSlide' state to a specified 'slideIndex', allowing direct navigation to a specific slide
  const handleGoToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // defining an array 'photos' containing the imported images and calculates the 'currentPhoto' based on the 'currentSlide'
  const photos = [photo1, photo2, photo3, photo4];
  const currentPhoto = photos[currentSlide];

  return (
    <div className="relative container flex flex-col items-center mx-auto">
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-white cursor-pointer hover:text-white/70">
        <BsArrowLeftSquare
          className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl"
          onClick={handlePrevSlide}
        />
      </div>
      <img
        src={currentPhoto}
        alt={`Photo ${currentSlide + 1}`}
        className="mx-auto w-full min-h-[500px] max-h-[700px] xl:max-h-screen"
      />
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white cursor-pointer hover:text-white/70">
        <BsArrowRightSquare
          className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl"
          onClick={handleNextSlide}
        />
      </div>
      <button
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:mb-16 xl:px-14 xl:py-4 xl:text-4xl lg:mb-12 lg:px-12 lg:py-4 lg:text-3xl md:mb-12 md:px-8 md:py-2 md:text-2xl mb-12 px-6 py-2 text-xl text-white bg-turqoise rounded-full hover:bg-turqoise/80 hover:duration-1000 lg:hover:scale-105"
        onClick={handleJoinNow}
      >
        Join Now!
      </button>
      <div className="absolute flex bottom-4 space-x-1">
        {/* starts a mapping operation over the 'photos' array */}
        {photos.map((photo, index) => (
          <div
            // 'key' attribute is set to 'index' to help React efficiently update the elements
            key={index}
            // click event handler to the 'handleGoToSlide' function, allowing users to click a dot to go directly to a specific slide
            onClick={() => handleGoToSlide(index)}
            className={`cursor-pointer duration-700 ${
              index === currentSlide ? "bg-white" : ""
            }`}
            style={{
              borderRadius: "50%",
              background: index === currentSlide ? "white" : "transparent",
            }}
          >
            <BsCircle
              // text size is adjusted based on screen size, and its color changes to white or transparent depending on whether it corresponds to the current slide
              className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg"
              color={index === currentSlide ? "white" : "white"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
