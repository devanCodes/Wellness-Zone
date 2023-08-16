import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftSquare, BsArrowRightSquare, BsCircle } from 'react-icons/bs';
import photo1 from '../resources/plan_photos/1.png';
import photo2 from '../resources/plan_photos/2.png';
import photo3 from '../resources/plan_photos/3.png';
import photo4 from '../resources/plan_photos/4.png';

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
        navigate('/contact', { state: { prefilledMessage } });
    };

    const handleGoToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const photos = [photo1, photo2, photo3, photo4];
    const currentPhoto = photos[currentSlide];

    return (
        <div className="relative container flex flex-col items-center mx-auto">
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 text-white cursor-pointer hover:text-white/70">
                <BsArrowLeftSquare className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl" onClick={handlePrevSlide} />
            </div>
            <img src={currentPhoto} alt={`Photo ${currentSlide + 1}`} className="max-h-screen h-auto mx-auto w-full" />
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white cursor-pointer hover:text-white/70">
                <BsArrowRightSquare className="xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl" onClick={handleNextSlide} />
            </div>
            <div className="absolute flex bottom-4 space-x-1">
                {photos.map((photo, index) =>
                    <div
                        key={index}
                        onClick={() => handleGoToSlide(index)}
                        className={`cursor-pointer duration-700 ${index === currentSlide ? 'bg-white' : ''}`}
                        style={{ borderRadius: '50%', background: index === currentSlide ? 'white' : 'transparent' }}
                    >
                        <BsCircle className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg" color={index === currentSlide ? 'white' : 'white'} />
                    </div>)}
            </div>
            <button className="absolute bottom-32 left-1/3 transform -translate-x-1/2 p-8 px-20 pt-6 text-white text-4xl bg-turqoise rounded-full hover:bg-turqoise/80 hover:duration-1000" onClick={handleJoinNow}>
                Join Now!
            </button>
        </div>
    );
};

export default Slideshow;