/** @format */

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {totalPrice} from "../../Store/Slice/addProducts";
import styles from "../../Styles/HeaderStyles/BasketPage.module.scss";
import Container from "../Container/Index";
import SectionTitle from "../SectionTitle";
import BasketIncrease from "./BasketIncrease";
import BasketPagePrice from "./BasketPagePrice";
import ButtonRemove from "./ButtonRemoveItem";

function BasketPage() {
	const items = useSelector((state) => state.cart.addItem);
	const {cartTotalQuantity} = useSelector((state) => state.cart);
	const {cartTotalAmount} = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(totalPrice());
	}, [items, dispatch]);
	return (
		<div className={styles.BasketPage}>
			<Container>
				<>
					{items.length > 0 ? <SectionTitle>Корзина</SectionTitle> : null}

					<div className={styles.row}>
						{items.length > 0 ? (
							<>
								{items.map((game) => {
									return (
										<div className={styles.item}>
											<div className={styles.box}>
												<div className={styles.container_img}>
													<div className={styles.image}>
														<img src={game.imagePath} alt="" />
													</div>
												</div>
												<div className={styles.names}>{game.title}</div>
											</div>
											<div className={styles.box}>
												<div className={styles.price}>{game.price * game.cartQuantity}грн</div>
												<BasketIncrease styles={styles} game={game} />
												<ButtonRemove game={game} styles={styles} />
											</div>
										</div>
									);
								})}

								{items.map((game) => {
									return <BasketPagePrice cartTotalAmount={cartTotalAmount} cartTotalQuantity={cartTotalQuantity} game={game} styles={styles} />;
								})}
							</>
						) : (
							<div className={styles.BasketPageNull}>Корзина пустая</div>
						)}
					</div>
				</>
			</Container>
		</div>
	);
}

export default BasketPage;
