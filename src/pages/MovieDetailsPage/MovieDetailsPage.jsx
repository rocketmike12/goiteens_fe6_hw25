import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../apis/tmdbApi";

import { Link } from "react-router-dom";

import { Cast } from "./Cast/Cast.jsx";
import { Reviews } from "./Reviews/Reviews.jsx";

import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

import styles from "./MovieDetailsPage.module.scss";

export const MovieDetailsPage = function ({ cast, reviews }) {
	const params = useParams();

	const [movieData, setMovieData] = useState({});

	const getData = async function () {
		try {
			const res = await tmdbApi.get(`/movie/${params.movieId}`);
			setMovieData(res.data);
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
			<section className={styles["movie-details"]}>
				<Container>
					<img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={`poster for ${movieData.title}`} className={styles["movie-details__img"]} />

					<div className={styles["movie-details__content"]}>
						<h1 className={styles["movie-details__content__title"]}>{movieData.title}</h1>
						<p className={styles["movie-details__content__overview"]}>{movieData.overview}</p>
						<div className={styles["movie-details__content__link-wrap"]}>
							<Link to={`/movies/${params.movieId}/cast`} className={styles["movie-details__content__link"]}>
								Cast
							</Link>
							<Link to={`/movies/${params.movieId}/reviews`} className={styles["movie-details__content__link"]}>
								Reviews
							</Link>
						</div>
					</div>
				</Container>
			</section>

			{cast && <Cast />}

			{reviews && <Reviews />}
		</>
	);
};
