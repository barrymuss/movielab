"use client";
import { useMemo, useReducer } from "react";
import { trpc } from "../_trpc/client";
import { Grid } from "@/components";
import { Card } from "antd";

export default function PopularMovie() {
  const [app, setApp] = useReducer((next: any, prev: any) => ({ ...next, ...prev }), {
    page: 1,
    movieData: [],
  });
  const getPopularMovie = trpc.movieList.popular.useQuery({ page: app.page });

  const data = useMemo(() => {
    const datas = getPopularMovie.data as any;
    let arrMovie: any[] = [];

    datas?.results.map((item: any) => {
      arrMovie.push(item);
    });

    setApp({ movieData: arrMovie.splice(0, 4) });
  }, [getPopularMovie.data]);

  return (
    <Grid>
      {app.movieData?.map((movie: any) => {
        return (
          <Grid.Col
            span={6}
            key={movie.id}>
            <Card
              bordered={false}
              hoverable
              bodyStyle={{ height: "100%" }}
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
              // style={{
              //   height: "550px",
              //   backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "top center",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <Card.Meta
                title={movie.title}
                description={movie.overview}
                style={{ height: "100%" }}
              />
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
