/** @format */

import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import AmountBasket from "./Amount";
import styles from "../../../Styles/HeaderStyles/BasketHeader.module.scss";
const Basket = () => {
	const selec = useSelector((state) => state.cart.addItem);

	return (
		<div className={styles.basket}>
			<NavLink to={"/basket"}>
				<AmountBasket styles={styles} amount={selec.length} />

				<img src="./Image/icon_basket.svg" alt="basket" />
			</NavLink>
		</div>
	);
};

export default Basket;
