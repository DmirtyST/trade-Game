/** @format */

import styles from "./SectionTitle.module.scss";
function SectionTitle({children}) {
	return <div className={styles.sectionTitle}>{children}</div>;
}

export default SectionTitle;
