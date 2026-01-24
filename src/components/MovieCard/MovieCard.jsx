import styles from "./MovieCard.module.scss";

export const MovieCard = function ({ title, overview, poster, background }) {
	return (
		<>
			<li className={styles["movie-card"]}>
				<img className={styles["movie-card__poster"]} src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={`poster for ${title}`} />
				<h2 className={styles["movie-card__title"]}>{title}</h2>
				<p className={styles["movie-card__overview"]}>{overview}</p>
			</li>
		</>
	);
};
