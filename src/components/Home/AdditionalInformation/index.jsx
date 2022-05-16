/** @format */

import {NavLink} from "react-router-dom";
import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import styles from "../../../Styles/Home/AdditionalInformation.module.scss";
function AdditionalInformation() {
	return (
		<div className={styles.information}>
			<SectionTitle>Больше интересной информации</SectionTitle>
			<div className={styles.information_row}>
				{homeData.informationData.map((e) => {
					return (
						<div key={e.id} className={styles.information_item}>
							<img src={e.imagePath} alt="infoImage" />
							<div className={styles.information_titleBox}>
								<div className={styles.titleBox_title}>{e.title}</div>
								<div className={styles.titleBox_sub}>{e.sub}</div>
							</div>
						</div>
					);
				})}
			</div>
			<button className={styles.information_button}>
				<NavLink to={"/"}>Узнать больше</NavLink>
			</button>
		</div>
	);
}

export default AdditionalInformation;
