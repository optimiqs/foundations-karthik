import { describe, expect, it } from "vitest";
import { chunk } from "./chunk";

describe("chunk", () => {
  it("splits into groups of the given size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("returns an empty list for no items", () => {
    expect(chunk([], 3)).toEqual([]);
  });
  it("throws for a size below 1", () => {
    expect(() => chunk([1], 0)).toThrow(RangeError);
  });
});
