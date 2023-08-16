import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import Logos from '../components/Logos.jsx';
import Navigation from '../components/Navigation.jsx';

const Contact = () => {
    return (
        <div className="relative container mx-auto xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-screen">
            <Logos />
            <Navigation />
            <div className="bg-stone-300 text-2xl flex flex-col justify-center items-center pb-10">
                <h1 className="py-5 font-semibold">Contact Me!</h1> 
                <ContactForm />
            </div>
        </div>
    )
};

export default Contact;