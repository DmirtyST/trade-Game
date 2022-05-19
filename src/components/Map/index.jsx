/** @format */

import {useJsApiLoader} from "@react-google-maps/api";
import {MapStyles} from "../MapStyles";
const center = {
	lat: 49.99976694141904,
	lng: 36.35344301171797,
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
