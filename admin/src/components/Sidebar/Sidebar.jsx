import React from 'react'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

function Sidebar() {
  return (
    <div className='flex md:flex-col flex-row md:pt-[30px] py-[15px] gap-[20px] w-[100%] md:max-w-[250px] max-w-none md:h-[100vh] h-auto  bg-white justify-center md:items-start md:justify-start items-center  '>
        <Link to={'/addproduct'} className='no-underline '>
            <div className="flex items-center justify-center mx-[20px] py-[6px] px-[10px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer w-[100%]">
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} className='no-underline'>
            <div className="flex items-center justify-center mx-[20px] py-[6px] px-[14px] rounded-[6px] bg-[#f6f6f6] gap-[20px] cursor-pointer w-[100%]">
                <img src={list_product_icon} alt="" />
                <p>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar