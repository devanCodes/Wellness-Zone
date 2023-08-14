import React from 'react';
import IGLogo from '../resources/logo/IG_logo.png';
import WZLogo from '../resources/logo/WZ_logo.png';

const Logos = () => {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/wellness.zone01/'
    };

    return (
        <div className="relative container flex justify-center bg-turqoise h-auto mx-auto">
          <img
            className="mx-auto w-72 h-64"
            src={WZLogo}
            alt="Wellness Zone Logo"
          />
          <button
            onClick={handleInstagramClick}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
          >
            <img
              className="h-7 w-7 hover:duration-500 rounded-lg"
              src={IGLogo}
              alt="Instagram Logo"
            />
          </button>
        </div>
      );
};

export default Logos;