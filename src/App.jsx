import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage.jsx";
import { MovieDetailsPage } from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import { Cast } from "./components/Cast/Cast.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";

export const App = function () {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="/movies/:movieId" element={<MovieDetailsPage />} />
				<Route
					path="/movies/:movieId/cast"
					element={
						<>
							<MovieDetailsPage />
							<Cast />
						</>
					}
				/>
				<Route
					path="/movies/:movieId/reviews"
					element={
						<>
							<MovieDetailsPage />
							<Reviews />
						</>
					}
				/>
			</Routes>
		</>
	);
};
