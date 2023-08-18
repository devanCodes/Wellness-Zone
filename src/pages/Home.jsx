import React from 'react';
import Slideshow from '../components/Slideshow.jsx';
import HarrisBenedictCalculator from '../components/HarrisBenedictCalculator.jsx';
import TransformationSlideshow from '../components/TransformationSlideshow.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Logos from '../components/Logos.jsx';
import Navigation from '../components/Navigation.jsx';

const Home = () => {
    return (
        <div className="relative container flex flex-col mx-auto xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-screen">
            <Logos />
            <Navigation />
            <Slideshow />
                <h1 className="bg-white text-3xl flex justify-center pt-10 pb-5 font-semibold">Transformations</h1>
                <TransformationSlideshow />
            <h1 className="text-3xl flex justify-center my-10 font-semibold">Testimonials</h1>
            <Testimonials />
            <div className="bg-stone-300 text-3xl flex flex-col justify-center items-center pb-10 container mx-auto">
                <h1 className="py-5 px-5 font-semibold text-center">Calculate Your Maintenance Calories (Harris-Benedict Formula)</h1>
                <HarrisBenedictCalculator />
            </div>
        </div>
    )
};

export default Home;