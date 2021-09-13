/** @format */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Amsterdam" />
				<footer>
					{" "}
					<a
						href="https://github.com/Aleale81/project-weather-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open-sourse code
					</a>{" "}
					, by Alessandra Scarpellini
				</footer>
			</div>
		</div>
	);
}
