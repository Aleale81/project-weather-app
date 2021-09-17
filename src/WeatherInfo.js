/** @format */

import React from "react";
import Timestamp from "react-timestamp";
import Icon from "./Icon";
import Units from "./Units";

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
				<div className="col-5 mt-3">
					<ul className="ms-0 ms-md-5">
						<li className="text-capitalize">{props.info.description}</li>
						<li>Wind: {props.info.wind} k/h</li>
						<li>Humidity: {props.info.humidity}%</li>
					</ul>
				</div>

				<div className="col-3 mt-3">
					<Icon icon={props.info.icon} size={82} />
				</div>
				<div className="col-4 mt-4">
					<Units temperature={props.info.temperature} />
				</div>
			</div>
		</div>
	);
}
