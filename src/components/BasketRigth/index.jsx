/** @format */
import Basket from "../Header/Basket/index";
import {useState} from "react";
import Link from "react-scroll/modules/components/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowRight} from "@fortawesome/free-solid-svg-icons";
function BasketRigth({styles}) {
	const [scroll, setScroll] = useState(false);
	const [menu, setMenu] = useState(true);
	const handleShowMenu = () => {
		setMenu(!menu);
	};
	let newPosition = () => {
		const scrollvalue = document.documentElement.scrollTop;
		if (scrollvalue > 400) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	window.addEventListener("scroll", newPosition);
	return (
		<div className={scroll ? styles.BasketRigthContainer : styles.BasketRigth + " " + styles.BasketRigthContainerScroll}>
			<div className={menu ? styles.BasketRigth_row : styles.BasketRigth_row + " " + styles.BasketRigth_rowActive}>
				<div className={styles.BasketRigthItem}>
					<Basket styles={styles} />
				</div>
				<Link duration={500} smooth={true} to="ScrollTop">
					<div className={styles.BasketRigthItem}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faArrowUp} />
						</div>
					</div>
				</Link>
			</div>
			<div onClick={handleShowMenu} className={menu === true ? styles.BasketRigthItem : styles.BasketRigthItem + " " + styles.BasketRigthItemActive}>
				<div className={styles.iconActive + " " + styles.icon}>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</div>
	);
}

export default BasketRigth;
