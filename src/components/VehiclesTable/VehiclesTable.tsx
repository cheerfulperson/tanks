import { ReactElement } from "react";

import {
  VehiclesQueryParams,
  Vehicle,
} from "data_layer/queries/useVehiclesQuery";
import { OnFiltersChangeFn } from "types/views/vehicles";
import { Pagination } from "./Pagination";
import { Header } from "./Header";
import { Content } from "./Content";
import styles from "./VehiclesTable.module.scss";

interface VehiclesTableProps {
  vehicles: Vehicle[];
  loading: boolean;
  filters: VehiclesQueryParams;
  totalCount: number;
  onFiltersChange: OnFiltersChangeFn;
}

/**
 * Renders a table of vehicles with filters, pagination, and loading state.
 *
 * @component
 * @param {VehiclesTableProps} props - The component props.
 * @param {VehicleFilter} props.filters - The filters to apply to the table.
 * @param {boolean} props.loading - Indicates whether the table is in a loading state.
 * @param {Function} props.onFiltersChange - The callback function to handle filter changes.
 * @param {number} props.totalCount - The total count of vehicles.
 * @param {Vehicle[]} props.vehicles - The array of vehicles to display in the table.
 * @returns {ReactElement} The rendered VehiclesTable component.
 */
export const VehiclesTable = ({
  filters,
  loading,
  onFiltersChange,
  totalCount,
  vehicles,
}: VehiclesTableProps): ReactElement => {
  return (
    <div className={styles.container}>
      <Header onFiltersChange={onFiltersChange} search={filters.search} />
      <Content vehicles={vehicles} loading={loading} />
      <Pagination
        limit={filters.limit}
        onFiltersChange={onFiltersChange}
        page={filters.page}
        totalCount={totalCount}
      />
    </div>
  );
};
