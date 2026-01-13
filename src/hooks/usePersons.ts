import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

interface PopularPersonsParams {
  page: number;
}

// Menggunakan apiClient untuk fetching
async function fetchPopularPersons(page: number) {
  return apiClient.get("/persons/popular", { params: { page } });
}

export function usePopularPersons({ page }: PopularPersonsParams) {
  return useQuery({
    queryKey: ["persons", "popular", page],
    queryFn: () => fetchPopularPersons(page),
  });
}
