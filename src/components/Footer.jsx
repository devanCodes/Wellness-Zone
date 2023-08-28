import React from 'react';
import { Link } from 'react-router-dom';
import IGLogo from '../resources/logo/IG_logo.png';

const Footer = () => {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/wellness.zone01/'
    };

    return (
        <footer className="bg-purple-600 text-white py-4">
            <div className="flex flex-col px-16 py-6">
                <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mb-8">
                    <div className="w-40 m-4 flex justify-start flex-col text-white">
                        <h4 className="text-md leading-4 mb-4">Home</h4>
                        <Link to="/#Slideshow" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">Training Plans</p>
                        </Link>
                        <Link to="/#TransformationSlideshow" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">Transformations</p>
                        </Link>
                        <Link to="/#Testimonials" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">Testimonials</p>
                        </Link>
                        <Link to="/#HarrisBenedictCalculator" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">Maintenance Calorie Calculator</p>
                        </Link>
                    </div>
                    <div className="w-40 m-4 flex justify-start flex-col text-white">
                        <h4 className="text-md leading-4 mb-4">About</h4>
                        <Link to="/about#HistorySlideshow" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">My Story</p>
                        </Link>
                    </div>
                    <div className="w-40 m-4 flex justify-start flex-col text-white">
                        <h4 className="text-md leading-4 mb-4">Contact</h4>
                        <Link to="/contact#ContactForm" className="text-gray-200 no-underline">
                            <p className="text-sm leading-4 my-2 mx-0 cursor-pointer">Contact Form</p>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="text-white w-full"></hr>

            <div className="mx-auto text-center py-3">
                <p className="text-sm leading-4 text-white font-semibold pt-2">&copy; {new Date().getFullYear()} Wellness Zone. All rights reserved.</p>
            </div>
            <button
                onClick={handleInstagramClick}
                className="absolute right-5 bottom-1 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
            >
                <img
                    className="h-7 w-7 hover:duration-500 rounded-lg"
                    src={IGLogo}
                    alt="Instagram Logo"
                />
            </button>
        </footer>
    )
}

export default Footer;