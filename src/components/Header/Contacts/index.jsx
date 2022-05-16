/** @format */
import styles from "../../../Styles/HeaderStyles/Contacts.module.scss";
function Contacts() {
	return (
		<div className={styles.contacts}>
			<img src="./Image/icon_tel.svg" alt="" />
			<a href="tel:+74959111911">+7 (495) 911-10-11</a>
		</div>
	);
}

export default Contacts;
