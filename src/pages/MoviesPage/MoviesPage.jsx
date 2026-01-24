import { useState, useEffect } from "react";

import { tmdbApi } from "../../apis/tmdbApi.js";

import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

import { MovieCard } from "../../components/MovieCard/MovieCard";

export const MoviesPage = function () {
	const [movies, setMovies] = useState([]);

	const getData = async function () {
		try {
			const res = await tmdbApi.get("/trending/movie/week");
			setMovies(res.data.results);
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Header />
			<Container>
				<h1>SEARCH MOVIES</h1>
				<input type="text" />
				<ul>
					{movies.map((movie, id) => (
						<MovieCard key={id} title={movie.title} overview={movie.overview} poster={movie.poster_path} />
					))}
				</ul>
			</Container>
		</>
	);
};
