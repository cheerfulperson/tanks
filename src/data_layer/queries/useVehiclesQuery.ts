import { useMemo } from "react";

import { useQuery } from "data_layer/utils/useQuery";
import { ResponseType } from "types/responseType";
import { normalizeDiacriticString } from "utils/normalizeDiacriticString";
import { Nations } from "constants/nations";
import { TanksTypes } from "constants/tanksTypes";
import { TanksTiers } from "constants/tanksTiers";
import { ToNumber } from "types/toNumber";

/**
 * An array of fields used in the vehicles query.
 * Each field represents a specific attribute of a vehicle.
 */
const fields = [
  "tank_id",
  "tank_id",
  "is_premium",
  "name",
  "nation",
  "price_credit",
  "price_gold",
  "prices_xp",
  "tier",
  "type",
  "images.contour_icon",
] as const;

/**
 * Custom hook for querying vehicles data.
 * 
 * @param {VehiclesQueryParams} params - The query parameters.
 * @returns {Object} - An object containing the loading state, total count, and paginated vehicles data.
 */
export const useVehiclesQuery = ({
  search,
  limit,
  page,
}: VehiclesQueryParams) => {
  const { data, isLoading } = useQuery<VehiclesResponse>(
    [
      "wot/encyclopedia/vehicles/",
      {
        fields: fields.join(","),
        language: "en",
      },
    ],
    {
      networkMode: "offlineFirst",
      retry: false,
      refetchOnMount: false,
    }
  );

  const successData = data?.status === "ok" ? data.data : undefined;

  const vehicles = useMemo(() => {
    if (!successData) {
      return [];
    }

    return Object.values(successData).filter((vehicle) =>
      normalizeDiacriticString(vehicle.name)
        .toLowerCase()
        .includes(search?.toLowerCase() || "")
    );
  }, [search, successData]);

  return {
    isLoading,
    totalCount: vehicles.length,
    vehicles: vehicles.slice((page - 1) * limit, page * limit),
  };
};

/**
 * Represents the parameters for the vehicles query.
 */
export type VehiclesQueryParams = {
  /**
   * The search keyword to filter by.
   */
  search?: string;

  /**
   * The maximum number of results to return.
   */
  limit: number;

  /**
   * The page number of the results to return.
   */
  page: number;
};

export type Vehicle = {
  /** Vehicle ID */
  tank_id: number;
  /** Indicates whether the technique is premium */
  is_premium: boolean;
  /** Technique name */
  name: string;
  /** Nation
   * @example "ussr" | "usa"
   */
  nation: Nations;
  /** Price in credits */
  price_credit: number;
  /** Price in gold credits */
  price_gold: number;
  /** Price in experience points */
  prices_xp: Record<string, number>;
  /** Vehicle level
   * @example I | II | III
   */
  tier: ToNumber<keyof typeof TanksTiers>;
  /** Vehicle type
   * @example "lightTank" | "mediumTank"
   */
  type: keyof typeof TanksTypes;
  /** Vehicle images */
  images: {
    contour_icon: string;
  };
};

export type VehiclesResponse = ResponseType<Record<string, Vehicle>>;
