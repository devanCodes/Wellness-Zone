import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // this hook is used to access the current location object in a React Router context
import emailjs from "@emailjs/browser"; // library used to send and receive emails; in this case, it is used to receive inputted data in an email from users who fill out the contact form and submit it 

const ContactForm = () => {
  // initializes state variables 'name', 'phoneNumber', 'message', and 'errorMessage' using the 'useState' hook, with an initial value of an empty string; will be used to store the user's name, phone number, message, and error message inputs
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // uses 'useLocation' hook to get the current location obejct; used to extract data from 'Join Now' button in the home page
  const location = useLocation();
  // extracts the 'prefilledMessage' property from the 'location.state' object and defaults it to an empty object '{}' if 'location.state' is not defined
  const { prefilledMessage } = location.state || {};

  // 'useEffect' hook is used here to set the 'message' state based on the 'prefilledMessage' when it changes; this will populate the message field with a prefilled message if the user clicks on the 'Join Now' button on the home page
  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  // defining an event handler that updates the name state variable when the user input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // defining an event handler that updates the phone number state variable when the user input changes
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // defining an event handler that updates the message state variable when the user input changes
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // this function handles the form submission when the user clicks the submit button; it prevents the default form submission behavior, validates the form input, and sends an email using EmailJS if the input is valid
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    // send the form data using emailjs.com
    const templateParams = {
      user_name: name,
      phone_number: phoneNumber,
      message,
    };

    emailjs
      .send(
        "service_xdyq0bq",
        "template_pkpot1m",
        templateParams,
        "xsCyHHL5iCeycQkO_"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.text);
          // reset form fields after successful submission
          setName("");
          setPhoneNumber("");
          setMessage("");
          setErrorMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="w-[310px] h-[410px] flex flex-col justify-between items-center bg-stone-700 rounded-lg border-2 border-white text-white shadow-lg shadow-stone-700/80">
      {/* this conditionally renders an error message if 'errorMessage' is truthy; will display the error message to the user */}
      {errorMessage && <p>{errorMessage}</p>}
      <form className="h-52 w-full p-4 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="text-center w-full h-12 text-black rounded-lg"
            type="text"
            id="user_name"
            value={name}
            name="user_name"
            placeholder="Nombre"
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            className="text-center w-full h-12 text-black rounded-lg"
            type="text"
            id="phone_number"
            value={phoneNumber}
            name="phone_number"
            placeholder="Número de Teléfono"
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="text-center w-full h-12 text-black rounded-lg"
            id="message"
            value={message}
            name="message"
            placeholder="Mensaje"
            onChange={handleMessageChange}
          />
        </div>
        <button
          className="flex justify-center mx-auto font-semibold p-3 px-6 pt-2 w-44 text-stone-700 bg-turqoise/70 rounded-lg baseline hover:bg-turqoise hover:duration-500 hover:scale-105"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
