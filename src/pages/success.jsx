import React from 'react'

function Success(props) {
    

    return (
        <>
            <h1 className='text-3xl'>success</h1>
            <button onClick={() => window.location = '/'}> home</button>
        </>
    )
}

export default Success;
