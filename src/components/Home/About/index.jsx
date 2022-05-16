/** @format */

import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import styles from "../../../Styles/Home/About.module.scss";
function About() {
	return (
		<div className={styles.about}>
			<div className={styles.about_row}>
				<div className={styles.about_item}>
					<SectionTitle>Об игровом центре «GoldFish» </SectionTitle>
					{homeData.aboutData.colFirst.map((e) => {
						return (
							<p key={e.id} className={styles.about_itemText}>
								{e.text}
							</p>
						);
					})}
				</div>
				<div className={styles.about_item}>
					{homeData.aboutData.colLast.map((e) => {
						return <img key={e.id} src={e.pathImg} alt="" />;
					})}
				</div>
			</div>
		</div>
	);
}

export default About;
