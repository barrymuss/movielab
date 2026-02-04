"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

interface MediaItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path?: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
}

interface Genre {
  id: number;
  name: string;
}

interface MediaSectionProps {
  title: string;
  data: MediaItem[];
  genres?: Genre[];
  showRating?: boolean;
  showGenre?: boolean;
  type?: "movie" | "tv";
}

export function MediaSection({
  title,
  data,
  genres = [],
  showRating = true,
  showGenre = true,
  type = "movie",
}: MediaSectionProps) {
  const getGenreName = (genreIds?: number[]) => {
    if (!genreIds || genreIds.length === 0) return "";
    const genre = genres.find((g) => g.id === genreIds[0]);
    return genre?.name || "";
  };

  const getTitle = (item: MediaItem) => item.title || item.name || "";

  const getHref = (item: MediaItem) => {
    return type === "movie" ? `/movies/${item.id}` : `/tv/${item.id}`;
  };

  return (
    <section className="py-8 px-6 lg:px-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-foreground text-xl font-semibold">{title}</h2>
        <button className="text-sm text-foreground/50 hover:text-foreground transition-colors">
          See all
        </button>
      </div>

      {/* Media List - Horizontal Scroll */}
      <div
        className={cn(
          "flex gap-4 overflow-x-auto pb-2",
          "scrollbar-none [&::-webkit-scrollbar]:hidden"
        )}
      >
        {data.map((item) => (
          <Link
            key={item.id}
            href={getHref(item)}
            className="flex-shrink-0 w-[160px] group"
          >
            {/* Poster */}
            <div className="relative overflow-hidden rounded-lg mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={getTitle(item)}
                className={cn(
                  "w-full h-[240px] object-cover",
                  "transition-transform duration-300",
                  "group-hover:scale-105"
                )}
              />
              {/* Overlay on hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-accent/50",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300",
                  "flex items-center justify-center"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Icon type="play" size={20} className="text-accent ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-0.5">
              <h3 className="text-foreground font-medium text-sm line-clamp-1">
                {getTitle(item)}
              </h3>
              <div className="flex items-center gap-2 text-xs text-foreground/50">
                {showRating && (
                  <>
                    <span className="flex items-center gap-1">
                      <Icon type="star" size={10} />
                      {item.vote_average?.toFixed(1)}
                    </span>
                    {showGenre && <span>•</span>}
                  </>
                )}
                {showGenre && (
                  <span className="truncate">{getGenreName(item.genre_ids)}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
