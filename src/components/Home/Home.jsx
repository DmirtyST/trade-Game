/** @format */

import ContainerBig from "../Container/ContainerBig/Index";
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
			<ContainerBig>
				<Container>
					<Catalog styles={styles} />
				</Container>
				<ProductList styles={styles} />
				<SpecialOffer styles={styles} />
				<Container>
					<Events styles={styles} />
					<AdditionalInformation styles={styles} />
					<About styles={styles} />
					<Contacts styles={styles} />
				</Container>
			</ContainerBig>
		</div>
	);
}

export default Home;
