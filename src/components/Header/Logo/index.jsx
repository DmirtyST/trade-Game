/** @format */
import {headerData} from "../../../Data/data";
import {NavLink} from "react-router-dom";

function Logo({styles}) {
	return (
		<>
			{headerData.logo.map((e) => {
				return (
					<NavLink key={e.id} to={"/"}>
						<div className={styles.logo}>
							<img src={e.pathImg} alt="logo" />
						</div>
					</NavLink>
				);
			})}
		</>
	);
}

export default Logo;
