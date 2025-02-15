import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cart.find((item)=> item.id === action.payload.id)

      if(existing){
        state.cart=state.cart.map(
          (item)=> item.id === action.payload.id ? {...item, qty: item.qty+1} :item
        );
      }
      else{
        state.cart.push(action.payload); 
      }
     
    },
    removeFromCart: (state, action)=>{
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
