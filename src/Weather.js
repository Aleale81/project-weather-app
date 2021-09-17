/** @format */

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
	const [city, setCity] = useState(props.defaultCity);

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
			lon: response.data.coord.lon,
			lat: response.data.coord.lat,
		});
	}

	function search() {
		const apiKey = "0a2a0f6811123f6c75b17bfd2d28394a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	if (weatherInfo.loaded) {
		return (
			<div className="Weather">
				<div className="Wrapper mt-5">
					<div>
						<form
							className="text-center text-capitalize mt-4"
							onSubmit={handleSubmit}
						>
							<div className="row">
								<div className="col-7">
									<input
										type="search"
										placeholder="Type a city"
										autoFocus="on"
										className="form-control ms-3"
										onChange={updateCity}
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
					<hr />
					<Forecast lon={weatherInfo.lon} lat={weatherInfo.lat} />
				</div>
			</div>
		);
	} else {
		search();
	}

	return (
		<Loader type="Hearts" color="red" height={200} width={200} timeout={4000} />
	);
}
