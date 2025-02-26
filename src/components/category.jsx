import React, { useState, useEffect } from "react";
import FoodData from "../Data/foodData";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";

function Category(props) {  // Fixed component name
    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);
        console.log("Unique categories:", uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.category.category);

    return (
        <div className="ml-7">
            <h3 className="text-xl font-semibold">Find the best Food!</h3>
            <div className="my-3 flex gap-3 overflow-x-auto scroll-smooth lg:overflow-x-hidden">
                    <button
                        onClick={() =>   
                            dispatch(setCategory("All"))
                        }
                        className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50 
                            ${ selectedCategory === "All"
                                && "bg-green-500 text-amber-50"
                         }`}
                    >
                        All
                    </button> 
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            dispatch(setCategory(category))
                        }
                        className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50
                            ${
                                 selectedCategory === category
                                && "bg-green-500 text-amber-50"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Category;
