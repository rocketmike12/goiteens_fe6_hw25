import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../../apis/tmdbApi";

import { Container } from "../../../components/Container/Container";

import styles from "./Cast.module.scss";

export const Cast = function () {
	const params = useParams();

	const [cast, setCast] = useState([]);

	const getData = async function () {
		try {
			const res = await tmdbApi.get(`/movie/${params.movieId}/credits`);
			setCast(res.data.cast);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<section className={styles["cast"]}>
				<Container>
					<ul className={styles["cast__list"]}>
						{cast.map((el) => (
							<li className={styles["cast__list__item"]}>
								<img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} alt="" className={styles["cast__list__img"]} />
								<p className={styles["cast__list__text"]}>
									<span className={styles["cast__list__text__actor"]}>{el.name}</span> - <span className={styles["cast__list__text__character"]}>{el.character}</span>
								</p>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
