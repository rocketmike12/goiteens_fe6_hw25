import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { tmdbApi } from "../../apis/tmdbApi.js";

import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

import { MovieCard } from "../../components/MovieCard/MovieCard";

export const MoviesPage = function () {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const getData = async function () {
		try {
			const res = await tmdbApi.get("/search/movie", { params: { query: query } });
			setMovies(res.data.results);
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		setQuery(searchParams.get("query"));
	}, []);

	useEffect(() => {
		getData();
	}, [query]);

	return (
		<>
			<Header />
			<Container>
				<h1>SEARCH MOVIES</h1>
				<form>
					<input type="text" name="query" placeholder="search movies" />
					<button type="submit">search</button>
				</form>
				<ul>
					{movies.map((movie, id) => (
						<MovieCard key={id} title={movie.title} overview={movie.overview} poster={movie.poster_path} />
					))}
				</ul>
			</Container>
		</>
	);
};
