/** @format */

import {NavLink} from "react-router-dom";
import {headerData} from "../../../Data/data";

function DropMenu({styles, activeList, handleShowMenu, toggleBurger}) {
	return (
		<nav className={activeList === false ? styles.DropMenu : styles.DropMenu + " " + styles.DropMenuActive}>
			<ul className={styles.DropMenu_list}>
				{headerData.warhammerLinkData.slice(0.5).map((e) => {
					return (
						<li key={e.id}>
							<NavLink onClick={toggleBurger} to={e.path}>
								{e.names}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default DropMenu;
