import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../../apis/tmdbApi";

import { Container } from "../../../components/Container/Container";

import styles from "./Reviews.module.scss";

export const Reviews = function () {
	const params = useParams();

	const [reviews, setReviews] = useState([]);

	const getData = async function () {
		try {
			const res = await tmdbApi.get(`/movie/${params.movieId}/reviews`);
			setReviews(res.data.results);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<section className={styles["reviews"]}>
				<Container>
					<ul className={styles["reviews__list"]}>
						{reviews.map((el) => (
							<li className={styles["reviews__list__item"]}>
								<p className={styles["reviews__list__item__author"]}>{el.author}</p>
								<p className={styles["reviews__list__item__content"]}>{el.content}</p>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
