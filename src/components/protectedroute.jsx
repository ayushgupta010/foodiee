import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

export function Protectedroute({element}) {
    const cartItem = useSelector((state)=>state.cart.cart);

    return cartItem.length > 0 ? element : <Navigate to="/ " />;
}
