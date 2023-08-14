import React from 'react';
import HistorySlideshow from '../components/HistorySlideshow.jsx';
import Logos from '../components/Logos.jsx';
import Navigation from '../components/Navigation.jsx';

const About = () => {
    return (
        <div className="relative container mx-auto lg:w-3/4 sm:w-screen">
            <Logos />
            <Navigation />
            <HistorySlideshow />
        </div>
    )
};

export default About;