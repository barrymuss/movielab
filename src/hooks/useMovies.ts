import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

interface PopularMoviesParams {
  page: number;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
}

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genre[];
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface CrewMember {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  vote_average: number;
  vote_count: number;
  release_date: string;
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  credits: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  videos: Video[];
}

// Fetchers
async function fetchPopularMovies(page: number) {
  return apiClient.get<MoviesResponse>("/movies/popular", { params: { page } });
}

async function fetchTopRatedMovies(page: number) {
  return apiClient.get<MoviesResponse>("/movies/top-rated", { params: { page } });
}

async function fetchNowPlayingMovies(page: number) {
  return apiClient.get<MoviesResponse>("/movies/now-playing", { params: { page } });
}

async function fetchUpcomingMovies(page: number) {
  return apiClient.get<MoviesResponse>("/movies/upcoming", { params: { page } });
}

async function fetchGenres() {
  return apiClient.get<GenresResponse>("/movies/genres");
}

async function fetchMovieDetail(id: number) {
  return apiClient.get<MovieDetail>(`/movies/${id}`);
}

// Hooks
export function usePopularMovies({ page }: PopularMoviesParams) {
  return useQuery({
    queryKey: ["movies", "popular", page],
    queryFn: () => fetchPopularMovies(page),
  });
}

export function useTopRatedMovies({ page }: PopularMoviesParams) {
  return useQuery({
    queryKey: ["movies", "top-rated", page],
    queryFn: () => fetchTopRatedMovies(page),
  });
}

export function useNowPlayingMovies({ page }: PopularMoviesParams) {
  return useQuery({
    queryKey: ["movies", "now-playing", page],
    queryFn: () => fetchNowPlayingMovies(page),
  });
}

export function useUpcomingMovies({ page }: PopularMoviesParams) {
  return useQuery({
    queryKey: ["movies", "upcoming", page],
    queryFn: () => fetchUpcomingMovies(page),
  });
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: Infinity,
  });
}

export function useMovieDetail(id: number) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
}
