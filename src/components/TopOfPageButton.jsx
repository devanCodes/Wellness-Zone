import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare } from 'react-icons/bs';

const TopOfPageButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowheight = window.innerHeight;
            const scrollThreshold = windowheight * 0.6; // 60% of the window height

            setIsVisible(scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`fixed bottom-4 right-4 ease-in duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block lg:block xl:block`}>
            <BsArrowUpSquare className="xl:text-6xl lg:text-4xl md:text-4xl cursor-pointer hover:text-black/70" onClick={handleScrollToTop} />
        </div>
    );
};

export default TopOfPageButton;