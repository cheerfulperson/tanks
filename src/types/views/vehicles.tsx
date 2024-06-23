import { VehiclesQueryParams } from "data_layer/queries/useVehiclesQuery";

export type OnFiltersChangeFn = (filters: Partial<VehiclesQueryParams>) => void;
