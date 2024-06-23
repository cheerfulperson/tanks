import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

import { mockVehiclesResponse } from "mocks/vehicles";
import { VehiclesFields } from "constants/vehiclesFields";
import { env } from "config/env";
// Used app instead of Vehicles, because Vehicles is not wrapped in QueryClientProvider
import App from "../../App";

const server = setupServer(
  http.get(
    `https://api.tanki.su/wot/encyclopedia/vehicles/?fields=${VehiclesFields.join(
      ","
    )}&language=en&application_id=${env.APPLICATION_ID}`,
    () => {
      return HttpResponse.json(mockVehiclesResponse);
    }
  )
);

describe("Vehicles", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the VehiclesTable component with correct props", async () => {
    server.listen({ onUnhandledRequest: "error" });

    render(<App />);

    await waitFor(() =>
      expect(screen.getAllByTestId("row-item")).toHaveLength(10)
    );
  });

  it("updates the table when the user interacts with search", async () => {
    server.listen({ onUnhandledRequest: "error" });

    render(<App />);

    const searchInput = screen.getByTestId("input");
    fireEvent.change(searchInput, { target: { value: "M24 Chaffee" } });

    await waitFor(() =>
      expect(screen.getAllByTestId("row-item")).toHaveLength(1)
    );
    screen.getByText("M24 Chaffee");
  });

  it("updates the table when the user interacts with the limit per page select", async () => {
    server.listen({ onUnhandledRequest: "error" });

    render(<App />);

    const selectContainer = screen.getByTestId("select-container");
    expect(selectContainer).toBeDefined();
    expect(selectContainer).not.toBeNull();

    expect(selectContainer.firstChild).not.toBeNull();

    fireEvent.keyDown(selectContainer.firstChild!, { key: 'ArrowDown' });
    await waitFor(() => screen.getByText('5 / page'));
    fireEvent.click(screen.getByText('5 / page'));

    await waitFor(() =>
      expect(screen.getAllByTestId("row-item")).toHaveLength(5)
    );
    await waitFor(() =>
      expect(screen.getByTestId("pagination-items").children).toHaveLength(2)
    );
  });
});
