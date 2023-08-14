import React, { useState } from 'react';
import photo1 from '../resources/about_photos/AM1.png';
import photo2 from '../resources/about_photos/AM2.png';
import photo3 from '../resources/about_photos/AM3.png';
import photo4 from '../resources/about_photos/AM4.png';
import photo5 from '../resources/about_photos/AM5.png';


const HistorySlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
    };

    const handleGoToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const photos = [photo1, photo2, photo3, photo4, photo5];
    const currentPhoto = photos[currentSlide];

    return (
        <div className="history-slideshow">
            <button className="prev-button" onClick={handlePrevSlide}>
                Previous
            </button>
            <img src={currentPhoto} alt={`Photo ${currentSlide + 1}`} />
            <button className="next-button" onClick={handleNextSlide}>
                Next
            </button>
            <div className="slide-buttons">
                <button onClick={() => handleGoToSlide(0)}>Slide 1</button>
                <button onClick={() => handleGoToSlide(1)}>Slide 2</button>
                <button onClick={() => handleGoToSlide(2)}>Slide 3</button>
                <button onClick={() => handleGoToSlide(3)}>Slide 4</button>
                <button onClick={() => handleGoToSlide(4)}>Slide 5</button>
            </div>
        </div>
    );
};

export default HistorySlideshow;