"use client";

import { use } from "react";
import { useMovieDetail } from "@/hooks";
import { Layout } from "@/components";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function MovieDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { data: movie, isLoading } = useMovieDetail(Number(id));

  if (isLoading) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center">
          <div className="text-foreground/50">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!movie) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center">
          <div className="text-foreground/50">Movie not found</div>
        </div>
      </Layout>
    );
  }

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatMoney = (amount: number) => {
    if (amount === 0) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const director = movie.credits?.crew?.find((c) => c.job === "Director");
  const trailer = movie.videos?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative min-h-[70vh]">
        {/* Backdrop */}
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-accent/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-16 px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Poster */}
            <div className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[280px] rounded-lg shadow-2xl mx-auto lg:mx-0"
              />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-5">
              {/* Title */}
              <h1 className="text-background-light text-4xl lg:text-5xl font-bold">
                {movie.title}
              </h1>

              {/* Tagline */}
              {movie.tagline && (
                <p className="text-background-light/60 text-lg italic">
                  "{movie.tagline}"
                </p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-background-light/80">
                <span className="flex items-center gap-1">
                  <Icon type="star" size={16} className="text-yellow-400" />
                  <span className="font-semibold">{movie.vote_average?.toFixed(1)}</span>
                  <span className="text-background-light/50">
                    ({movie.vote_count} votes)
                  </span>
                </span>
                <span>•</span>
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <span>•</span>
                <span>{formatRuntime(movie.runtime)}</span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 rounded-full text-sm bg-background-light/10 text-background-light border border-background-light/20"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-background-light font-semibold mb-2">Overview</h3>
                <p className="text-background-light/80 leading-relaxed max-w-2xl">
                  {movie.overview}
                </p>
              </div>

              {/* Director */}
              {director && (
                <div>
                  <span className="text-background-light/50 text-sm">Director: </span>
                  <span className="text-background-light">{director.name}</span>
                </div>
              )}

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-3">
                {trailer && (
                  <Button
                    className={cn(
                      "h-12 px-6 gap-2",
                      "bg-background text-accent",
                      "hover:bg-background-light"
                    )}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${trailer.key}`,
                        "_blank"
                      )
                    }
                  >
                    <Icon type="play" size={20} />
                    Watch Trailer
                  </Button>
                )}
                <Button
                  className={cn(
                    "h-12 px-6 gap-2",
                    "bg-transparent text-background-light",
                    "border border-background-light/30",
                    "hover:bg-background-light/10"
                  )}
                >
                  <Icon type="bookmark" size={20} />
                  Add to List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      {movie.credits?.cast && movie.credits.cast.length > 0 && (
        <section className="py-10 px-6 lg:px-16">
          <h2 className="text-foreground text-xl font-semibold mb-5">Cast</h2>
          <div
            className={cn(
              "flex gap-4 overflow-x-auto pb-2",
              "scrollbar-none [&::-webkit-scrollbar]:hidden"
            )}
          >
            {movie.credits.cast.slice(0, 10).map((cast) => (
              <div
                key={cast.id}
                className="flex-shrink-0 w-[130px] text-center"
              >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-2">
                  {cast.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface flex items-center justify-center">
                      <Icon type="user" size={40} className="text-foreground/30" />
                    </div>
                  )}
                </div>
                <h4 className="text-foreground text-sm font-medium line-clamp-1">
                  {cast.name}
                </h4>
                <p className="text-foreground/50 text-xs line-clamp-1">
                  {cast.character}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Movie Info */}
      <section className="py-10 px-6 lg:px-16 border-t border-border">
        <h2 className="text-foreground text-xl font-semibold mb-5">Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-foreground/50 text-sm">Status</p>
            <p className="text-foreground font-medium">{movie.status}</p>
          </div>
          <div>
            <p className="text-foreground/50 text-sm">Release Date</p>
            <p className="text-foreground font-medium">
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <p className="text-foreground/50 text-sm">Budget</p>
            <p className="text-foreground font-medium">{formatMoney(movie.budget)}</p>
          </div>
          <div>
            <p className="text-foreground/50 text-sm">Revenue</p>
            <p className="text-foreground font-medium">{formatMoney(movie.revenue)}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
