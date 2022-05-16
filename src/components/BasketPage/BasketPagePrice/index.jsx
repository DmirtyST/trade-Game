/** @format */

import ButtomCheckout from "../../ButtomCheckout";
import ButtonAddOne from "../../ButtonAddOne";

function BasketPagePrice({styles, game, cartTotalQuantity, cartTotalAmount}) {
	return (
		<div className={styles.BasketPagePrice}>
			<div className={styles.containerPrice}>
				<div>Общая сумма:{cartTotalAmount}грн</div>

				<div>Количество товаров: {cartTotalQuantity} шт</div>
			</div>

			<div className={styles.form_controlls}>
				<span>Промокод</span>
				<input type="text" />
			</div>

			<ButtomCheckout />
			<ButtonAddOne />
		</div>
	);
}

export default BasketPagePrice;
