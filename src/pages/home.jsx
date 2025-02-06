import React from 'react'
import Navbar from '../components/navbar';
import Catogery from '../components/catogery';
import Fooditem from '../components/fooditem';

function Home(props) {
    

    return (
        <>
           <Navbar/>
           <Catogery/>
           <Fooditem/>
           {/* <h1 className=''>home</h1>  */}
           {/* <button on onClick={()=> window.location ='/success'}>success</button> */}
        </>
    )
}
export default Home;

