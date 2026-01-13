import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { apiClient, fetcher } from "@/lib/api-client";

export function useFetch<T>(
  url: string,
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) {
  return useQuery<T>({
    queryKey: [url],
    queryFn: () => fetcher<T>(url),
    ...options,
  });
}

export function useFetchWithParams<T, P extends Record<string, any>>(
  endpoint: string,
  params: P,
  queryKey?: any[],
  options?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) {
  return useQuery<T>({
    queryKey: queryKey || [endpoint, params],
    queryFn: () => apiClient.get<T>(endpoint, { params }),
    ...options,
  });
}

export function usePost<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (data) => apiClient.post<TData>(endpoint, data),
    ...options,
  });
}

export function usePut<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (data) => apiClient.put<TData>(endpoint, data),
    ...options,
  });
}

export function usePatch<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  return useMutation<TData, Error, TVariables>({
    mutationFn: (data) => apiClient.patch<TData>(endpoint, data),
    ...options,
  });
}

export function useDelete<TData = unknown>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, void>
) {
  return useMutation<TData, Error, void>({
    mutationFn: () => apiClient.delete<TData>(endpoint),
    ...options,
  });
}
