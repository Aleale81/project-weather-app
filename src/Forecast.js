/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.lat, props.lon]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}
	if (loaded) {
		return (
			<div className="Forecast mt-1 mb-2">
				<div className="row">
					{forecast.map(function (dailyforecast, index) {
						if (index > 0 && index < 6)
							return (
								<div className="col" key={index}>
									<ForecastData forecast={dailyforecast} />
								</div>
							);
						return null;
					})}
				</div>
			</div>
		);
	} else {
		const apiKey = "c0e61b09ce3783df76abc904136f7ab8";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
