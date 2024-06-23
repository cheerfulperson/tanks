import {
  DefinedInitialDataOptions,
  QueryKey,
  useQuery as defaultUseQuery,
} from "@tanstack/react-query";

type DefaultQueryKey = [
  string,
  Record<string, string | boolean | number | null | undefined> | undefined
];

type UseQueryOptions<
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = DefaultQueryKey
> = Omit<
  DefinedInitialDataOptions<TQueryFnData, Error, TQueryFnData, TQueryKey>,
  "queryKey" | "initialData"
> & { initialData?: TQueryFnData };


/**
 * Custom hook for making queries using React Query.
 *
 * @template TQueryFnData - The type of the data returned by the query function.
 * @template TQueryKey - The type of the query key.
 * @param {DefaultQueryKey | string} key - The query key used to identify the query.
 * @param {UseQueryOptions<TQueryFnData, TQueryKey>} [options] - The options for the query, including any additional configuration.
 * @returns {QueryObserverResult<TQueryFnData, Error>} - The result of the query, including the data and query status.
 */
export const useQuery = <
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = DefaultQueryKey
>(
  key: DefaultQueryKey | string,
  options: UseQueryOptions<TQueryFnData, TQueryKey> = {
    initialData: undefined,
  }
) => {
  const data = defaultUseQuery<TQueryFnData, Error, TQueryFnData, TQueryKey>({
    queryKey: (typeof key === "string" ? [key] : key) as unknown as TQueryKey,
    ...options,
  });
  return data;
};
