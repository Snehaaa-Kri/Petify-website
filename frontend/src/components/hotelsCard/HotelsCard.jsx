import React from 'react'
import { MdOutlineBedroomChild } from "react-icons/md";


function HotelsCard({hotels}) {
  return (
    <>
        <div className="h-[348px] w-[374px] border-[1px] border-gray-300 rounded-md p-1 hover:scale-105 hover:rounded-t-md">
            <img src={hotels.src} alt="" className='rounded-t-md hover:rounded-t-md' />

            {/* name, place  */}
            <div className="flex justify-start items-end gap-2 ml-1 py-1">
                <h1 className='text-xl'>{hotels.name}</h1>
                <p className='text-base text-gray-500 '>{hotels.place}</p>
            </div>

            {/* facilities  */}

            <div className="flex text-base justify-start items-center gap-1 border-t-[1px] border-gray-300">
                {/* price  */}
                <div className="py-1 px-1 text-center">
                    <p className='font-bold text-lg'>{hotels.amount}</p>
                    <p className='text-sm text-gray-500 '>Per night+Taxes</p>
                </div>

                {/* rooms  */}
                <div className="flex justify-center items-center gap-2 border-x-[1px] border-gray-300 py-4 px-2 pr-8 ">
                    <div className="flex justify-center items-center gap-1">
                        <p className='text-gray-500 '><MdOutlineBedroomChild /></p>
                        <p>{hotels.rooms} Rooms</p>
                    </div>

                </div>


                <div className="py-2">
                    <button className='bg-gray-200 hover:bg-gray-300 py-2 px-3 ml-1 rounded'>View villa</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default HotelsCard