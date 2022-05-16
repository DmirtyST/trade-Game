/** @format */

import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import SliderShowProducts from "../../SliderShowProducts";
import styles from "../../../Styles/Home/SpecialOffer.module.scss";
function SpecialOffer() {
	return (
		<div className={styles.specialOffer}>
			<SectionTitle>Специальные предложения</SectionTitle>
			<SliderShowProducts items={homeData.specialOffer} />
		</div>
	);
}

export default SpecialOffer;
