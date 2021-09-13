/** @format */

import React from "react";
import Timestamp from "react-timestamp";

export default function WeatherInfo(props) {
	return (
		<div className="Weather">
			<p>
				Updated{" "}
				<Timestamp
					date={props.info.date}
					options={{ includeDay: true, twentyFourHour: true }}
				/>
			</p>
			<h1>
				{props.info.city}, {props.info.country}
			</h1>
			<div className="row">
				<div className="col-6 mt-3">
					<ul className="ms-5">
						<li className="text-capitalize">{props.info.description}</li>
						<li>Wind: {props.info.wind} k/h</li>
						<li>Humidity: {props.info.humidity}%</li>
					</ul>
				</div>
				<div className="col-6">
					<h2>
						<img
							src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`}
							alt={props.info.description}
						/>
						{props.info.temperature}°
						<span className="units">
							{" "}
							<a href=" " rel="noopener noreferrer" className="active">
								C
							</a>
							|
							<a href=" " rel="noopener noreferrer">
								F
							</a>
						</span>
					</h2>
				</div>
			</div>
		</div>
	);
}