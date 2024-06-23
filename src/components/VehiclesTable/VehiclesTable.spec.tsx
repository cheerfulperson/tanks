import {
  render,
  waitFor,
  screen,
  cleanup,
  getByText,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { VehiclesQueryParams } from "data_layer/queries/useVehiclesQuery";
import { OnFiltersChangeFn } from "types/views/vehicles";
import { mockVehicles } from "mocks/vehicles";
import { VehiclesTable } from "./VehiclesTable";

const mockLoading = false;
const mockFilters: VehiclesQueryParams = {
  search: "",
  limit: 5,
  page: 1,
};
const mockTotalCount = mockVehicles.length;

const mockOnFiltersChange: OnFiltersChangeFn = vi.fn();

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

  it("renders the table with several pages", async () => {
    render(
      <VehiclesTable
        vehicles={mockVehicles.slice(0, 5)}
        loading={mockLoading}
        filters={{
          ...mockFilters,
          limit: 5,
        }}
        totalCount={mockTotalCount}
        onFiltersChange={mockOnFiltersChange}
      />
    );
    await waitFor(() =>
      expect(screen.getAllByTestId("row-item")).toHaveLength(5)
    );
    await waitFor(() =>
      expect(screen.getByTestId("pagination-items").children).toHaveLength(2)
    );
  });

  it("renders the table with no items", async () => {
    const { container } = render(
      <VehiclesTable
        vehicles={[]}
        loading={mockLoading}
        filters={{
          ...mockFilters,
          limit: 5,
        }}
        totalCount={0}
        onFiltersChange={mockOnFiltersChange}
      />
    );
    await waitFor(() =>
      expect(screen.getByTestId("pagination-items").children).toHaveLength(1)
    );
    getByText(container, 'No vehicles found');
  });
});
