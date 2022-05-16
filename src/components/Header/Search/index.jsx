/** @format */
import {useState} from "react";
import {searchData} from "../../../Data/data";
import styles from "../../../Styles/HeaderStyles/Search.module.scss";

import CloseSearch from "./CloseSearch";
function Search() {
	const [search, setSearch] = useState([]);
	const [entered, setEntered] = useState("");
	const handleSearch = (e) => {
		const valueSearch = e.target.value;
		setEntered(valueSearch);
		const filtredItems = searchData.filter((game) => {
			return game.title.toLowerCase().includes(valueSearch.toLowerCase());
		});

		if (valueSearch === "") {
			return setSearch([]);
		} else {
			return setSearch(filtredItems);
		}
	};
	const resetSearch = () => {
		setSearch([]);
		setEntered("");
	};
	return (
		<div className={styles.search}>
			<div className={styles.search_controller}>
				<input value={entered} onChange={handleSearch} placeholder="Найти игру" className={styles.search_input} type="text" />
				<CloseSearch search={search} resetSearch={resetSearch} styles={styles} />
			</div>

			{search != 0 ? (
				<div className={styles.search__result}>
					{search.slice(0, 1).map((game) => {
						return (
							<li className={styles.result_item}>
								<div> {game.title}</div>
								<div className={styles.search_img}>
									<img src={game.imagePath} alt="" />
								</div>
							</li>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default Search;
