import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

function Navbar() {
    //use state variables to change the menu lists
    const [menu, setMenu] = useState("shop")

    const {getTotalCartItems} = useContext(ShopContext); //importing getTotalCartItems() function using context api


  return (
    // NAVBAR 
    <div className='flex justify-around p-[16px] shadow-sm w-[100vw] z-10'>

        {/* NAV-LOGO  */}
        <div className="flex gap-[10px] items-center">
            <img className='h-[60px]' src={logo} alt="" />
            <p className='text-[#171717] text-[38px] font-semibold'>PETIFY</p>
        </div>

        {/* NAV MENU  */}
        <ul className='flex items-center list-none gap-[50px] color-[#626262] text-[20px] font-medium'>
            <li onClick={() => {setMenu("shop")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/'>Shop</Link>     
                {menu === "shop"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
                
            </li>
            <li onClick={() => {setMenu("dogs")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/dogs'>Dogs</Link>
            {menu === "dogs"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
            </li>
            <li onClick={() => {setMenu("cats")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/cats'>Cats</Link>
            {menu === "cats"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
            </li>
            <li onClick={() => {setMenu("accessories")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/accessories'>Accessories</Link>
            {menu === "accessories"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
            </li>

            <li onClick={() => {setMenu("hotels")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/hotels'>Hotels</Link>
            {menu === "hotels"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
            </li>

            <li onClick={() => {setMenu("adopt")}} className='flex flex-col items-center justify-center gap-[3px] cursor-pointer hover:text-[#FF5722] transition duration-300'> <Link to='/adopt'>Adopt</Link>
            {menu === "adopt"? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' />  : <></>}
            </li>
        </ul>

        {/* Right  */}
        <div className="flex items-center gap-[45px]">
            {/* logout feature */}
            {localStorage.getItem('auth-token') 
            ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}} className='w-[157px] h-[58px] outline-none border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white active:bg-[#f3f3f3] hover:text-[#FF5722]'>Logout</button> 
            : <Link to='/login'>
                <button className='w-[157px] h-[58px] outline-none border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white active:bg-[#f3f3f3]'>Login</button>
            </Link>}
        

            {/* adding counter on cart button  */}
            <Link to='/cart'>
                <img src={cart_icon} alt="" />
            </Link>
            <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-500 text-white">{getTotalCartItems()}</div>
        </div>




    </div>
  )
}

export default Navbar