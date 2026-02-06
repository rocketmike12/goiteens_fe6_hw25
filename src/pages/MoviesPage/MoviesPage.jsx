import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { tmdbApi } from "../../apis/tmdbApi.js";

import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

import { MovieCard } from "../../components/MovieCard/MovieCard";

import { IoSearch } from "react-icons/io5";

import styles from "./MoviesPage.module.scss";

export const MoviesPage = function () {
	const [movies, setMovies] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const getData = async function () {
		try {
			const res = await tmdbApi.get("/search/movie", { params: { query: searchParams.get("query") } });
			setMovies(res.data.results.filter((el) => el.poster_path));
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, [searchParams]);

	const handleSearch = function (e) {
		e.preventDefault();
		const form = e.currentTarget;
		setSearchParams({ query: form.elements.query.value });
	};

	return (
		<>
			<Header />

			<section className={styles["movies"]}>
				<Container>
					<form onSubmit={handleSearch} className={styles["movies__form"]}>
						<input type="text" name="query" placeholder="search movies" className={styles["movies__form__input"]} />
						<button type="submit" className={styles["movies__form__button"]}><IoSearch/></button>
					</form>
					<ul className={styles["movies__list"]}>
						{movies.map((movie, id) => (
							<MovieCard key={movie.id} title={movie.title} overview={movie.overview} poster={movie.poster_path} movieId={movie.id} />
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
