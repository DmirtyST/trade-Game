/** @format */

import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
const initialState = {
	addItem: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
	currentGame: null,
};
const addProductsSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItems: (state, action) => {
			const ItemIndex = state.addItem.findIndex((game) => game.id === action.payload.id);
			if (ItemIndex >= 0) {
				state.addItem[ItemIndex].cartQuantity += 1;
				toast.info("Продукт уже в корзине ", {
					position: "bottom-left",
					autoClose: 1500,
				});
			} else {
				const tempProduct = {...action.payload, cartQuantity: 1};
				state.addItem.push(tempProduct);
				toast.success(`${action.payload.title}:  добавлен в корзину`, {
					position: "bottom-left",
					autoClose: 2000,
				});
			}
		},
		removeItems: (state, action) => {
			state.addItem = state.addItem.filter((game) => game.id !== action.payload);
		},
		basketСounterAdd: (state, action) => {
			const itemIndex = state.addItem.findIndex((game) => game.id === action.payload.id);

			if (state.addItem[itemIndex].cartQuantity >= 1) {
				state.addItem[itemIndex].cartQuantity += 1;
			}
		},

		basketСounterRemove: (state, action) => {
			const itemIndex = state.addItem.findIndex((game) => game.id === action.payload.id);

			if (state.addItem[itemIndex].cartQuantity > 1) {
				state.addItem[itemIndex].cartQuantity -= 1;
			} else if (state.addItem[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.addItem.filter((game) => game.id !== action.payload.id);
				state.addItem = nextCartItems;
			}
		},

		totalPrice: (state, action) => {
			let {initialPrice, qunitity} = state.addItem.reduce(
				(acc, game) => {
					const {price, cartQuantity} = game;
					const itemInitialState = price * cartQuantity;
					acc.initialPrice += itemInitialState;
					acc.qunitity += cartQuantity;
					return acc;
				},
				{initialPrice: 0, qunitity: 0},
			);

			state.cartTotalQuantity = qunitity;
			state.cartTotalAmount = initialPrice;
		},
		nextPathGame: (state, action) => {
			state.currentGame = action.payload;
		},
	},
});

export const {addItems, removeItems, basketСounterAdd, basketСounterRemove, totalPrice, nextPathGame} = addProductsSlice.actions;
export default addProductsSlice.reducer;
