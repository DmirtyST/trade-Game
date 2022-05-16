/** @format */

import {useState} from "react";
import Container from "../../Container/Index";
import Burger from "./Burger";
import DropMenu from "./DropMenu";
import Nav from "./Navigation";
import Social from "./Social";
import styles from "../../../Styles/SubHeaderStyles/SubHeader.module.scss";
import MobileSearch from "../../MobileComponents/SearchHeader";
function SubHeader() {
	const [menu, setMenu] = useState(false);
	let handleActiveMenu = () => {
		setMenu(!menu);
		if (menu === true) {
			document.body.style.overflow = "auto";
		}

		if (menu === false) {
			document.body.style.overflow = "hidden";
		}
	};
	return (
		<div className={styles.subHeader}>
			<Container>
				<MobileSearch />
			</Container>
			<div className={styles.subHeader_mobile}>
				<DropMenu menu={menu} handleActiveMenu={handleActiveMenu} styles={styles} />
				<Container>
					<div className={styles.row}>
						<Burger handleActiveMenu={handleActiveMenu} styles={styles} />
						<Nav menu={menu} styles={styles}></Nav>
						<Social styles={styles} />
					</div>
				</Container>
			</div>
		</div>
	);
}

export default SubHeader;
