import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import Logos from '../components/Logos.jsx';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
    return (
        <div className="relative container mx-auto xl:w-3/4 lg:w-3/4 md:w-screen sm:w-screen">
            <Logos />
            <Navigation />
            <div className="bg-stone-300 text-2xl flex flex-col justify-center items-center pb-10" id="ContactForm">
                <h1 className="py-5 font-semibold">Contact Me!</h1> 
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
};

export default Contact;