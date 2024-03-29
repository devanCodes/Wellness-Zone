import React from "react";
import { PiQuotesFill } from "react-icons/pi";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-10 p-6">
      <div className="relative bg-purple-600 text-white p-8 rounded-lg xl:col-span-2 xl:row-start-1">
        <div className="absolute top-0 right-6 z-0 text-6xl">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=Devan+Hailey"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-purple-400"
          />
          <div>
            <h2 className="font-bold text-sm">Devan Hailey</h2>
            <h3 className="text-xs opacity-50">Gym Partner</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          Ever since meeting Claydy, she has inspired me to train not only
          harder, but smarter too. I have completely changed how I approach my
          training and have seen results, especially in my lower body, that I
          never expected to obtain. She is passionate and I can tell she finds
          purpose in helping others succeed.
        </p>
      </div>
      <div className="relative bg-gray-600 text-white p-8 rounded-lg xl:col-span-2 xl:row-start-3">
        <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=R"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-gray-400"
          />
          <div>
            <h2 className="font-bold text-sm">Rosse</h2>
            <h3 className="text-xs opacity-50">Current Client</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          Muy bien. Me gusta el acompañamiento que das. Real. Dejas que uno sea.
          Y aconsejas. Motivas bastante pero sin llegar a presionar. I love you.
        </p>
      </div>
      <div className="relative bg-turqoise_dark text-gray-800 p-8 rounded-lg xl:col-span-2 xl:row-start-2">
        <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=E"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-turqoise"
          />
          <div>
            <h2 className="font-bold text-sm">Elis</h2>
            <h3 className="text-xs opacity-50">Current Client</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          En tan solo dos meses comencé a experimentar cambios de transformación
          en mi cuerpo, hoy gozo de verme más bonita, más saludable y hasta
          libre de inmunidad. Me siento muy agradecida de todo el trabajo que ha
          hecho y el seguimiento que me ha dado.
        </p>
      </div>
      <div className="relative bg-gray-900 text-white p-8 rounded-lg xl:col-span-2">
        <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=YR"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-gray-700"
          />
          <div>
            <h2 className="font-bold text-sm">Yinet Ramirez</h2>
            <h3 className="text-xs opacity-50">Client</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          Mi experiencia con Claydy ha sido muy progresiva, con entrenamientos
          personalizados y acorde a mis necesidades que me han llevado a grandes
          logros tanto físico como emocional.
        </p>
      </div>
      <div className="relative bg-white text-gray-800 p-8 rounded-lg xl:col-span-2 xl:row-start-1">
        <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=P"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-gray-400"
          />
          <div>
            <h2 className="font-bold text-sm">Pamela</h2>
            <h3 className="text-xs opacity-50">Client</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          Girl, lo mejor del mundo, tuve algunas situaciones las cuales no me
          permitieron continuar o llevar de manera adecuada mi alimentación y
          entrenamiento, sin embargo hoy puedo decir a boca llena que ella fue
          quien me enseño como comer, como pesar mis alimentos y sobre todo a
          como comer de todo sin llevar un dieta estricta y que no me guste.
        </p>
      </div>
      <div className="relative bg-gray-300 text-gray-800 p-8 rounded-lg xl:col-span-2">
        <div className="absolute top-0 right-6 z-0 text-6xl lg:hidden">
          <PiQuotesFill />
        </div>
        <div className="relative z-10 flex justify-start space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=J"
            alt=""
            className="h-8 w-8 rounded-full border-2 border-gray-400"
          />
          <div>
            <h2 className="font-bold text-sm">Johanna</h2>
            <h3 className="text-xs opacity-50">Client</h3>
          </div>
        </div>
        <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
          Excelente, se notan los cambios desde la primera semana, el cuerpo se
          siente y se nota diferente, el estado de ánimo sube automáticamente.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
