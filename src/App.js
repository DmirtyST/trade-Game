/** @format */

import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import BasketPage from "./components/BasketPage";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/basket" element={<BasketPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
