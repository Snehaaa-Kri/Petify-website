import React, { useState } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';

function Hero({ slides }) {  // Destructure slides from props
   // State to save the current slide number
   const [currSlide, setCurrSlide] = useState(0);

   // Previous slide function
   const prevSlide = () => {
     setCurrSlide(currSlide === 0 ? slides.length - 1 : currSlide - 1);
   };

   // Next slide function
   const nextSlide = () => {
     setCurrSlide(currSlide === slides.length - 1 ? 0 : currSlide + 1);
   };

   return (
     <div className="overflow-hidden relative">
       {/* Images mapping */}
       <div className="flex transition-transform duration-500 ease-out" 
         style={{ transform: `translateX(-${currSlide * 100}%)` }}>

         {slides.map((s, index) => (
           <img key={index} src={s} className="w-full h-[650px] flex-shrink-0" alt={`Slide ${index}`} />
         ))}
         
       </div>

       {/* Sliders */}
       <div className="absolute top-0 w-full h-full flex justify-between items-center px-8 text-2xl text-[#fd6e26]">
         <button onClick={prevSlide}>
           <IoIosArrowDropleftCircle />
         </button>
         <button onClick={nextSlide}>
           <IoIosArrowDroprightCircle />
         </button>
       </div>

       {/* Indicators */}
       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
         {slides.map((_, i) => (
           <div 
             key={i} 
             onClick={() => setCurrSlide(i)}
             className={`rounded-full w-2 h-2 cursor-pointer shadow-2xl ${i === currSlide ? "bg-[#fd6e26]" : "bg-gray-200"}`}
           />
         ))}
       </div>
     </div>
   );
}

export default Hero;
