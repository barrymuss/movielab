import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

interface PopularMoviesParams {
  page: number;
}

// Menggunakan apiClient untuk fetching
async function fetchPopularMovies(page: number) {
  return apiClient.get("/movies/popular", { params: { page } });
}

async function fetchGenres() {
  return apiClient.get("/movies/genres");
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
