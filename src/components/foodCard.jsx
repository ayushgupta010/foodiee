import React from 'react'
import { GoStarFill } from "react-icons/go";

function FoodCard({name, id, rating, desc, img, price}) {
    

    return (
        <div className='font-bold w-[250px] bg-white p-5 rounded-lg' >
            <img src={img}
            alt=""
            className='w-screen aspect-auto h-[130px] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer ' 
            />
            <div className='text-sm flex justify-between'>
                <h2>Onion Pizza</h2>
                <span className='text-green-500 '>₹{price}</span>
            </div>
            <p className='text-sm font-normal'>{desc.slice(0,50)}....</p>
            <div className='flex justify-between'>
               <span className='flex justify-center items-center'>
               <GoStarFill className='mr-1 text-yellow-400' /> {rating}
               </span>
               <button className='p-1 text-white bg-green-500 rounded-lg text-sm hover:scale-110 transition-all duration-500'> Add to Cart</button>
            </div>
            
        </div>
    )
}

export default FoodCard;
