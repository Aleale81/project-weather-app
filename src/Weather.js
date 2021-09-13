/** @format */

import React from "react";

export default function Weather() {
	return (
		<div className="Weather">
			<div className="Wrapper m-5">
				<p>Monday, 13 September 12:35</p>
				<div>
					<form className="text-center text-capitalize">
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
				<h1>Amsterdam, NL</h1>
				<div className="row">
					<div className="col-5 mt-3">
						<ul>
							<li>Cloudy</li>
							<li>Wind: 5 k/h</li>
							<li>Humidity: 8%</li>
						</ul>
					</div>
					<div className="col-7">
						<h2>
							<img
								src="http://openweathermap.org/img/wn/01d@2x.png"
								alt="cloudy"
							/>
							19°
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
		</div>
	);
}
