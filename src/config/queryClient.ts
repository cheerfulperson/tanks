import { QueryFunction } from "@tanstack/react-query";
import axios from "axios";

import { env } from "./env";

/** Define a default query function that will receive the query key */ 
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
