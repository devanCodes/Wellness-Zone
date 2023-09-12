import React, { useState, useEffect } from "react";
import { BsArrowUpSquare } from "react-icons/bs";

const TopOfPageButton = () => {
  // initalize the state variable 'isVisible' using the 'useState' hook; this tracks whether the button should be visible or hidden
  const [isVisible, setIsVisible] = useState(false);

  // 'useEffect' hook is used to add and remove a scroll event listener; when the component mounts, it sets up an event listener on the window's scroll event
  useEffect(() => {
    // 'handleScroll' is a callback function that gets called when the user scrolls the page
    // it calculates the current scroll position 'scrollY', the window's height 'windowHeight', and a scroll threshold 'scrollThreshold' that's 60% of the window height
    // if the scroll poisition is greater than this threshold, it sets 'isVisible' to 'true', indicating that the button should be visible
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowheight = window.innerHeight;
      const scrollThreshold = windowheight * 0.6; // 60% of the window height

      setIsVisible(scrollY > scrollThreshold);
    };

    // adds the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // removes the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // this is called when the button is clicked; scrolls the window to the top with a smooth scrolling behavior
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
    // has several CSS classes to control its position, visibility, and animation based on the 'isVisible' state
      className={`fixed bottom-4 right-4 ease-in duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hidden lg:block xl:block`}
    >
      <BsArrowUpSquare
        className="xl:text-6xl lg:text-4xl md:text-4xl cursor-pointer hover:text-black/70"
        onClick={handleScrollToTop}
      />
    </div>
  );
};

export default TopOfPageButton;
