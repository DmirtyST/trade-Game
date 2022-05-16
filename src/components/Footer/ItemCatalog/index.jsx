/** @format */

import {footerData} from "../../../Data/data";
import {NavLink} from "react-router-dom";
import styles from "../../../Styles/FooterStyles/ItemCatalog.module.scss";
/** @format */

function ItemCatalog() {
	return (
		<ul className={styles.item}>
			<li className={styles.title}>Каталог</li>
			{footerData.slice(1, 7).map((e) => {
				return (
					<li key={e.id} className={styles.list}>
						<NavLink to={e.path}>{e.names}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}

export default ItemCatalog;
