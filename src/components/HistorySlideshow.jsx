import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import photo1 from '../resources/about_photos/AM1.png';
import photo2 from '../resources/about_photos/AM2.png';
import photo3 from '../resources/about_photos/AM3.png';
import photo4 from '../resources/about_photos/AM4.png';
import photo5 from '../resources/about_photos/AM5.png';
import photo6 from '../resources/about_photos/AM6.png';
import photo7 from '../resources/about_photos/AM7.png';


// const HistorySlideshow = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const handleNextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
//     };

//     const handlePrevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
//     };

//     const handleGoToSlide = (slideIndex) => {
//         setCurrentSlide(slideIndex);
//     };

//     const photos = [photo1, photo2, photo3, photo4, photo5];
//     const currentPhoto = photos[currentSlide];

//     return (
//         <div className="history-slideshow">
//             <button className="prev-button" onClick={handlePrevSlide}>
//                 Previous
//             </button>
//             <img src={currentPhoto} alt={`Photo ${currentSlide + 1}`} />
//             <button className="next-button" onClick={handleNextSlide}>
//                 Next
//             </button>
//             <div className="slide-buttons">
//                 <button onClick={() => handleGoToSlide(0)}>Slide 1</button>
//                 <button onClick={() => handleGoToSlide(1)}>Slide 2</button>
//                 <button onClick={() => handleGoToSlide(2)}>Slide 3</button>
//                 <button onClick={() => handleGoToSlide(3)}>Slide 4</button>
//                 <button onClick={() => handleGoToSlide(4)}>Slide 5</button>
//             </div>
//         </div>
//     );
// };

// const HistorySlideshow = () => {
//     return (
//         <>
//             <div className="bg-center mx-auto" style={{backgroundImage: `url(${photo1})`}}>
//                 <div className="h-screen bg-opacity-75 flex justify-center pt-[80px]">

//                 </div>
//             </div>
//             {/* <h1 className="bg-white h-[400px]">Hello</h1> */}
//             <div className="bg-fixed bg-center mx-auto" style={{backgroundImage: `url(${photo2})`}}>
//                 <div className="h-screen bg-opacity-75 flex justify-center pt-[80px]">

//                 </div>
//             </div>
//             {/* <h1 className="bg-white h-[400px]">Hello</h1> */}
//             <div className="bg-fixed bg-center mx-auto" style={{backgroundImage: `url(${photo3})`}}>
//                 <div className="h-[600px] bg-opacity-75 flex justify-center pt-[80px]">

//                 </div>
//             </div>
//             {/* <h1 className="bg-white h-[400px]">Hello</h1> */}
//             <div className="bg-fixed bg-center mx-auto" style={{backgroundImage: `url(${photo4})`}}>
//                 <div className="h-[1000px] bg-opacity-75 flex justify-center pt-[80px]">

//                 </div>
//             </div>
//             {/* <h1 className="bg-white h-[400px]">Hello</h1> */}
//             <div className="bg-center mx-auto" style={{backgroundImage: `url(${photo5})`}}>
//                 <div className="h-[750px] bg-opacity-75 flex justify-center pt-[80px]">

//                 </div>
//             </div>
//         </>
//     )
// }

const HistorySlideshow = () => {
    return (
        <div>
            <img src={photo1} className="w-full h-screen"></img>
            <div className="bg-white">
                <h3 className="uppercase text-xl text-center pt-2">Mi historia</h3>
                <p className='text-justify p-12 py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque amet, possimus, numquam unde aliquid vitae repellat harum distinctio minima fugit commodi rem asperiores hic in omnis beatae dolorem. Eligendi!</p>
            </div>
            <Parallax className="image relative h-screen" bgImage={photo2} strength={800}>
            </Parallax>
            <div className="bg-white">
                <h3 className="uppercase text-xl text-center pt-2">Mi historia</h3>
                <p className='text-justify p-12 py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque amet, possimus, numquam unde aliquid vitae repellat harum distinctio minima fugit commodi rem asperiores hic in omnis beatae dolorem. Eligendi!</p>
            </div>
            <Parallax className="image relative h-screen" bgImage={photo3} strength={800}>
            </Parallax>
            <div className="bg-white">
                <h3 className="uppercase text-xl text-center pt-2">Mi historia</h3>
                <p className='text-justify p-12 py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque amet, possimus, numquam unde aliquid vitae repellat harum distinctio minima fugit commodi rem asperiores hic in omnis beatae dolorem. Eligendi!</p>
            </div>
            <Parallax className="image relative h-screen" bgImage={photo4} strength={800}>
            </Parallax>
            <img src={photo5}></img>
            <img src={photo6}></img>
            <img src={photo7}></img>
        </div>
    )
}

export default HistorySlideshow;