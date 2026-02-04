"use client";

import { useReducer, useMemo } from "react";
import { usePopularMovies, useGenres } from "@/hooks";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
}

interface Genre {
  id: number;
  name: string;
}

export default function Banner() {
  const [app, setApp] = useReducer(
    (state: any, updates: any) => ({ ...state, ...updates }),
    {
      page: 1,
      genre: [],
      movieData: [],
    },
  );

  const { data: popularMoviesData } = usePopularMovies({ page: app.page });
  const { data: genreData } = useGenres();

  useMemo(() => {
    if (!popularMoviesData?.results) return;

    const movies = popularMoviesData.results.slice(0, 5);
    const genres = genreData?.genres || [];

    setApp({ movieData: movies, genre: genres });
  }, [popularMoviesData, genreData]);

  const getYear = (date: string) => (date ? new Date(date).getFullYear() : "");

  const getGenreNames = (genreIds: number[]) =>
    genreIds
      .slice(0, 2)
      .map((id) => app.genre.find((g: Genre) => g.id === id)?.name)
      .filter(Boolean)
      .join(" / ");

  return (
    <Carousel
      className="border-none w-full"
      autoplay
      autoplaySpeed={8000}
      dotPosition="left"
    >
      {app.movieData.map((item: Movie) => (
        <div key={item.id}>
          <div className="relative h-[80vh] min-h-[550px] w-full">
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Single clean gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8 lg:px-16">
              <div className="max-w-2xl space-y-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-background-light/70">
                  <span className="flex items-center gap-1">
                    <Icon
                      type="star"
                      size={14}
                      className="text-background-light"
                    />
                    {item.vote_average?.toFixed(1)}
                  </span>
                  <span>•</span>
                  <span>{getYear(item.release_date)}</span>
                  <span>•</span>
                  <span>{getGenreNames(item.genre_ids)}</span>
                </div>

                {/* Title */}
                <h1 className="text-background-light text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  {item.title}
                </h1>

                {/* Overview */}
                <p className="text-background-light/80 text-base leading-relaxed line-clamp-3">
                  {item.overview}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-3">
                  <Button
                    className={cn(
                      "h-11 px-6 gap-2",
                      "bg-background text-accent",
                      "hover:bg-background-light",
                      "transition-colors",
                    )}
                  >
                    <Icon type="play" size={18} />
                    Watch Trailer
                  </Button>
                  <Button
                    className={cn(
                      "h-11 px-6 gap-2",
                      "bg-transparent text-background-light",
                      "border border-background-light/30",
                      "hover:bg-background-light/10",
                      "transition-colors",
                    )}
                  >
                    <Icon type="info" size={18} />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
