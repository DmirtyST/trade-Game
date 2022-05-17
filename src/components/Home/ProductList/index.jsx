/** @format */

import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import SliderShowProducts from "../../SliderShowProducts";
import styles from "../../../Styles/Home/ProductList.module.scss";
import Container from "../../Container/Index";
function ProductList() {
	return (
		<div className={styles.productList}>
			<Container>
				<SectionTitle>Успей купить</SectionTitle>
			</Container>
			<SliderShowProducts styles={styles} items={homeData.productListData} />
		</div>
	);
}

export default ProductList;
