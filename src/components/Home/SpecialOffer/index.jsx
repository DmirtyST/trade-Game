/** @format */

import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import SliderShowProducts from "../../SliderShowProducts";
import styles from "../../../Styles/Home/SpecialOffer.module.scss";
import Container from "../../Container/Index";
function SpecialOffer() {
	return (
		<div className={styles.specialOffer}>
			<Container>
				<SectionTitle>Специальные предложения</SectionTitle>
			</Container>
			<SliderShowProducts items={homeData.specialOffer} />
		</div>
	);
}

export default SpecialOffer;
