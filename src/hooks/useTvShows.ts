import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

interface TvShowsParams {
  page: number;
}

interface TvShow {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  first_air_date: string;
}

interface TvShowsResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}

async function fetchPopularTvShows(page: number) {
  return apiClient.get<TvShowsResponse>("/tv/popular", { params: { page } });
}

export function usePopularTvShows({ page }: TvShowsParams) {
  return useQuery({
    queryKey: ["tv", "popular", page],
    queryFn: () => fetchPopularTvShows(page),
  });
}
