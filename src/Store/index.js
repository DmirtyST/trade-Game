/** @format */

import {configureStore} from "@reduxjs/toolkit";
import AddProductsSlice from "./Slice/addProducts";

const store = configureStore({
	reducer: {cart: AddProductsSlice},
});

export default store;
