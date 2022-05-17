/** @format */
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Navigation, Pagination} from "swiper";
import styles from "./SliderBeginning.module.scss";
import {NavLink} from "react-router-dom";
import {useRef} from "react";
import "./SliderBeginning.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
SwiperCore.use([Navigation, Pagination]);
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
<FontAwesomeIcon />;
function SliderBeginning(props) {
	const {items = []} = props;
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	return (
		<div className={"swiperShowProducts"}>
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
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				pagination={{clickable: true}}
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
			<div className={"swiperSlidePrev"} ref={navigationPrevRef}>
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
			<div ref={navigationNextRef} className={"swiperSlideNext"}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</div>
		</div>
	);
}

export default SliderBeginning;
