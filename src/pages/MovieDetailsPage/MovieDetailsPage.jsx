import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tmdbApi } from "../../apis/tmdbApi";

import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";

export const MovieDetailsPage = function () {
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
			<section>
				<Container>
					<h1>{movieData.title}</h1>
					<img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={`poster for ${movieData.title}`} />
					<p>{movieData.overview}</p>
					<p>{JSON.stringify(movieData)}</p>
				</Container>
			</section>
		</>
	);
};
