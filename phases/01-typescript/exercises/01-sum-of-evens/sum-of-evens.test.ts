import { describe, expect, it } from "vitest";
import { sumOfEvens } from "./sum-of-evens";

describe("sumOfEvens", () => {
  it("adds only the even numbers", () => {
    expect(sumOfEvens([1, 2, 3, 4, 5, 6])).toBe(12);
  });
  it("returns 0 for an empty list", () => {
    expect(sumOfEvens([])).toBe(0);
  });
  it("handles negative numbers", () => {
    expect(sumOfEvens([-4, -3, 2])).toBe(-2);
  });
});
