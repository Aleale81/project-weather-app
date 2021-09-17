/** @format */

import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
	const [forecast, setForecast] = useState({ loaded: false });

	function handleResponse(response) {
		console.log(response.data);
		setForecast({
			loaded: true,
			day: response.data.daily[1].dt,
			icon: response.data.daily[1].weather[0].icon,
			max: Math.round(response.data.daily[0].temp.max),
			min: Math.round(response.data.daily[0].temp.min),
		});
	}
	if (forecast.loaded) {
		return (
			<div className="Forecast mt-3 mb-2">
				<div className="row">
					<div className="col">
						<ForecastDay day={forecast.day} />
						<div>
							<Icon icon={forecast.icon} size={40} />
						</div>
						<span className="temp-max">{forecast.max}° </span>
						<span className="temp-min"> {forecast.min}°</span>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "0a2a0f6811123f6c75b17bfd2d28394a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
