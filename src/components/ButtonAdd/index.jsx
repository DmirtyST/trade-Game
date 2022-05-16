/** @format */
import styles from "./ButtonAdd.module.scss";
function ButtonAdd({handleaddProducts}) {
	return (
		<button onClick={handleaddProducts} className={styles.buttonAdd}>
			<p>В корзину</p>
			<i>
				<img src="/Image/iconAdd.svg" alt="Корзина" />
			</i>
		</button>
	);
}

export default ButtonAdd;
