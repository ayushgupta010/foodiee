import React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCart from './itemCart';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom"




function Cart(props) {

    const [activeCrat, setActiveCart] = useState(false);

    const navigate = useNavigate();

    const cartItems=useSelector((state)=>state.cart.cart)
    console.log("Cart Items from Redux:", cartItems);
    const totalQty=cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0);
    const totalAmt=cartItems.reduce((total, item)=>
       total + item.qty *item.price, 0);

    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white
                 ${
                    activeCrat ? "translate-x-0" : "translate-x-full"
                    } transition-all duration-500 e`}>
                <div className='flex justify-between my-3 '>
                    <span className='font-bold text-xl text-gray-800'>My Order</span>
                    <IoMdClose onClick={()=>setActiveCart(!activeCrat)} className='border-2 border-b-gray-600 text-gray-600 font-bold
                    p-1 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
                </div>
                
                
                {
                  cartItems.length>0 ? cartItems.map((food)=>{
                    return (
                    <ItemCart
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    img={food.img}
                    qty={food.qty}
                    />
                    );
                  }) : <h2>Your Cart is empty</h2> 
                }
                
    

                
                <div className='absolute bottom-0'>
                    <h3 className='font-semibold text-gray-800'>Item: {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'> Total Amount:₹{totalAmt}</h3>
                    <hr className='w-[90vw] lg:w-[18vw]'/>
                    <button 
                    onClick={()=>navigate("/success")}
                    className='bg-green-500 font-bold text-white my-2 py-2 rounded-lg
                    w-[90vw] lg:w-[18vw] hover:scale-105 transition-all duration-500'>checkout</button>
                 </div>
            </div>

            {!activeCrat && (
                <IoCartOutline onClick={() => setActiveCart(true)} 
                  className={`rounded-full bg-white text-3xl shadow-md fixed bottom-4 right-10 
                  ${totalQty>0 && "animate-bounce delay-500 transition-all duration-50"}`}
                  />
                )}

           
        </>
    )
}

export default Cart;