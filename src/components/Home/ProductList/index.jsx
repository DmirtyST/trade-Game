/** @format */

import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import SliderShowProducts from "../../SliderShowProducts";
import styles from "../../../Styles/Home/ProductList.module.scss";
function ProductList() {
	return (
		<div className={styles.productList}>
			<SectionTitle>Успей купить</SectionTitle>
			<SliderShowProducts styles={styles} items={homeData.productListData} />
		</div>
	);
}

export default ProductList;
