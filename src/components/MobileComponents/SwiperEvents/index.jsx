/** @format */
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ItemEvents from "../ItemEvents";
import styles from "../../../Styles/MobileStyles/EventsSwiper.module.scss";
function SwiperEvents(props, {children}) {
	const {items = []} = props;
	return (
		<Swiper
			className={styles.SwiperEvents}
			autoplay={{
				delay: 500,
			}}
			spaceBetween={6}
			slidesPerView={1.3}
			loop={true}
			onSlideChange={() => console.log("slide change")}
		>
			{items.map((e) => {
				return (
					<SwiperSlide key={e.id}>
						<ItemEvents {...e} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default SwiperEvents;
