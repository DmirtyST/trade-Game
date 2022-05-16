/** @format */

import {footerData} from "../../../Data/data";
import styles from "../../../Styles/FooterStyles/ItemLogo.module.scss";
/** @format */

function ItemLogo() {
	return (
		<div>
			{footerData.slice(0, 1).map((e) => {
				return (
					<div key={e.id} className={styles.item}>
						<img className={styles.logo} src={e.pathImg} alt="logo" />
						<p className={styles.text}>{e.text}</p>
					</div>
				);
			})}
		</div>
	);
}

export default ItemLogo;
