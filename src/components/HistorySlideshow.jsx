import React from "react";
import { Parallax } from "react-parallax"; // importing the Parallax component from react-parallax to achieve desired effect for some images
import photo1 from "../resources/about_photos/AM1.png";
import photo2 from "../resources/about_photos/AM2.png";
import photo3 from "../resources/about_photos/AM3.png";
import photo4 from "../resources/about_photos/AM4.png";

const HistorySlideshow = () => {
  return (
    <div>
      <img src={photo1} className="w-full h-[400px]"></img>
      <div className="bg-white">
        <h3 className="uppercase text-xl text-center pt-2">
          Mi historia / My story
        </h3>
        <p className="text-justify text-lg p-12 py-4">
          El área del fitness siempre ha sido más que una pasión, un estilo de
          vida y he forjado mis conocimientos a lo largo de los años. Sin
          embargo, por ansiedad, estrés y descuido, engordé más de 52 libras en
          un año. Con mucho esfuerzo y disciplina, pude llegar a mi peso
          original, al final de ese año: 2019 (FOTO IZQUIERDA). En el 2020,
          recibí una cirugía del intestino por ser "disfuncional", en esta me
          removieron más de la mitad del mismo. A raíz de esa cirugía y de su
          dieta líquida, perdí mucho peso y todos los músculos que había creado.
          Al verme en el espejo, tomé una decisión: preparar mis conocimientos
          para ejecutarlos de manera adecuada. "Quiero ser mi mejor versión, a
          pesar de mi condición desconocida." (FOTO DERECHA)
        </p>
        <hr className="border-black border-dotted"></hr>
        <p className="text-justify text-lg p-12 py-4">
          The area of fitness has always been more than a passion, a lifestyle
          and I have forged my knowledge over the years. However, due to
          anxiety, stress, and carelessness, I gained over 52 pounds in one
          year. With a lot of effort and discipline, I was able to reach my
          original weight at the end of that year: 2019 (LEFT PHOTO). In 2020, I
          received an intestinal surgery because it was "dysfunctional", in
          which more than half of it was removed. As a result of that surgery
          and it's liquid diet, I lost a lot of weight and all the muscle I had
          built. Seeing myself in the mirror, I made a decision: prepare my
          knowledge to execute it properly. "I want to be the best version of
          myself, despite my unknown condition." (RIGHT PHOTO)
        </p>
      </div>
      {/* these components have a 'bgImage' prop that specifies the background image and a 'strength' prop that determines the parallax effect strength */}
      <Parallax
        className="relative flex h-[400px]"
        bgImage={photo2}
        strength={500}
      ></Parallax>
      <div className="bg-white">
        <p className="text-justify text-lg p-12 py-4">
          En estado de pandemia y post cirugía, empecé a luchar por mí y para mí
          creando un grupo motivacional de chicas donde nos ejercitábamos por
          videollamadas por rutinas que creaba cada día. Al termino de la
          pandemia, empecé el gimnasio y desde entonces lucho por una mejor
          versión de mí misma. Al final de 2022, me detectaron colitis
          intestinal (enfermedad inflamatoria del intestino) e insuficiencia
          pancréatica. Uso permenentemente medicamentos para controlar la
          inflamación crónica. Más de la mitad del tiempo estoy inflamada.
        </p>
        <hr className="border-black border-dotted"></hr>
        <p className="text-justify text-lg p-12 py-4">
          During the pandemic and post surgery, I began to fight for myself by
          creating a motivational group of girls where we exercised through
          video calls for routines that I created every day. At the end of the
          pandemic, I started going to the gym and since then I have been
          fighting for a better version of myself. At the end of 2022, I was
          diagnosed with intestinal colitis (inflammatory bowel disease) and
          pancreatic insufficiency. I permanently use medications to control
          chronic inflammation. More than half the time I am inflamed.
        </p>
      </div>
      {/* these components have a 'bgImage' prop that specifies the background image and a 'strength' prop that determines the parallax effect strength */}
      <Parallax
        className="relative flex h-[400px]"
        bgImage={photo3}
        strength={500}
      ></Parallax>
      <div className="bg-white">
        <p className="text-justify text-lg p-12 py-4">
          ¿Y tú? ¿Quieres lograr una mejor versión de ti mismo/a o aferrarte a
          las situaciones que nos pasan?
        </p>
        <hr className="border-black border-dotted"></hr>
        <p className="text-justify text-lg p-12 py-4">
          And you? Do you want to achieve a better version of yourself or cling
          to the situations that happen to us?
        </p>
      </div>
      <img src={photo4} className="w-full h-[400px]"></img>
    </div>
  );
};

export default HistorySlideshow;
