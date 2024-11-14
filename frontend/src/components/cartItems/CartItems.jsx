import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

function CartItems() {
  const { all_product, CartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='my-[100px] mx-[120px]'>
      {/* Cart Item format */}
      <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] items-center gap-[25px] py-[20px] text-[#454545] text-[18px] font-semibold">
        <p className=''>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className='h-[3px] bg-[#e2e2e2] border-0' />
      {/* Individual cart item */}

      {all_product.map((e) => {
        // already available product
        // alert(e.id);
        if (CartItems[e.id] > 0) {
          return (
            <div className="">
              <div className=" grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] items-center gap-[25px] py-[20px] text-[#454545] text-[17px] font-medium ">
                <img className='h-[80px]' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='w-[64px] h-[50px] border-2 border-solid'>{CartItems[e.id]}</button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img className='w-[15px] mx-[40px] cursor-pointer'
                  src={remove_icon}
                  onClick={() => {removeFromCart(e.id)}}
                  alt="Remove item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Total price  */}

      <div className="flex my-[100px]">
        <div className="flex-1 flex flex-col mr-[200px] gap-[40px]">
            <h1>Cart total</h1>
            <div className="">
                <div className="flex justify-between py-[15px]">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px]">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>

                <hr />
                <div className="flex justify-between py-[15px] font-semibold">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='w-[252px] h-[50px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        {/* PROMOCODE  */}
        <div className="flex-1 text-[16px] font-medium">
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className="w-[504px] mt-[15px] pl-[20px] h-[50px] bg-[#eaeaea] flex justify-start items-center ">
                <input className='border-none outline-none bg-transparent text-[16px] w-[330px] h-[42px]' type="text" placeholder='PROMO CODE' />
                <button className='w-[170px] h-[50px] text-[16px] bg-black text-white cursor-pointer'>Submit</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default CartItems;
