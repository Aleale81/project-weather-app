/** @format */

import React from "react";

export default function ForecastDay(props) {
	let weekday = new Date(props.day * 1000).getDay();

	function showDay() {
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[weekday];
	}

	return <h4 className="day">{showDay()}</h4>;
}
