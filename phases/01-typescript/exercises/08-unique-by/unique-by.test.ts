import { describe, expect, it } from "vitest";
import { uniqueBy } from "./unique-by";

describe("uniqueBy", () => {
  it("keeps the first item for each key, in order", () => {
    const events = [
      { id: "e1", n: 1 },
      { id: "e2", n: 2 },
      { id: "e1", n: 3 },
    ];
    expect(uniqueBy(events, (e) => e.id)).toEqual([events[0], events[1]]);
  });
});
