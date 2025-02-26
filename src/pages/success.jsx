import React, {useState, useEffect} from 'react'
import {BeatLoader} from "react-spinners"

function Success(props) {
    const [loader, setloader] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setloader(false);
        },2000)
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                {
                    loader ?  <BeatLoader /> :
                    (
                        <div>      
                        <h2 className='text-3xl font-semibold mb-4'>Order Successful!</h2>
                        <p>Your order has been Successfully placed</p>
                        </div>
                    )
                }
                
            </div>
        </>
    )
}

export default Success;
