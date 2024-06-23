import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";

import { env } from "./env";

/**
 * Default query function used by the query client.
 * Executes a GET request to the specified URL with the given parameters.
 * @param queryKey - The query key containing the URL and parameters.
 * @returns The response data from the GET request.
 * @throws Error if the query key is invalid.
 */
export const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const [url, params] = queryKey;
  if (
    typeof url === "string" &&
    (!params || (!!params && typeof params === "object"))
  ) {
    const { data } = await axios.get(
      `${env.API_URL}${url[0] === "/" ? url : `/${url}`}`,
      {
        params: {
          ...(params as Record<string, unknown>),
          application_id: env.APPLICATION_ID,
        },
      }
    );
    return data;
  }
  throw new Error("Invalid QueryKey");
};
