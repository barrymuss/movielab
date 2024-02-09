"use client";

import { trpc } from "../_trpc/client";

export default function PopularMovie() {
	const getPopularMovie = trpc.movieList.popular.useQuery({ page: 2 });

	return (
		<div>
			<div>{JSON.stringify(getPopularMovie.data)}</div>
		</div>
	);
}
