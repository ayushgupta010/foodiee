import React from 'react'
import { setSearch } from '../redux/slices/scearchSlice'
import { useDispatch } from 'react-redux'

function Navbar(props) {
    const dispatch = useDispatch();

    return (
        <nav className='flex flex-col lg:flex-row  justify-between mx-7 my-5 mb-10'> 
            <div className='content-start '>
               <h3 className='text-xl font-bold text-gray-500'>{new Date( ).toUTCString().slice(0,16)}</h3>
               <h1 className='text-2xl font-bold'>Foodiee</h1>
            </div>
            <div>
                <input 
                  type="text"
                  id=''
                  name='serach'
                  placeholder='search here'
                  autoComplete='off'
                  onChange={(e)=> dispatch(setSearch(e.target.value))}
                  className='p-3 border border-gray-500 rounded-lg outline-none w-full lg:w-[30vw]'
              
                />
            </div>
        </nav>
    )
}


export default Navbar
