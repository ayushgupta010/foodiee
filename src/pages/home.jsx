import React from 'react'
import Navbar from '../components/navbar';
import Catogery from '../components/catogery';

function Home(props) {
    

    return (
        <>
           <Navbar/>
           <Catogery/>
           {/* <h1 className=''>home</h1>  */}
           {/* <button on onClick={()=> window.location ='/success'}>success</button> */}
        </>
    )
}
export default Home;

