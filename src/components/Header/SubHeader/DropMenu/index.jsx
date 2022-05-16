/** @format */

import {useState} from "react";
import Container from "../../../Container/Index";
import {headerData} from "../../../../Data/data";
import DropWarhammer from "../DropWarhammer";

function DropMenu({styles, handleActiveMenu, menu}) {
	const [active, setActive] = useState(2);
	const handleShowMenu = (index) => {
		setActive(index);
	};
	return (
		<div className={menu === false ? styles.dropMenu : styles.dropMenu + " " + styles.dropMenuActive}>
			<Container>
				<div className={styles.dropMenu_row}>
					<nav className={styles.dropMenu_nav}>
						<ul className={styles.dropMenu_navList}>
							<li className={styles.dropMenu_burger} onClick={handleActiveMenu}>
								<span>
									<img src="./Image/close.svg" alt="" />
								</span>{" "}
								Все категории
							</li>

							{headerData.dropMenuNav.map((e) => {
								return (
									<li key={e.id} onClick={() => handleShowMenu(e.index)} className={active === e.index ? styles.list + " " + styles.listActive : styles.list}>
										{e.names}
									</li>
								);
							})}
						</ul>
					</nav>
					<div className={styles.dropMenu_setLink}>
						<DropWarhammer handleActiveMenu={handleActiveMenu} active={active} styles={styles} />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default DropMenu;
