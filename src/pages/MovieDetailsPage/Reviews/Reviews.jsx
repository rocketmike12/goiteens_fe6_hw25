import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../../apis/tmdbApi";

import { Container } from "../../../components/Container/Container";

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
			<section>
				<Container>
					<ul>
						{reviews.map((el) => (
							<li>
								<p>{el.author}</p>
								<p>{el.content}</p>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
