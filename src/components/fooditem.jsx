import React from 'react'
import FoodCard from './foodCard';
import FoodData from '../Data/foodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function Fooditem(props) {
    const handleToast = (name)=> toast.success(`${name} added to cart`);
    const category = useSelector((state)=>state.category.category)
    const search = useSelector((state)=>state.search.search);

    return (
    <>
        <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
            {
                FoodData.filter((food)=>{
                    if(category==="All"){
                        return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    }
                    else{
                        return category===food.category && 
                        food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

                    }
                }).map((food)=>(
                    <FoodCard 
                    key={food.id} 
                    id={food.id}
                    img={food.img}
                    desc={food.desc}
                    price={food.price}
                    name= {food.name}
                    rating={food.rating} 
                    handleToast={handleToast}   
                    />
                ))
            }

        </div>
    </>
    )
}

export default Fooditem;