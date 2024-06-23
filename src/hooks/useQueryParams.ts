import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

type Params = Partial<Record<string, string>>;
type RemoveQueryParamsFN<QueryParams extends Params> = (
  paramKeys: keyof QueryParams | (keyof QueryParams)[]
) => void;
type SetNewQueryParamsFN<QueryParams extends Params> = (
  params: Partial<QueryParams>
) => void;

/**
 * Represents the result of the useQueryParams hook.
 *
 * @template QueryParams - The type of the query parameters.
 */
export type UseQueryParamsResult<QueryParams extends Params> = {
  /**
   * The current query parameters.
   */
  queryParams: QueryParams;

  /**
   * Function to remove query parameters.
   */
  removeQueryParams: RemoveQueryParamsFN<QueryParams>;

  /**
   * Function to set new query parameters.
   */
  setNewQueryParams: SetNewQueryParamsFN<QueryParams>;
};

/**
 * Custom hook for managing query parameters in the URL.
 *
 * @template QueryParams - The type of the query parameters.
 * @returns An object containing the query parameters, as well as functions to set and remove query parameters.
 */
export const useQueryParams = <
  QueryParams extends Params = Record<string, never>
>(): UseQueryParamsResult<QueryParams> => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setNewQueryParams = useCallback<SetNewQueryParamsFN<QueryParams>>(
    (params) => {
      setSearchParams((prevQueryParams) => {
        for (const key in params) {
          const value = params[key];
          if (value !== undefined && value !== "") {
            prevQueryParams.set(key, value);
          } else {
            prevQueryParams.delete(key);
          }
        }
        return prevQueryParams;
      });
    },
    [setSearchParams]
  );

  const removeQueryParams = useCallback<RemoveQueryParamsFN<QueryParams>>(
    (paramKeys) => {
      setSearchParams((prevQueryParams) => {
        const keys = Array.isArray(paramKeys) ? paramKeys : [paramKeys];
        for (const key of keys) {
          if (prevQueryParams.has(key.toString())) {
            prevQueryParams.delete(key.toString());
          }
        }
        return prevQueryParams;
      });
    },
    [setSearchParams]
  );

  const queryParams = useMemo<QueryParams>(() => {
    const newQueryParams = new URLSearchParams(searchParams);
    const paramsObject: Record<string, string> = {};

    if (newQueryParams.size !== 0) {
      for (const [key, value] of newQueryParams.entries()) {
        paramsObject[key] = value;
      }
    }

    return paramsObject as QueryParams;
  }, [searchParams]);

  return { queryParams, setNewQueryParams, removeQueryParams };
};
