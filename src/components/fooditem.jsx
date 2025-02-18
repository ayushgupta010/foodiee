import React from 'react'
import FoodCard from './foodCard';
import FoodData from '../Data/foodData';
import toast, { Toaster } from 'react-hot-toast';

function Fooditem(props) {
    const handleToast = ()=> toast.success("Item added to cart");

    return (
    <>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
            {
                FoodData.map((food)=>{
                return( <FoodCard 
                key={food.id} 
                id={food.id}
                img={food.img}
                desc={food.desc}
                price={food.price}
                name= {food.name}
                rating={food.rating} 
                handleToast={handleToast}   
                />
                );
            })
             
            }
        </div>
    </>
    )
}

export default Fooditem;