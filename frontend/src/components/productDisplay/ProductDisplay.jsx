import React, { useContext, useState } from 'react'
import start_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedNights, setSelectedNights] = useState(1);
    const [selectedRoomType, setSelectedRoomType] = useState("single");

    const [quantity, setQuantity] = useState(1); // State for selected quantity

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };
  return (
    <div className='flex my-[0px] mx-[120px]'>
        {/* Left  */}
        <div className="flex gap-[17px]">
            <div className="flex flex-col gap-[16px]">
                <img className='w-[290px]' src={product.image} alt="" />
                <img className='w-[290px]' src={product.image} alt="" />
                <img className='w-[290px]' src={product.image} alt="" />
                <img className='w-[290px]' src={product.image} alt="" />
            </div>

            <div className="">
                <img className='w-[1280px] ' src={product.image} alt="" />
            </div>
        </div>
        {/* Right  */}
        <div className="my-[0px] mx-[40px] flex flex-col ">
            <h1 className='font-bold text-[30px] text-[#3d3d3d]'>{product.name}</h1>
            <div className="flex items-center mt-[11px] gap-[4px] text-[#1c1c1c] text-[16px] ">

                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

            <div className="flex mt-[40px] gap-[20px] text-[20px] font-bold">
                <div className="line-through text-[#818181]">${product.old_price}</div>
                <div className="text-[#ff4141] ">${product.new_price}</div>
            </div>

            {/* description  */}
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam eum quae a rerum qui reiciendis labore architecto possimus ut, officia, temporibus sunt dolore veritatis delectus voluptatem maxime nihil commodi? 
            </div>



            {/* Select Quantity */}

            {
            product.category === 'hotels' ? (
                <div className="">
                {/* Content for hotels */}
                <h1 className="text-[#656565] text-[18px] font-semibold mt-4">Select Your Stay Options</h1>
  
                {/* Number of Nights */}
                <div className="mt-4">
                  <h2 className="text-[16px] font-semibold">Number of Nights</h2>
                  <div className="flex mt-1 gap-2">
                    {[1, 2, 3, "> 3"].map((nights) => (
                      <div
                        key={nights}
                        className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${selectedNights === nights ? 'bg-[#ebebeb]' : ''}`}
                        onClick={() => setSelectedNights(nights)}
                      >
                        {nights} {nights === 1 ? 'Night' : 'Nights'}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Type */}
                <div className="mt-4">
                  <h2 className="text-[16px] font-semibold">Room Type</h2>
                  <select
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                    className="w-[157px] h-[35px] outline-none border-[1px] border-[#7a7a7a] rounded-md text-[#515151] text-[16px] font-medium bg-white active:bg-[#f3f3f3] mb-4"
                  >
                    <option value="single">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>

                <button onClick={()=>{addToCart(product.id)}} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BOOK NOW</button>


                </div>

            ) : product.category === 'dogs' ? (
                <div className="mt-[40px]">
                  {/* Content for dogs */}
                  <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Dogs</h1>
                  <div className="flex mt-[10px] mb-[35px] gap-[10px]">
                    {[1, 2, 3, 5].map((value) => (
                      <div
                        key={value}
                        className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                        onClick={() => handleQuantityChange(value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                  <button onClick={()=>{addToCart(product.id)}} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BUY NOW</button>
                </div>
            ) : product.category === 'cats' ? (
                <div className="mt-[40px]">
                  {/* Content for cats */}
                  <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Cats</h1>
                  <div className="flex mt-[10px] mb-[35px] gap-[10px]">
                    {[1, 2, 3, 5].map((value) => (
                      <div
                        key={value}
                        className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                        onClick={() => handleQuantityChange(value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>

                  <button onClick={()=>{addToCart(product.id)}} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BUY NOW</button>

                </div>
            ) : product.category === 'accessories' ? (
                <div className="mt-[40px]">
                  {/* Content for accessories */}
                  <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Accessories</h1>
                  <div className="flex mt-[10px] mb-[35px] gap-[10px]">
                    {[1, 2, 3, 5].map((value) => (
                      <div
                        key={value}
                        className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                        onClick={() => handleQuantityChange(value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>

                  <button onClick={()=>{addToCart(product.id)}} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>ADD TO CART</button>

                </div>
            ) : product.category === 'adopt' ? (
                <div className="">

                    {/* Adoption Details */}
                    <div className="mt-4">
                      <h2 className="text-[16px] font-semibold">Pet Details</h2>
                      <p className="mt-2 text-[#656565]">Species: {product.species || 'Unknown'}</p>
                      <p className="mt-1 text-[#656565]">Age: {product.age || 'Not specified'}</p>
                      <p className="mt-1 text-[#656565]">Breed: {product.breed || 'Not specified'}</p>
                    </div>

                    {/* Adoption Button */}
                    <button
                      onClick={() => addToCart(product.id)}
                      className="py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mt-4 mb-[10px]                 border-none outline-none cursor-pointer rounded-sm"
                    >
                      ADOPT NOW
                    </button>
                </div>
            ) : (
                <div className="mt-[40px]">
                  {/* Default content if no category matches */}
                  <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity</h1>
                  <div className="flex mt-[10px] mb-[35px] gap-[10px]">
                    {[1, 2, 3, 5].map((value) => (
                      <div
                        key={value}
                        className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                        onClick={() => handleQuantityChange(value)}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
            )
        }

{/* 
            <div className="">
                <h1 className='text-[#656565] text-[18px] font-semibold mt-[40px] '>Select Quatity</h1>
                <div className="flex mt-[10px] mb-[35px] gap-[10px] ">
                    <div className="border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb]">1</div>
                    <div className="border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb]">2</div>
                    <div className="border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb]">3</div>
                    <div className="border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb]">5</div>
                </div>
            </div> */}

            {/* <button onClick={()=>{addToCart(product.id)}} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>ADD TO CART</button> */}
            <p className='mt-[10px]'><span className='font-semibold'>Category :</span> {product.category} </p>
            <p className=''><span className='font-semibold'>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay