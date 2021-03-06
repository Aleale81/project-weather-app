/** @format */

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
	const iconMap = {
		"01d": ["CLEAR_DAY", "#d38c21"],
		"01n": ["CLEAR_NIGHT", "#101d49"],
		"02d": ["PARTLY_CLOUDY_DAY", "#c47429"],
		"02n": ["PARTLY_CLOUDY_NIGHT", "#101d49"],
		"03d": ["CLOUDY", "#7a7a7c"],
		"03n": ["CLOUDY", "#7a7a7c"],
		"04d": ["CLOUDY", "#525254"],
		"04n": ["CLOUDY", "#525254"],
		"09d": ["RAIN", "#77777a"],
		"09n": ["RAIN", "#77777a"],
		"10d": ["SLEET", "#2a4d7f"],
		"10n": ["SLEET", "#2a4d7f"],
		"11d": ["RAIN", "#48484a"],
		"11n": ["RAIN", "#48484a"],
		"13d": ["SNOW", "#48484a"],
		"13n": ["SNOW", "#48484a"],
		"50d": ["FOG", "#48484a"],
		"50n": ["FOG", "#48484a"],
	};

	return (
		<ReactAnimatedWeather
			icon={iconMap[props.icon][0]}
			color={iconMap[props.icon][1]}
			size={props.size}
			animate={true}
		/>
	);
}
