import { describe, expect, it } from "vitest";
import { binarySearch } from "./binary-search";

describe("binarySearch", () => {
  const sorted = [1, 3, 5, 7, 9, 11];
  it.each([[1, 0], [7, 3], [11, 5]])("finds %i at index %i", (target, index) => {
    expect(binarySearch(sorted, target)).toBe(index);
  });
  it.each([0, 4, 12])("returns -1 for missing %i", (target) => {
    expect(binarySearch(sorted, target)).toBe(-1);
  });
  it("handles an empty list", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
