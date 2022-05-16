/** @format */

import {useJsApiLoader} from "@react-google-maps/api";
import {MapStyles} from "../MapStyles";
const center = {
	lat: 55.74575238417996,
	lng: 37.65634133907149,
};

const libraries = ["places"];

const Map = ({styles}) => {
	const {isLoaded} = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyACP3zX17Rqibu2nzolsoytqfGCQwqnn6U",
		libraries,
	});

	return <div className={styles.Map}>{isLoaded ? <MapStyles center={center} /> : <h2>Loading</h2>} </div>;
};

export default Map;
