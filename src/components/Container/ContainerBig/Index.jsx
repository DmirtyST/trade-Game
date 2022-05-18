/** @format */
import styles from "./Container.module.scss";
function ContainerBig({children}) {
	return <div className={styles.container}>{children}</div>;
}

export default ContainerBig;
