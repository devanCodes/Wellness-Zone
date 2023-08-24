import React from 'react';
import HistorySlideshow from '../components/HistorySlideshow.jsx';
import Logos from '../components/Logos.jsx';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
    return (
        <div className="relative container mx-auto lg:w-3/4 sm:w-screen">
            <Logos />
            <Navigation />
            <HistorySlideshow />
            <Footer />
        </div>
    )
};

export default About;