/** @format */

import ContainerImage from "../ContainerImg";
import styles from "../../Styles/NoPages/NoPages.module.scss";
function NotPages() {
	return (
		<div className={styles.NotPages}>
			<div className={styles.NotPages_title}>404</div>
			<div className={styles.NotPages_text}>Здесь ничего нету :(</div>
			<div className={styles.NotPages_text}>Попробуйте вернутся на главную страницу</div>
		</div>
	);
}

export default NotPages;
