/** @format */

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ loaded: false });

	function handleResponse(response) {
		setWeatherInfo({
			loaded: true,
			date: new Date(response.data.dt * 1000),
			city: response.data.name,
			country: response.data.sys.country,
			temperature: Math.round(response.data.main.temp),
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed * 3.6),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
		});
	}

	if (weatherInfo.loaded) {
		return (
			<div className="Weather">
				<div className="Wrapper mt-5">
					<div>
						<form className="text-center text-capitalize mt-4">
							<div className="row">
								<div className="col-7">
									<input
										type="search"
										placeholder="Type a city"
										autoFocus="on"
										className="form-control ms-3"
									/>
								</div>
								<div className="col-5">
									<input
										className="btn btn-danger"
										type="submit"
										value="Search"
									/>
								</div>
							</div>
						</form>
					</div>
					<WeatherInfo info={weatherInfo} />
				</div>
			</div>
		);
	} else {
		const apiKey = "c0e61b09ce3783df76abc904136f7ab8";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}
	return (
		<div className="Loader">
			<Loader
				type="Hearts"
				color="red"
				height={200}
				width={200}
				timeout={4000}
			/>
		</div>
	);
}
