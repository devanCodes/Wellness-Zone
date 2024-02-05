import React, { useState, useEffect } from "react";
import photo1 from "../resources/transformation_photos/TP1.png";
import photo2 from "../resources/transformation_photos/TP2.png";
import photo3 from "../resources/transformation_photos/TP3.png";
import photo4 from "../resources/transformation_photos/TP4.png";
import photo5 from "../resources/transformation_photos/TP5.png";
import photo6 from "../resources/transformation_photos/TP6.png";
import { BsCircle } from "react-icons/bs";

const TransformationSlideshow = () => {
  // intializing a state variable 'currentSlide' using the 'useState' hook; this tracks the index of the current slide in the slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  // this funcion is used to navigate to a specific slide; takes a 'slideIndex' as a parameter and updates the 'currentSlide' state
  const handleGoToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    // clear the interval to pause the automatic slideshow when user manually selects a slide
    clearInterval(autoCycleInterval);
  };

  // creating an array of photos 
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
  // 'currentPhoto' is assigned the image path of the current slide based on the 'currentSlide' state
  const currentPhoto = photos[currentSlide];

  // automatic slideshow cycle
  // 'useEffect' sets up an interval 'autoCycleInterval' that automatically advances the slideshow every 5 seconds (5000 ms)
  // it increments the 'currentSlide' by 1, and when it reaches the end of the 'photos' array, it wraps back to the first slide using the modulo operator
  // interval is cleared when the component unmounts, ensuring that the automatic slideshow stops when the component is no longer in use
  useEffect(() => {
    const autoCycleInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
    }, 5000);

    return () => clearInterval(autoCycleInterval);
  }, [currentSlide, photos.length]);

  return (
    <div className="bg-white relative container flex flex-col items-center mx-auto">
      <div className="aspect-auto">
        {/* 'img' element displays the current photo based on the 'currentPhoto' variable */}
        <img
          src={currentPhoto}
          alt={`Photo ${currentSlide + 1}`}
          className="w-5/6 h-screen mx-auto my-8 flex transition-transform duration-1000 min-h-[300px] max-h-[300px] md:min-h-[500px] md:max-h-[500px]"
        />
      </div>
      <div className="absolute flex top-0 right-8 space-x-1">
        {/* using the 'map' function to iterate over the 'photos' array, creating a circle for each image */}
        {photos.map((photo, index) => (
          <div
            key={index}
            // this event handler calls 'handleGoToSlide(index)' to navigate to the corresponding slide when clicked
            onClick={() => handleGoToSlide(index)}
            className={`cursor-pointer duration-700 ${
              index === currentSlide ? "bg-black" : ""
            }`}
            style={{
              borderRadius: "50%",
              background: index === currentSlide ? "black" : "transparent",
            }}
          >
            <BsCircle
              className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg"
              color={index === currentSlide ? "black" : "black"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransformationSlideshow;
