import { ReactElement, useCallback, useMemo, useState } from "react";

import {
  VehiclesQueryParams,
  useVehiclesQuery,
} from "data_layer/queries/useVehiclesQuery";
import { useQueryParams } from "hooks/useQueryParams";
import { VehiclesTable } from "components/VehiclesTable";
import { OnFiltersChangeFn } from "types/views/vehicles";
import styles from "./Vehicles.module.scss";

type QueryParams = {
  limit?: string;
  search?: string;
  page?: string;
};

export const Vehicles = (): ReactElement => {
  const { queryParams, setNewQueryParams } = useQueryParams<QueryParams>();
  const initialParams = useMemo<VehiclesQueryParams>(() => {
    return {
      limit: queryParams.limit ? parseInt(queryParams.limit) : 10,
      search: queryParams.search ? queryParams.search : undefined,
      page: queryParams.page ? parseInt(queryParams.page) : 1,
    };
  }, [queryParams]);
  const [vehiclesParams, setVehiclesParams] =
    useState<VehiclesQueryParams>(initialParams);

  const { isLoading, totalCount, vehicles } = useVehiclesQuery(vehiclesParams);

  const handleFiltersChange = useCallback<OnFiltersChangeFn>(
    (filters) => {
      setVehiclesParams((prev) => ({
        ...prev,
        ...filters,
      }));
      setNewQueryParams({
        limit: filters.limit?.toString() || vehiclesParams.limit.toString(),
        search: filters.search,
        page: filters.page?.toString() || vehiclesParams.page.toString(),
      });
    },
    [setNewQueryParams, vehiclesParams.limit, vehiclesParams.page]
  );

  return (
    <div className={styles.layout}>
      <VehiclesTable
        filters={vehiclesParams}
        loading={isLoading}
        onFiltersChange={handleFiltersChange}
        totalCount={totalCount}
        vehicles={vehicles}
      />
    </div>
  );
};
