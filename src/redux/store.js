import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";
import searchSlice from "./slices/scearchSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        category: categorySlice,
        search: searchSlice,
    },
});

export default store;
