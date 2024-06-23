import { describe, expect, it } from "vitest";
import { formatNumber } from "../utils/formatNumber";

describe("formatNumber", () => {
  it("should format a number with commas as thousands separator", () => {
    expect(formatNumber(1000)).toBe("1 000");
    expect(formatNumber(1000000)).toBe("1 000 000");
    expect(formatNumber(1000000000)).toBe("1 000 000 000");
  });
});
