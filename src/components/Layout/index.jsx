/** @format */
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
function Layout() {
	return (
		<div className={styles.Layout}>
			<Header />
			<main className={styles.page}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
