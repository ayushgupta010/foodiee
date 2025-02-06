import React from 'react'
import FoodCard from './foodCard';
import FoodData from '../Data/foodData';

function Fooditem(props) {
    

    return (
        <div className='flex flex-wrap gap-10 justify-center'>
            {
                FoodData.map((food)=>{
                return( <FoodCard 
                key={food.id} 
                img={food.img}
                desc={food.desc}
                price={food.price}
                name= {food.name}
                rating={food.rating}    
                />
                );
            })
             
            }
        </div>
    )
}

export default Fooditem;