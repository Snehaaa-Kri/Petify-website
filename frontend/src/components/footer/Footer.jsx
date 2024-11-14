import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_icon from '../assets/pintester_icon.png'

function Footer() {
    return (
        <div className='flex justify-center items-center flex-col gap-[50px] '>
            <div className="flex items-center gap-[20px]">
                <img className='h-[90px] ' src={logo} alt="" />
                <p className='text-[#383838] text-[46px] font-bold'>PETIFY</p>
            </div>
           
            <ul className='flex list-none gap-[50px] text-[#252525] text-[18px]'>
                {['company', 'offices', 'about', 'contact'].map((page) => (
                <li key={page}>
                    <NavLink
                        to={`/${page}`}
                        className={({ isActive }) => 
                            `cursor-pointer transition duration-300 ${isActive ? 'text-[#FF5722]' : 'text-[#252525]'}       hover:text-[#FF5722]`
                        }
                    >
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                    </NavLink>
                </li>
                ))}
            </ul>

            
           
            {/* social icons  */}
            <div className="flex gap-[18px] ">
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] cursor-pointer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
                <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] cursor-pointer">
                    <img src={pintester_icon} alt="Pinterest" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=yourphonenumber" target="_blank" rel="noopener noreferrer" className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] cursor-pointer">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </a>
            </div>
    
            {/* copyright  */}
            <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[16px]">
                <hr className='w-[85%] border-none rounded-[10px] h-[2px] bg-[#c7c7c7]'/>
                <p>Copyright @2024 - All rights reserved</p>
            </div>
        </div>
      )
}

export default Footer;
