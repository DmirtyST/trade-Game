/** @format */
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {headerData} from "../../../Data/data";
import styles from "../../../Styles/MobileStyles/AsideMenuMobile.module.scss";
import DropMenu from "../DropMenu";

function AsideMenu({active, toggleBurger}) {
	const [activeList, setActiveList] = useState(false);
	const handleShowMenu = () => {
		setActiveList(!activeList);
	};
	return (
		<div className={active === false ? styles.AsideMenu : styles.AsideMenu + " " + styles.AsideMenuActive}>
			<nav className={styles.AsideMenu_nav}>
				<ul className={styles.AsideMenu_list}>
					{headerData.navigatioHeader.map((e) => {
						if (e.names === "Warhammer") {
							return (
								<>
									<li key={e.id} onClick={handleShowMenu} className={activeList === false ? styles.AsideMenu_list_list : styles.AsideMenu_list_list + " " + styles.AsideMenu_list_listActive}>
										Warhammer
										<i>
											<FontAwesomeIcon icon={faChevronRight} />
										</i>
									</li>
									<DropMenu toggleBurger={toggleBurger} activeList={activeList} styles={styles} active={active} />
								</>
							);
						}
						return (
							<li onClick={toggleBurger} className={styles.AsideMenu_list_list} key={e.id}>
								{e.names}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export default AsideMenu;
