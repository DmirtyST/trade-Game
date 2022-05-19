/** @format */

import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import BasketPage from "./components/BasketPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./ScrollToTop";
import NotPages from "./components/NoPages";

function App() {
	return (
		<BrowserRouter>
			<div id="ScrollTop"></div>
			<ScrollToTop />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/basket" element={<BasketPage />} />
					<Route path="*" element={<NotPages />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
