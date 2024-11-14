import React from 'react'
import {Link} from 'react-router-dom'

function Item(props) {
  return (
    <div className='w-[290px] hover:scale-105 hover:duration-700'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        

        <p className='m-[6px 0px]'>{props.name}</p>
        <div className="flex gap-[20px]">
            {/* new price */}
            <div className="text-[#374151] text-[16px] font-semibold">
                ${props.new_price}
            </div>
            {/* old price  */}
            <div className="text-[#8c8c8c] text-[16px] font-medium line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item