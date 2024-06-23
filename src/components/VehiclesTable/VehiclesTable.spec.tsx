import { render, waitFor, screen, cleanup } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { VehiclesQueryParams } from "data_layer/queries/useVehiclesQuery";
import { OnFiltersChangeFn } from "types/views/vehicles";
import { mockVehicles } from "mocks/vehicles";
import { VehiclesTable } from "./VehiclesTable";

const mockLoading = false;
let mockFilters: VehiclesQueryParams = {
  search: "",
  limit: 5,
  page: 1,
};
const mockTotalCount = mockVehicles.length;

function combineFilters(filters: Partial<VehiclesQueryParams>) {
  mockFilters = {
    ...mockFilters,
    ...filters,
  };
}

const mockOnFiltersChange: OnFiltersChangeFn = vi
  .fn()
  .mockImplementation(combineFilters);

describe("VehiclesTable", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the table with correct props", async () => {
    render(
      <VehiclesTable
        vehicles={mockVehicles}
        loading={mockLoading}
        filters={mockFilters}
        totalCount={mockTotalCount}
        onFiltersChange={mockOnFiltersChange}
      />
    );
    await waitFor(() =>
      expect(screen.getAllByTestId("row-item")).toHaveLength(10)
    );
  });
});
