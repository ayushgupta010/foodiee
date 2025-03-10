import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, increamentQty, decreamentQty } from '../redux/slices/cartSlice';

function ItemCart({id, name, qty, price, img}) {
    const dispatch = useDispatch();

    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 '>
            <MdDelete onClick={()=> {
                  console.log("Removing item with ID:", id); 
                dispatch(removeFromCart({id, img, qty, price, name})) }
                }className='absolute right-7 text-gray-600 cursor-pointer'/>

           <img src= {img}
            alt=""
            className='w-[50px] h-[50px]' />

            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>{name} </h2>
                <div className='flex justify-between'>
                    <span className='text-yellow-300 font-bold'>₹{price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                        <FaMinus onClick={()=>{
                           qty >1? dispatch(decreamentQty({id })) : (qty=0)
                        }} className='border-2 border-gray-500 text-gray-600 hover:text-white  hover:bg-yellow-300 hover:border-none rounded-md 
                        p-1 text-xl transition-all ease-linear cursor-pointer '/>
                            <span>{qty}</span>
                        <FaPlus onClick={()=>{
                            dispatch(increamentQty({id}))
                        }} className='border-2 border-gray-500 text-gray-600 hover:text-white hover:bg-yellow-300 hover:border-none rounded-md 
                        p-1 text-xl transition-all ease-linear cursor-pointer '/>
                    </div>
                </div>
            </div>
        

        </div>
    )
}

export default ItemCart;