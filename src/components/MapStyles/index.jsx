/** @format */
import style from "./Map.module.scss";
import {GoogleMap, Marker} from "@react-google-maps/api";
import React, {useState} from "react";

import {defaultTheme} from "./Theam";
const containerStyle = {
	width: `100%`,
	height: "630px",
};

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: true,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwheel: false,
	disableDoubleClickZoom: false,
	fullscreenControl: false,
	styles: defaultTheme,
};

export const MapStyles = ({center}) => {
	const mapRef = React.useRef(undefined);

	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current = undefined;
	}, []);

	return (
		<div className={style.contanerMap}>
			<GoogleMap options={defaultOptions} mapContainerStyle={containerStyle} center={center} zoom={16} onLoad={onLoad} onUnmount={onUnmount}>
				<Marker position={center} />
			</GoogleMap>
		</div>
	);
};
