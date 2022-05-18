/** @format */
import styles from "../../../Styles/MobileStyles/ItemEvents.module.scss";
import ContainerImage from "../../ContainerImg";

function ItemEvents(props) {
	const {title, titleData, sub, imagePath} = props;
	return (
		<div className={styles.item}>
			<ContainerImage path={imagePath} />
			<div className={styles.events_box}>
				<div className={styles.events_titleBox}>
					<div className={styles.titleBox_title}>{title}</div>
					<div className={styles.titleBox_subTitle}>{titleData}</div>
				</div>

				<p className={styles.events_description}>{sub}</p>
			</div>
		</div>
	);
}

export default ItemEvents;
