import React from 'react'
import navlogo from '../../assets/navbar_logo.jpg'
import navProfile from '../../assets/nav-profile.svg'

function Navbar() {
  return (
    <div className='flex items-center border-b justify-between lg:py-[15px] md:py-[13px] py-[10px] lg:px-[60px] md:px-[40px] px-[20px] shadow-[0_1px_3px_-2px #000] mb-[1px] bg-white'>
        <img className='lg:w-[200px] md:w-[180px] w-[160px]' src={navlogo} alt="" />
        <img className='lg:w-[75px] md:w-[60px] w-[45px]' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar