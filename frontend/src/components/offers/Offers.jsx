import React from 'react';
import exclusive_image from '../assets/exclusive_image.png';  

function Offers() {
  return (
    // Offers section
    <div style={{background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)'}} className='w-[85%] h-[60vh] flex m-auto p-[50px] mb-[150px]'>

        {/* OFFERS LEFT  */}
        <div className="flex-1 flex flex-col justify-center pl-12">
            <h1 className='text-[52px] font-semibold'>Exclusive</h1>
            <h1 className='text-[52px] font-semibold'>Offers For Dog Lovers</h1>
            <p className='color-[#171717] text-[18px] font-semibold'>ONLY ON SELECT BREEDS & DOG PRODUCTS</p>
            <button className='w-[222px] h-[60px] rounded-[30px] bg-[#ff4141] border-none text-white text-[19px] font-medium mt-[30px] cursor-pointer'>
              Discover Now
            </button>
        </div>

        {/* OFFERS RIGHT  */}
        <div className="flex-1 flex items-center justify-end pt-[50px] pr-12">
            <img className='h-[130%]' src={exclusive_image} alt="Exclusive Dog Offers" />
        </div>

    </div>
  );
}

export default Offers;
