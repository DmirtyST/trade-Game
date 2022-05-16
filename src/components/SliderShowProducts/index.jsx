/** @format */

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ItemPage from "../ItemPage";


function SliderShowProducts(props) {
	const {items = []} = props;
	return (
		<div>
			<Swiper
				autoplay={{
					delay: 500,
				}}
				spaceBetween={15}
				slidesPerView={4}
				loop={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
		</div>
	);
}

export default SliderShowProducts;
