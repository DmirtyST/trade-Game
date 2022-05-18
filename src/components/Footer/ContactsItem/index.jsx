/** @format */

import {footerData} from "../../../Data/data";
import styles from "../../../Styles/FooterStyles/ContactsItem.module.scss";
/** @format */

function ContactsItem() {
	return (
		<>
			<ul className={styles.item}>
				{footerData.slice(14, 17).map((e) => {
					return (
						<li key={e.id} className={styles.list}>
							<a href={e.path}>{e.names}</a>
						</li>
					);
				})}
			</ul>

			<ul className={styles.icons}>
				{footerData.slice(17, 20).map((e) => {
					return (
						<li key={e.id}>
							<img src={e.pathImg} alt="" />
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ContactsItem;
