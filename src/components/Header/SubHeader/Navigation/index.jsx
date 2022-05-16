/** @format */

import {useState} from "react";
import {NavLink} from "react-router-dom";
import {headerData} from "../../../../Data/data";

/** @format */

function Nav({styles, menu}) {
	return (
		<nav className={styles.subHeader_nav}>
			<ul className={styles.list}>
				{headerData.navigatioHeader.map((e) => {
					return (
						<li key={e.id}>
							<NavLink to={e.path}>{e.names}</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;
