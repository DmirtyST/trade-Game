/** @format */

import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CloseSearch({styles, resetSearch, search}) {
	return (
		<div className={styles.search_icon}>
			{search.length === 0 ? (
				<i className={styles.icon_open}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</i>
			) : (
				<i className={styles.icon_close} onClick={resetSearch}>
					<FontAwesomeIcon icon={faXmark} />{" "}
				</i>
			)}
		</div>
	);
}

export default CloseSearch;
