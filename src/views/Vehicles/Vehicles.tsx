import { ReactElement, useCallback, useState } from "react";

import {
  VehiclesQueryParams,
  useVehiclesQuery,
} from "data_layer/queries/useVehiclesQuery";
import { VehiclesTable } from "components/VehiclesTable";
import { OnFiltersChangeFn } from "types/views/vehicles";
import styles from "./Vehicles.module.scss";

/**
 * Renders the Vehicles component.
 * This component displays a table of vehicles and allows filtering and pagination.
 */
export const Vehicles = (): ReactElement => {
  const [vehiclesParams, setVehiclesParams] = useState<VehiclesQueryParams>({
    limit: 10,
    search: undefined,
    page: 1,
  });

  const { isLoading, totalCount, vehicles } = useVehiclesQuery(vehiclesParams);

  const handleFiltersChange = useCallback<OnFiltersChangeFn>((filters) => {
    setVehiclesParams((prev) => ({
      ...prev,
      ...filters,
    }));
  }, []);

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
