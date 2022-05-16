/** @format */

import {NavLink} from "react-router-dom";
import {footerData} from "../../../Data/data";
import ContainerImage from "../../ContainerImg";
import styles from "../../../Styles/MobileStyles/FooterItemMobile.module.scss";
function FooterMobileItem() {
	return (
		<div className={styles.FooterMobileItem}>
			<div className={styles.FooterMobileItem_img}>
				<ContainerImage path={"/Image/logo.svg"} />
			</div>
			<ul className={styles.FooterMobileItem_list}>
				{footerData.slice(17, 20).map((e) => {
					return (
						<li>
							<NavLink to={e.path}>
								<img src={e.pathImg} alt="icons" />
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FooterMobileItem;
