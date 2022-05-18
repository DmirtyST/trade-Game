/** @format */
import {basketСounterAdd, basketСounterRemove} from "../../../Store/Slice/addProducts";
import {useDispatch} from "react-redux";

function BasketIncrease({game, styles}) {
	const dispatch = useDispatch();

	const handleAddProducts = (game) => {
		dispatch(basketСounterAdd(game));
	};
	const handleRemoveProducts = (game) => {
		dispatch(basketСounterRemove(game));
	};
	return (
		<div className={styles.BasketIncrease}>
			<button className={styles.BasketIncrease_remove} style={{cursor: "pointer"}} onClick={() => handleRemoveProducts(game)}>
				-
			</button>
			<div className={styles.BasketIncrease_title}>{game.cartQuantity} шт</div>
			<button className={styles.BasketIncrease_add} style={{cursor: "pointer"}} onClick={() => handleAddProducts(game)}>
				+
			</button>
		</div>
	);
}

export default BasketIncrease;
