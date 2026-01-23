import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Movies } from "./components/Movies/Movies";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";

export const App = function () {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movies/:movieId" element={<MovieDetails />} />
				<Route path="/movies/:movieId/cast" element={<Cast />} />
				<Route path="/movies/:movieId/reviews" element={<Reviews />} />
			</Routes>
		</>
	);
};
