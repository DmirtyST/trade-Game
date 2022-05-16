/** @format */
import {useState} from "react";
import styles from "../../Styles/Accrodion/Accordion.module.scss";
function Accordion(props) {
	const [active, setActive] = useState(false);
	const handleIndex = () => {
		setActive(!active);
	};
	return (
		<div className={styles.Accordion}>
			<div onClick={handleIndex} className={active === true ? styles.Accordion_title + " " + styles.Accordion_titleActive : styles.Accordion_title}>
				{props.title}
			</div>
			<ul className={active === true ? styles.Accordion_body + " " + styles.Accordion_bodyActive : styles.Accordion_body}>
				<li>{props.body}</li>
			</ul>
		</div>
	);
}

export default Accordion;
