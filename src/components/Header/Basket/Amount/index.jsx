/** @format */

function AmountBasket({amount = 0, styles}) {
	return <>{amount > 0 ? <div className={styles.AmountBasket}>{amount}</div> : null}</>;
}

export default AmountBasket;
