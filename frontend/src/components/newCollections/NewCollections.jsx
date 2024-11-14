import React from 'react'
import new_collection from '../assets/new_collections'
import Item from '../items/Item'

function NewCollections() {
  return (
        // NewCollections
    <div className='flex flex-col items-center gap-[10px] mb-[100px] mt-[70px]'>
        <h1 className='text-[#171717] text-[50px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>

        <div className="mt-[50px] grid grid-flow-row lg:grid-cols-4 sm:grid-cols-1 gap-[30px]">
            {new_collection.map((item, idx)=>{return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />})}
        </div>
    </div>
  )
}

export default NewCollections