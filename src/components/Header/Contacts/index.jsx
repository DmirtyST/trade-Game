/** @format */
import styles from "../../../Styles/HeaderStyles/Contacts.module.scss";
function Contacts() {
	return (
		<div className={styles.contacts}>
			<img src="./Image/icon_tel.svg" alt="" />
			<a href="tel:+380663844645">+38 (066) 38 44 645</a>
		</div>
	);
}

export default Contacts;
