/** @format */
import {useDispatch} from "react-redux";
import {addItems} from "../../Store/Slice/addProducts";
import ButtonAdd from "../ButtonAdd";
import ButtonAddOne from "../ButtonAddOne";
import styles from "./ItemPage.module.scss";
function ItemPage(game) {
	const {imagePath, players, time, age, title, price} = game;
	const dispatch = useDispatch();
	const handleaddProducts = (e) => {
		e.stopPropagation();
		dispatch(addItems(game));
	};

	return (
		<div className={styles.swiperSlide}>
			<div className={styles.box}>
				<div className={styles.imgContainer}>
					<img className={styles.imgProduct} src={imagePath} alt="" />
				</div>
				<div className={styles.sub}>
					<div className={styles.players}>
						<img src="./Image/players.svg" alt="ff" />
						{players}
					</div>
					<div className={styles.time}>
						<img src="./Image/time.svg" alt="" />
						{time}
					</div>
					<div className={styles.age}>{age}</div>
				</div>

				<div className={styles.title}>{title}</div>
				<div className={styles.boxPrice}>
					<div className={styles.price}>{price} грн</div>
				</div>
			</div>
			<ButtonAdd handleaddProducts={handleaddProducts} game={game} />
			<ButtonAddOne />
		</div>
	);
}

export default ItemPage;
