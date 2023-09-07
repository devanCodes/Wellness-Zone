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
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  const handleJoinNow = () => {
    let prefilledMessage = `Estoy interesado/a en plan #${currentSlide + 1}`;
    navigate("/contact", { state: { prefilledMessage } });
  };

  const handleGoToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

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
        className="mx-auto w-full min-h-[700px] max-h-[700px] xl:max-h-screen"
      />
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white cursor-pointer hover:text-white/70">
        <BsArrowRightSquare
          className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl"
          onClick={handleNextSlide}
        />
      </div>
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 xl:mb-16 xl:px-14 xl:py-4 xl:text-4xl lg:mb-12 lg:px-12 lg:py-4 lg:text-3xl md:mb-12 md:px-8 md:py-2 md:text-2xl mb-12 px-6 py-2 text-xl text-white bg-turqoise rounded-full hover:bg-turqoise/80 hover:duration-1000 lg:hover:scale-105"
        onClick={handleJoinNow}
      >
        Join Now!
      </button>
      <div className="absolute flex bottom-4 space-x-1">
        {photos.map((photo, index) => (
          <div
            key={index}
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
