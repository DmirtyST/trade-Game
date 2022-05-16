/** @format */
import {useSelector} from "react-redux";
import styles from "../../Styles/SingleProduct/SingleProduct.module.scss";
import {useState} from "react";

function SingleProduct() {
	const game = useSelector((state) => state.cart.currentGame);

	if (!game) return null;

	return (
		<>
			<div className={styles.SingleProduct}>{game.title}</div>
		</>
	);
}

export default SingleProduct;
