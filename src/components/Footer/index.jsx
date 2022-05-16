/** @format */

import styles from "../../Styles/FooterStyles/Footer.module.scss";
import ItemLogo from "./ItemLogo";
import ItemCatalog from "./ItemCatalog";
import GeneralInfoItem from "./GeneralInfoItem";
import PaymentShipItem from "./PaymentShipItem";
import ContactsItem from "./ContactsItem";
import Container from "../Container/Index";
import Accordion from "../Accordion";
import {footerData} from "../../Data/data";
import FooterMobileItem from "../MobileComponents/FooterLogoMobile";

function Footer() {
	return (
		<div className={styles.footer}>
			<Container>
				<div className={styles.footer_row}>
					<Accordion
						title={"Каталог"}
						body={footerData.slice(2, 7).map((e) => {
							return <li key={e.id}>{e.names}</li>;
						})}
					/>
					<Accordion
						title={"О нас"}
						body={footerData.slice(7, 12).map((e) => {
							return <li key={e.id}>{e.names}</li>;
						})}
					/>
					<Accordion
						title={"Оплата"}
						body={footerData.slice(12, 14).map((e) => {
							return <li key={e.id}>{e.names}</li>;
						})}
					/>
					<Accordion
						title={"Контакты"}
						body={footerData.slice(15, 17).map((e) => {
							return <li key={e.id}>{e.names}</li>;
						})}
					/>
					<FooterMobileItem />
					<div className={styles.footer_item}>
						<ItemLogo />
					</div>
					<div className={styles.footer_item}>
						<ItemCatalog />
					</div>

					<div className={styles.footer_item}>
						<GeneralInfoItem />
					</div>
					<div className={styles.footer_item}>
						<PaymentShipItem />
					</div>

					<div className={styles.footer_item}>
						<ContactsItem />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Footer;
