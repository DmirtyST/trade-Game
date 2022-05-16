/** @format */

import {NavLink} from "react-router-dom";
import {homeData} from "../../../Data/data";
import SectionTitle from "../../SectionTitle";
import styles from "../../../Styles/Home/Catalog.module.scss";
import ContainerImage from "../../ContainerImg";
function Catalog() {
	return (
		<div className={styles.catalog}>
			<SectionTitle>Каталог</SectionTitle>
			<div className={styles.row}>
				<div className={styles.column}>
					{homeData.catalogData.firstItem.map((e) => {
						return (
							<div key={e.id} className={styles.item}>
								<NavLink to={e.path}>
									<ContainerImage path={e.imagePath} />
									<div className={styles.title}>{e.title}</div>
								</NavLink>
							</div>
						);
					})}
				</div>
				<div className={styles.column}>
					{homeData.catalogData.lastItems.map((e) => {
						return (
							<div key={e.id} className={styles.item}>
								<NavLink to={e.path}>
									<ContainerImage path={e.imagePath} />
									<div className={styles.title}>{e.title}</div>
								</NavLink>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Catalog;
