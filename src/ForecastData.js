/** @format */

import React from "react";
import Icon from "./Icon";
import ForecastDay from "./ForecastDay";

export default function ForecastData(props) {
	return (
		<div>
			<ForecastDay day={props.forecast.dt} />
			<div>
				<Icon icon={props.forecast.weather[0].icon} size={40} />
			</div>
			<span className="temp-max">{Math.round(props.forecast.temp.max)}° </span>
			<span className="temp-min"> {Math.round(props.forecast.temp.min)}°</span>
		</div>
	);
}
