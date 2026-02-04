import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

interface PopularPersonsParams {
  page: number;
}

interface Person {
  id: number;
  name: string;
  profile_path: string;
  known_for_department: string;
  popularity: number;
}

interface PersonsResponse {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

// Menggunakan apiClient untuk fetching
async function fetchPopularPersons(page: number) {
  return apiClient.get<PersonsResponse>("/persons/popular", {
    params: { page },
  });
}

export function usePopularPersons({ page }: PopularPersonsParams) {
  return useQuery({
    queryKey: ["persons", "popular", page],
    queryFn: () => fetchPopularPersons(page),
  });
}
