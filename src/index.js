/** @format */

import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import {Provider} from "react-redux";
import {totalPrice} from "./Store/Slice/addProducts";
store.dispatch(totalPrice());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);

reportWebVitals();
