import React, { useState, useEffect } from 'react';
import photo1 from '../resources/transformation_photos/TP1.png';
import photo2 from '../resources/transformation_photos/TP2.png';
import photo3 from '../resources/transformation_photos/TP3.png';
import photo4 from '../resources/transformation_photos/TP4.png';
import { BsCircle } from 'react-icons/bs';


const TransformationSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleGoToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
        // clear the interval when user selects a slide
        clearInterval(autoCycleInterval);
    };

    const photos = [photo1, photo2, photo3, photo4];
    const currentPhoto = photos[currentSlide];

    // automatic slideshow cycle
    useEffect(() => {
        const autoCycleInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
        }, 5000);

        return () => clearInterval(autoCycleInterval);
    }, [currentSlide, photos.length]);


    return (
        <div className="bg-white relative container flex flex-col items-center mx-auto">
            <div className="aspect-auto">
                <img 
                    src={currentPhoto} 
                    alt={`Photo ${currentSlide + 1}`} 
                    className="w-5/6 h-screen mx-auto my-6 flex transition-transform duration-1000 min-h-[500px] max-h-[500px]" 
                />
            </div>
            <div className="absolute flex top-0 right-8 space-x-1">
                {photos.map((photo, index) =>
                    <div
                        key={index}
                        onClick={() => handleGoToSlide(index)}
                        className={`cursor-pointer duration-700 ${index === currentSlide ? 'bg-black' : ''}`}
                        style={{ borderRadius: '50%', background: index === currentSlide ? 'black' : 'transparent' }}
                    >
                        <BsCircle className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg" color={index === currentSlide ? 'black' : 'black'} />
                    </div>)}
            </div>
        </div>
    );
};



export default TransformationSlideshow;