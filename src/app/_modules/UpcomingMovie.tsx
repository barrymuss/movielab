"use client";

import { useMemo, useReducer } from "react";
import { useUpcomingMovies, useGenres } from "@/hooks";
import { MediaSection } from "@/components/ui/media-section";

export default function UpcomingMovie() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    { page: 1, movieData: [], genres: [] }
  );

  const { data: upcomingData } = useUpcomingMovies({ page: app.page });
  const { data: genreData } = useGenres();

  useMemo(() => {
    if (!upcomingData?.results) return;
    const movies = upcomingData.results.slice(0, 10);
    const genres = genreData?.genres || [];
    setApp({ movieData: movies, genres });
  }, [upcomingData, genreData]);

  if (app.movieData.length === 0) return null;

  return (
    <MediaSection
      title="Coming Soon"
      data={app.movieData}
      genres={app.genres}
    />
  );
}
