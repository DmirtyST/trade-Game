/** @format */

import {sliderBeginningData} from "../../Data/data";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styles from "./SliderBeginning.module.scss";
import {NavLink} from "react-router-dom";

const SliderBeginningItem = (props) => {
	const {imagePath, title, sub, path} = props;
	return (
		<div className={styles.swiperSlide}>
			<img src={imagePath} alt="" />
			<div className={styles.boxTitle}>
				<div className={styles.title}>{title}</div>
				<div className={styles.sub}>{sub}</div>
			</div>
			<button className={styles.btn}>
				<NavLink to={path}>Подробнее</NavLink>
			</button>
		</div>
	);
};

function SliderBeginning(props) {
	const {items = []} = props;
	return (
		<div>
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 1.2,
						spaceBetween: 5,
					},
					1024: {
						slidesPerView: 1.6,
						spaceBetween: 5,
					},
				}}
				autoplay={{
					delay: 500,
				}}
				spaceBetween={6}
				slidesPerView={1.6}
				loop={true}
				centeredSlides={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{items.map((e) => {
					return (
						<SwiperSlide key={e.id}>
							<SliderBeginningItem {...e} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default SliderBeginning;
