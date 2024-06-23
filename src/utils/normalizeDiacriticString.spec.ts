import { describe, expect, it } from "vitest";
import { normalizeDiacriticString } from "./normalizeDiacriticString";

describe("normalizeDiacriticString", () => {
  it("should remove diacritic marks", () => {
    const input = "Café";
    const expected = "Cafe";
    const result = normalizeDiacriticString(input);
    expect(expected).toEqual(result);
  });

  it("should handle empty string", () => {
    const input = "";
    const expected = "";
    const result = normalizeDiacriticString(input);
    expect(expected).toEqual(result);
  });

  it("should handle string without diacritic marks", () => {
    const input = "Hello World";
    const expected = "Hello World";
    const result = normalizeDiacriticString(input);
    expect(expected).toEqual(result);
  });
});
