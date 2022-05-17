/** @format */
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./SwiperShowProducts.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import ItemPage from "../ItemPage";
SwiperCore.use([Navigation, Pagination]);
function SliderShowProducts(props) {
	const {items = []} = props;
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	return (
		<div className={"SwiperProusctSlider"}>
			<Swiper
				autoplay
				spaceBetween={15}
				slidesPerView={4}
				loop={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.params.navigation.nextEl = navigationNextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				breakpoints={{
					200: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					1250: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1350: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
				}}
			>
				{items.map((e) => {
					return (
						<SwiperSlide key={e.id}>
							<ItemPage {...e} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div ref={navigationPrevRef} className={"swiperProductsSlidePrev"}>
				<FontAwesomeIcon icon={faAngleRight} />
			</div>
			<div ref={navigationNextRef} className={"swiperProductsSlideNext"}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</div>
		</div>
	);
}

export default SliderShowProducts;
