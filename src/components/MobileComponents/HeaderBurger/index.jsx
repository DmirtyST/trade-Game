/** @format */
import styles from "../../../Styles/MobileStyles/HeaderBurgerMobile.module.scss";
function HeaderBurger({active, toggleBurger}) {
	return (
		<div onClick={toggleBurger} className={active === false ? styles.HeaderBurger : styles.HeaderBurger + " " + styles.HeaderBurgerActive}>
			<span className={styles.HeaderBurger_line}></span>
		</div>
	);
}

export default HeaderBurger;
