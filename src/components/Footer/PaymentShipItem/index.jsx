/** @format */

import {NavLink} from "react-router-dom";
import {footerData} from "../../../Data/data";
import styles from "../../../Styles/FooterStyles/PaymentShipItem.module.scss";
/** @format */

function PaymentShipItem() {
	return (
		<ul className={styles.item}>
			{footerData.slice(12, 14).map((e) => {
				return (
					<li className={styles.list} key={e.id}>
						<NavLink to={e.path}>{e.names}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}

export default PaymentShipItem;
