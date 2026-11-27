import { describe, expect, it } from "vitest";
import { groupBy } from "./group-by";

describe("groupBy", () => {
  it("groups items by the key, keeping order", () => {
    const visits = [
      { id: 1, clinic: "north" },
      { id: 2, clinic: "south" },
      { id: 3, clinic: "north" },
    ];
    expect(groupBy(visits, (v) => v.clinic)).toEqual({
      north: [visits[0], visits[2]],
      south: [visits[1]],
    });
  });
  it("returns an empty object for no items", () => {
    expect(groupBy([], () => "x")).toEqual({});
  });
});
