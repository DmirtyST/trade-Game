/** @format */

import {NavLink} from "react-router-dom";
import {headerData} from "../../../../Data/data";

/** @format */

function DropWarhammer({styles, active, handleActiveMenu}) {
	return (
		<div className={active === 2 ? styles.DropWarhammer + " " + styles.DropWarhammerActive : styles.DropWarhammer}>
			<div className={styles.DropWarhammer_title}>Warhammer 40000</div>
			<nav className={styles.DropWarhammer_nav}>
				<ul>
					{headerData.warhammerLinkData.slice(0, 3).map((e) => {
						return (
							<li key={e.id}>
								<NavLink onClick={handleActiveMenu} to={e.path}>
									{e.names}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<ul>
					{headerData.warhammerLinkData.slice(4, 7).map((e) => {
						return (
							<li key={e.id}>
								<NavLink onClick={handleActiveMenu} to={e.path}>
									{e.names}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<ul>
					{headerData.warhammerLinkData.slice(8, 10).map((e) => {
						return (
							<li key={e.id}>
								<NavLink onClick={handleActiveMenu} to={e.path}>
									{e.names}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export default DropWarhammer;
