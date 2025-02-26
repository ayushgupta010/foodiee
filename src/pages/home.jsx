import React from 'react'
import Navbar from '../components/navbar';
import Category from '../components/category';
import Fooditem from '../components/fooditem';
import Cart from '../components/cart';

function Home(props) {
    

    return (
        <>
           <Navbar/>
           <Category/>
           <Fooditem/>
           <Cart/>
           {/* <h1 className=''>home</h1>  */}
           {/* <button on onClick={()=> window.location ='/success'}>success</button> */}
        </>
    )
}
export default Home;

