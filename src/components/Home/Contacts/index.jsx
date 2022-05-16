/** @format */

import {homeData} from "../../../Data/data";
import Map from "../../Map";
import SectionTitle from "../../SectionTitle";
import Form from "./Form";
import styles from "../../../Styles/Home/Contacts.module.scss";
function Contacts() {
	return (
		<div className={styles.contacts}>
			<SectionTitle>Контакты</SectionTitle>
			<div className={styles.contacts_row}>
				<div className={styles.contacts_item}>
					<ul className={styles.contacts_list}>
						{homeData.contactsData.infoContacts.map((e) => {
							return (
								<li key={e.id} className={styles.contacts_listBox}>
									<i className={styles.contacts_icon}>
										<img src={e.icon} alt="" />
									</i>
									<li>
										<span>{e.title}</span>

										<a href={e.path}>{e.text}</a>
									</li>
								</li>
							);
						})}
					</ul>

					<Form styles={styles} />
				</div>
				<div className={styles.contacts_item}>
					<Map styles={styles} />
				</div>
			</div>
		</div>
	);
}

export default Contacts;
