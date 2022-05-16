/** @format */

import Container from "../Container/Index";
import About from "./About";
import AdditionalInformation from "./AdditionalInformation";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
import Events from "./Events";
import styles from "./Home.module.scss";
import ProductList from "./ProductList";
import SpecialOffer from "./SpecialOffer";
import SwipeProduct from "./SwiperProducts";

function Home() {
	return (
		<div className={styles.home}>
			<SwipeProduct styles={styles} />
			<Container>
				<Catalog styles={styles} />
				<ProductList styles={styles} />
				<SpecialOffer styles={styles}></SpecialOffer>
				<Events styles={styles} />
				<AdditionalInformation styles={styles} />
				<About styles={styles} />
				<Contacts styles={styles} />
			</Container>
		</div>
	);
}

export default Home;
