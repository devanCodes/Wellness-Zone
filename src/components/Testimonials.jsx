import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Devan H",
        content: "Ever since meeting Claydy, she has inspired me to train not only harder, but smarter too. I have completely changed how I approach my training and have seen results, especially in my lower body, that I never expected to obtain. She is passionate and I can tell she finds purpose in helping others succeed.",
    },
    {
        id: 2,
        name: "Pamela",
        content: "Girl, lo mejor del mundo, tuve algunas situaciones las cuales no me permitieron continuar o llevar de manera adecuada mi alimentación y entrenamiento, sin embargo hoy puedo decir a boca llena que ella fue quien me enseño como comer, como pesar mis alimentos y sobre todo a como comer de todo sin llevar un dieta estricta y que no me guste",
    },
    {
        id: 3,
        name: "Yinet R",
        content: "Mi experiencia con Claydy ha sido muy progresiva, con entrenamientos personalizados y acorde a mis necesidades que me han llevado a grandes logros tanto físico como emocional.",
    },
    {
        id: 4,
        name: "Elis",
        content: "Muy buena.",
    },
    {
        id: 5,
        name: "Rosse",
        content: "Muy bien. Me gusta el acompañamiento que das. Real. Dejas que uno sea. Y aconsejas. Motivas bastante pero sin llegar a presionar. I love you.",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-list">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;