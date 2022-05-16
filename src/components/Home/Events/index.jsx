/** @format */

import {NavLink} from "react-router-dom";
import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import styles from "../../../Styles/Home/Events.module.scss";
import ContainerImage from "../../ContainerImg";
function Events() {
	return (
		<div className={styles.events}>
			<SectionTitle>Ближайшие мероприятия</SectionTitle>
			<div className={styles.row}>
				{homeData.eventsData.map((e) => {
					return (
						<div key={e.id} className={styles.item}>
							<ContainerImage path={e.imagePath} />
							<div className={styles.events_box}>
								<div className={styles.events_titleBox}>
									<div className={styles.titleBox_title}>{e.title}</div>
									<div className={styles.titleBox_subTitle}>{e.titleData}</div>
								</div>

								<p className={styles.events_description}>{e.sub}</p>
							</div>
						</div>
					);
				})}
			</div>
			<button className={styles.events_button}>
				<NavLink to={"/"}>Показать еще</NavLink>
			</button>
		</div>
	);
}

export default Events;
