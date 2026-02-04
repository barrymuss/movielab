"use client";

import { useMemo, useReducer } from "react";
import { useTopRatedMovies, useGenres } from "@/hooks";
import { MediaSection } from "@/components/ui/media-section";

export default function TopRatedMovie() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    { page: 1, movieData: [], genres: [] }
  );

  const { data: topRatedData } = useTopRatedMovies({ page: app.page });
  const { data: genreData } = useGenres();

  useMemo(() => {
    if (!topRatedData?.results) return;
    const movies = topRatedData.results.slice(0, 10);
    const genres = genreData?.genres || [];
    setApp({ movieData: movies, genres });
  }, [topRatedData, genreData]);

  if (app.movieData.length === 0) return null;

  return (
    <MediaSection
      title="Top Rated"
      data={app.movieData}
      genres={app.genres}
    />
  );
}
