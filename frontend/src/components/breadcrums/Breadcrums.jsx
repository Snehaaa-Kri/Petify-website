import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold my-[40px] mx-[120px] capitalize'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

    </div>
  )
}

export default Breadcrums