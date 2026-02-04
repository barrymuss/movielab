"use client";

import { useMemo, useReducer } from "react";
import { useNowPlayingMovies, useGenres } from "@/hooks";
import { MediaSection } from "@/components/ui/media-section";

export default function NowPlayingMovie() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    { page: 1, movieData: [], genres: [] }
  );

  const { data: nowPlayingData } = useNowPlayingMovies({ page: app.page });
  const { data: genreData } = useGenres();

  useMemo(() => {
    if (!nowPlayingData?.results) return;
    const movies = nowPlayingData.results.slice(0, 10);
    const genres = genreData?.genres || [];
    setApp({ movieData: movies, genres });
  }, [nowPlayingData, genreData]);

  if (app.movieData.length === 0) return null;

  return (
    <MediaSection
      title="Now Playing"
      data={app.movieData}
      genres={app.genres}
    />
  );
}
