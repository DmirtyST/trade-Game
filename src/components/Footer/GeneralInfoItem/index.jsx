/** @format */

import {footerData} from "../../../Data/data";
import {NavLink} from "react-router-dom";
import styles from "../../../Styles/FooterStyles/GeneralInfoItem.module.scss";
/** @format */

function GeneralInfoItem() {
	return (
		<ul className={styles.item}>
			{footerData.slice(7, 12).map((e) => {
				return (
					<li key={e.id} className={styles.list}>
						<NavLink to={e.path}>{e.names}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}

export default GeneralInfoItem;
