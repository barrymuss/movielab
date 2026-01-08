"use client";

import { useMemo, useReducer } from "react";
import { usePopularMovies } from "@/hooks";
import { PosterCard } from "@/components/card/posterCard";

export default function PopularMovie() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    {
      page: 1,
      movieData: [],
    }
  );

  const { data: popularMoviesData } = usePopularMovies({ page: app.page });

  useMemo(() => {
    if (!popularMoviesData?.results) return;

    const movies = popularMoviesData.results.slice(0, 7);
    setApp({ movieData: movies });
  }, [popularMoviesData]);

  return <PosterCard data={app.movieData} />;
}
