/** @format */
import Container from "../Container/Index";
import styles from "../../Styles/HeaderStyles/Header.module.scss";
import Logo from "./Logo";
import Search from "./Search";
import Contacts from "./Contacts";
import ProfileandBasket from "./BasketandProfile";
import SubHeader from "./SubHeader";
import HeaderBurger from "../MobileComponents/HeaderBurger";
import {useState} from "react";
import AsideMenu from "../MobileComponents/AsideMenu";
const Header = () => {
	const [active, setActive] = useState(false);
	const toggleBurger = () => {
		setActive(!active);
		if (active === true) {
			document.body.style.overflowY = "scroll";
		}

		if (active === false) {
			document.body.style.overflowY = "hidden";
		}
	};
	return (
		<header className={styles.header}>
			<AsideMenu active={active} toggleBurger={toggleBurger} />
			<div className={styles.header_box}>
				<Container>
					<div className={styles.row}>
						<HeaderBurger toggleBurger={toggleBurger} active={active} />

						<div className={styles.item}>
							<Logo styles={styles} />
							<Search styles={styles} />
						</div>
						<div className={styles.item}>
							<Contacts />
							<ProfileandBasket styles={styles} />
						</div>
					</div>
				</Container>
			</div>
			<SubHeader />
		</header>
	);
};

export default Header;
