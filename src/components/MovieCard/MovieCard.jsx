import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

export const MovieCard = function ({ title, overview, poster, movieId }) {
	const trimText = (text, lim) => text.slice(0, lim - 3).split(" ").slice(0, -1).reduce((acc, val) => acc + " " + val, "") + "...";

	return (
		<>
			<li className={styles["movie-card"]}>
				<Link to={`/movies/${movieId}`} className={styles["movie-card__link"]}>
					<img className={styles["movie-card__poster"]} src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`poster for ${title}`} />
					<h3 className={styles["movie-card__title"]}>{title}</h3>
					<p className={styles["movie-card__overview"]}>{trimText(overview, 70)}</p>
				</Link>
			</li>
		</>
	);
};
