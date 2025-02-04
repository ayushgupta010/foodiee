import React from 'react'

function Catogery(props) {
    

    return (
        <>
           <div className='ml-7'>
                <h3 className='text-xl font-semibold'>Find the best Food!</h3>
                <div className='my-3 flex gap-3 overflow-x-auto scroll-smooth lg:overflow-x-hidden'>
                    <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50'>
                        All
                    </button>
                    <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50'>
                        Lunch
                    </button>
                    <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50'>
                        Breakfast
                    </button>
                    <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50'>
                        Dinner
                    </button>
                    <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-amber-50'>
                        Snacks
                    </button>
                </div>
           </div> 
        </>
    )
}
export default Catogery;
