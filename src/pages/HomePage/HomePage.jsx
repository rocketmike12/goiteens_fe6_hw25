import { useState, useEffect } from "react";

import { tmdbApi } from "../../apis/tmdbApi.js";

import { Container } from "../../components/Container/Container.jsx";
import { Header } from "../../components/Header/Header.jsx";

import { MovieCard } from "../../components/MovieCard/MovieCard.jsx";

import styles from "./HomePage.module.scss";

export const HomePage = function () {
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
			<section className={styles["home"]}>
				<Container>
					<h1 className={styles["home__title"]}>TRENDING MOVIES</h1>
					<ul className={styles["home__list"]}>
						{movies.map((movie) => (
							<MovieCard key={movie.id} title={movie.title} overview={movie.overview} poster={movie.poster_path} movieId={movie.id} />
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
