"use client";
import { useMemo, useReducer } from "react";
import { usetrpc } from "@/useTRPC";
import { Grid, Card, PosterCard } from "@/components";
// import { Card } from "antd";

export default function PopularMovie() {
	const [app, setApp] = useReducer((next: any, prev: any) => ({ ...next, ...prev }), {
		page: 1,
		span: 6,
		movieData: [],
	});
	const getPopularMovie = usetrpc.movieList.popular.useQuery({ page: app.page });

	const data = useMemo(() => {
		const datas = getPopularMovie.data as any;
		let arrMovie: any[] = [];

		datas?.results.map((item: any) => {
			arrMovie.push(item);
		});

		setApp({ movieData: arrMovie.splice(0, 7) });
	}, [getPopularMovie.data]);

	const handleClick = () => {
		setApp({ span: 8 });
	};

	return (
		<Grid>
			<Grid.Col>{/* <PosterCard data={app.movieData} /> */}</Grid.Col>
			{/* {app.movieData?.map((movie: any) => {
        return (
          <Grid.Col
            span={6}
            key={movie.id}>
            <Card
              cover={
                <img
                  style={{ height: "300px", objectFit: "cover" }}
                  alt='example'
                  src={
                    movie.backdrop_path == null
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                  }
                />
              }
            />
          </Grid.Col>
        );
      })} */}
		</Grid>
	);
}
