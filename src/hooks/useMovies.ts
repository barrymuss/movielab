import { useQuery } from "@tanstack/react-query";

interface PopularMoviesParams {
  page: number;
}

async function fetchPopularMovies(page: number) {
  const response = await fetch(`/api/movies/popular?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return response.json();
}

async function fetchGenres() {
  const response = await fetch("/api/movies/genres");
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }
  return response.json();
}

export function usePopularMovies({ page }: PopularMoviesParams) {
  return useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: () => fetchPopularMovies(page),
  });
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: Infinity, // Genres rarely change
  });
}
