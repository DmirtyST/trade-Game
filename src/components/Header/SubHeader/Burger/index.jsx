/** @format */

function Burger({styles, handleActiveMenu}) {
	return (
		<div onClick={handleActiveMenu} className={styles.burgerMenu}>
			<div className={styles.burger}>
				<span></span>
			</div>
			<span>Категории</span>
		</div>
	);
}

export default Burger;
