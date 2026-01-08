"use client";

import { useReducer, useMemo } from "react";
import { usePopularMovies, useGenres } from "@/hooks";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  genre_ids: number[];
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
    }
  );

  const { data: popularMoviesData } = usePopularMovies({ page: app.page });
  const { data: genreData } = useGenres();

  useMemo(() => {
    if (!popularMoviesData?.results) return;

    const movies = popularMoviesData.results.slice(0, 5);
    const genres = genreData?.genres || [];

    setApp({ movieData: movies, genre: genres });
  }, [popularMoviesData, genreData]);

  return (
    <Carousel
      className="border-none rounded-[15px] w-full"
      autoplay
      autoplaySpeed={10000}
      dotPosition="right"
    >
      {app.movieData.map((item: Movie) => (
        <div key={item.id} className="rounded-[15px]">
          <div
            className={cn(
              "relative flex items-end rounded-[15px]",
              "h-[60vh] min-h-[400px] tablet:h-[450px] desktop:h-[500px]",
              "w-full overflow-hidden"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.title}
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(100%) brightness(90%) grayscale(10%)",
                }}
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full px-8 pb-8">
              {/* Title */}
              <h2
                className={cn(
                  "text-[wheat] mb-3",
                  "drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]"
                )}
              >
                {item.title}
              </h2>

              {/* Genre Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {item.genre_ids.map((genreId: number) => {
                  const genre = app.genre.find((g: Genre) => g.id === genreId);
                  return genre ? (
                    <Badge key={genreId} variant="genre">
                      {genre.name}
                    </Badge>
                  ) : null;
                })}
              </div>

              {/* Overview */}
              <p
                className={cn(
                  "text-white text-base",
                  "drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]",
                  "max-w-[80%] tablet:max-w-[90%] lg:max-w-[60%]",
                  "overflow-hidden line-clamp-3 mb-6"
                )}
              >
                {item.overview}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  size="lg"
                  variant="danger"
                  className="min-w-[120px]"
                >
                  <Icon type="play" size={18} className="text-white" />
                  Trailer
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="min-w-[120px] bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/40"
                >
                  <Icon type="info" size={18} />
                  More info
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
