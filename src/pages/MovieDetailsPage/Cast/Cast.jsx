import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../../apis/tmdbApi";

import { Container } from "../../../components/Container/Container";

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
			<section>
				<Container>
					<ul>
						{cast.map((el) => (
							<li>
								<img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} alt="" />
								<p>
									{el.name} - {el.character}
								</p>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</>
	);
};
