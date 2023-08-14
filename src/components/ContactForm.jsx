import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const location = useLocation();
    const { prefilledMessage } = location.state || {};

    useEffect(() => {
        if (prefilledMessage) {
            setMessage(prefilledMessage);
        }
    }, [prefilledMessage]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phoneNumber) {
            setErrorMessage('Please fill in the required fields.');
            return;
        }

        // send the form data using emailjs.com
        const templateParams = {
            user_name: name,
            phone_number: phoneNumber,
            message,
        };

        emailjs
            .send('service_xdyq0bq', 'template_pkpot1m', templateParams, 'xsCyHHL5iCeycQkO_')
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.text);
                    // reset form fields after successful submission
                    setName('');
                    setPhoneNumber('');
                    setMessage('');
                    setErrorMessage('');
                },
                (error) => {
                    console.error('Error sending email:', error);
                }
            );
    };

    return (
        <div className="w-[310px] h-[410px] flex flex-col justify-between items-center bg-stone-700 rounded-lg border-2 border-white text-white shadow-lg shadow-stone-700/80">
            {errorMessage && <p>{errorMessage}</p>}
                <form
                    className="h-52 w-full p-4 space-y-4" 
                    onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="text-center w-full h-12 text-black rounded-lg" type="text" id="user_name" value={name} name="user_name" placeholder="Nombre" onChange={handleNameChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input className="text-center w-full h-12 text-black rounded-lg" type="text" id="phone_number" value={phoneNumber} name="phone_number" placeholder="Número de Teléfono" onChange={handlePhoneNumberChange} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea className="text-center w-full h-12 text-black rounded-lg" id="message" value={message} name="message" placeholder="Mensaje" onChange={handleMessageChange} />
                    </div>
                    <button className="flex justify-center mx-auto font-semibold p-3 px-6 pt-2 w-44 text-stone-700 bg-turqoise/70 rounded-lg baseline hover:bg-turqoise hover:duration-500 hover:scale-105" type="submit">Submit</button>
                </form>
        </div>
    );
};

export default ContactForm;