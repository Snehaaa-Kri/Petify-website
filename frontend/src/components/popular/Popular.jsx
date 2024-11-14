import React from 'react'
import data_product from '../assets/data'
import Item from '../items/Item'

function Popular() {
  return (
    //Popular
    <div className='flex flex-col items-center gap-[10px] h-[90vh] mt-[70px]'> 
        <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN PETS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>

    {/* popular item */}
        <div className="mt-[50px] flex justify-center gap-[30px] flex-wrap">
   
        {data_product.map((item, idx) => {return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />} )}
        </div>

    </div>
  )
}

export default Popular