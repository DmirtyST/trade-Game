/** @format */

import Basket from "../Basket";
import Profile from "../Profile";
function ProfileandBasket({styles}) {
	return (
		<div className={styles.Box}>
			<Profile styles={styles} />
			<Basket styles={styles} />
		</div>
	);
}

export default ProfileandBasket;
