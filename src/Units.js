/** @format */

import React, { useState } from "react";

export default function Units(props) {
	const [unit, setUnit] = useState("metric");
	let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);

	function showFah(event) {
		event.preventDefault();
		setUnit("imperial");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("metric");
	}

	if (unit === "metric") {
		return (
			<h2>
				<span>{props.temperature}°C</span>
				<span className="units">
					|
					<a href="/" rel="noopener noreferrer" onClick={showFah}>
						°F
					</a>
				</span>
			</h2>
		);
	} else {
		return (
			<h2>
				<span>{fahrenheit}°F</span>
				<span className="units">
					|
					<a href="/" rel="noopener noreferrer" onClick={showCelsius}>
						°C
					</a>
				</span>
			</h2>
		);
	}
}
