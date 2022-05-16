/** @format */

import {headerData} from "../../../../Data/data";
import styles from "../../../../Styles/SubHeaderStyles/Social.module.scss";
/** @format */

function Social() {
	return (
		<nav className={styles.subHeader_navSocial}>
			<ul className={styles.list}>
				{headerData.socialHeader.map((e) => {
					return (
						<li key={e.id}>
							<a href={e.path}>
								<img src={e.icon} alt={e.alt} />
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Social;
