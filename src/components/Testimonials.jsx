import React from 'react';
import { PiQuotesFill } from 'react-icons/pi';

// const testimonials = [
//     {
//         id: 1,
//         name: "Devan H",
//         relationship: "Boyfriend/Gym Partner",
//         content: "Ever since meeting Claydy, she has inspired me to train not only harder, but smarter too. I have completely changed how I approach my training and have seen results, especially in my lower body, that I never expected to obtain. She is passionate and I can tell she finds purpose in helping others succeed.",
//     },
//     {
//         id: 2,
//         name: "Pamela",
//         relationship: "Client",
//         content: "Girl, lo mejor del mundo, tuve algunas situaciones las cuales no me permitieron continuar o llevar de manera adecuada mi alimentación y entrenamiento, sin embargo hoy puedo decir a boca llena que ella fue quien me enseño como comer, como pesar mis alimentos y sobre todo a como comer de todo sin llevar un dieta estricta y que no me guste",
//     },
//     {
//         id: 3,
//         name: "Yinet R",
//         relationship: "Client",
//         content: "Mi experiencia con Claydy ha sido muy progresiva, con entrenamientos personalizados y acorde a mis necesidades que me han llevado a grandes logros tanto físico como emocional.",
//     },
//     {
//         id: 4,
//         name: "Elis",
//         relationship: "Current Client",
//         content: "Muy buena.",
//     },
//     {
//         id: 5,
//         name: "Rosse",
//         relationship: "Current Client",
//         content: "Muy bien. Me gusta el acompañamiento que das. Real. Dejas que uno sea. Y aconsejas. Motivas bastante pero sin llegar a presionar. I love you.",
//     },
// ];

// const Testimonials = () => {
//     return (
//         <div className="testimonials-list">
//             {testimonials.map((testimonial) => (
//                 <div key={testimonial.id} className="testimonial">
//                     <h1>{testimonial.name}</h1>
//                     <h3>{testimonial.relationship}</h3>
//                     <p>{testimonial.content}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

const Testimonials = () => {
    return (
        <div className="mt-10 p-6">
            <div className="relative bg-purple-600 text-white p-8 rounded-lg">
                <div className="absolute top-0 right-6 text-6xl">
                    <PiQuotesFill />
                </div>
                <div className="flex justify-start space-x-4">
                    <img
                        src="https://ui-avatars.com/api/?name=Devan+Hailey"
                        alt=""
                        className="h-8 w-8 rounded-full border-2 border-purple-400"                    
                    />
                    <div>
                        <h2 className="font-bold text-sm">Devan Hailey</h2>
                        <h3 className="text-xs opacity-50">Boyfriend/Gym Partner</h3>
                    </div>
                </div>
                <p className="mt-4 font-bold text-xl leading-tight">
                    Ever since meeting Claydy, she has inspired me to train not only harder, but smarter too. 
                    I have completely changed how I approach my training and have seen results, especially in 
                    my lower body, that I never expected to obtain. She is passionate and I can tell she finds 
                    purpose in helping others succeed.
                </p>
            </div>
        </div>
    );
};

export default Testimonials;