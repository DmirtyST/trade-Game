/** @format */

import {useDispatch} from "react-redux";
import {removeItems} from "../../../Store/Slice/addProducts";

function ButtonRemove({game, styles}) {
	const dispatch = useDispatch();
	const removeItemHandle = (e) => {
		e.stopPropagation();
		dispatch(removeItems(game.id));
	};
	return (
		<div style={{cursor: "pointer"}} className={styles.removeBasket} onClick={removeItemHandle}>
			<img src="./Image/removeBasket.svg" alt="" />
		</div>
	);
}

export default ButtonRemove;
