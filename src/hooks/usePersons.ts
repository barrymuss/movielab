import { useQuery } from "@tanstack/react-query";

interface PopularPersonsParams {
  page: number;
}

async function fetchPopularPersons(page: number) {
  const response = await fetch(`/api/persons/popular?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular persons");
  }
  return response.json();
}

export function usePopularPersons({ page }: PopularPersonsParams) {
  return useQuery({
    queryKey: ["persons", "popular", page],
    queryFn: () => fetchPopularPersons(page),
  });
}
