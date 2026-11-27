import { describe, expect, it } from "vitest";
import { InvalidCursorError, paginate } from "./paginate";

const at = (minute: number) => new Date(Date.UTC(2027, 0, 5, 10, minute));
const rows = [
  { id: "a", createdAt: at(1) },
  { id: "b", createdAt: at(3) },
  { id: "c", createdAt: at(2) },
  { id: "d", createdAt: at(3) },
  { id: "e", createdAt: at(0) },
];

describe("paginate", () => {
  it("returns newest first, breaking ties by id, newest id first", () => {
    expect(paginate(rows, { first: 5 }).nodes.map((row) => row.id)).toEqual(["d", "b", "c", "a", "e"]);
  });
  it("walks every row exactly once, page by page", () => {
    const seen: string[] = [];
    let after: string | undefined;
    let pages = 0;
    for (;;) {
      const page = paginate(rows, after === undefined ? { first: 2 } : { first: 2, after });
      pages += 1;
      seen.push(...page.nodes.map((row) => row.id));
      if (!page.hasNextPage) {
        break;
      }
      after = page.endCursor ?? undefined;
    }
    expect(seen).toEqual(["d", "b", "c", "a", "e"]);
    expect(pages).toBe(3);
  });
  it("keeps its place when new rows arrive between pages", () => {
    const first = paginate(rows, { first: 2 });
    const withNewRow = [...rows, { id: "z", createdAt: at(9) }];
    expect(paginate(withNewRow, { first: 2, after: first.endCursor ?? "" }).nodes.map((row) => row.id)).toEqual(["c", "a"]);
  });
  it("returns an empty last page with no cursor", () => {
    expect(paginate([], { first: 2 })).toEqual({ nodes: [], endCursor: null, hasNextPage: false });
  });
  it("rejects a cursor it did not create", () => {
    expect(() => paginate(rows, { first: 2, after: "not-a-cursor" })).toThrow(InvalidCursorError);
  });
  it.each([0, 101, 2.5])("rejects first = %s", (first) => {
    expect(() => paginate(rows, { first })).toThrow(RangeError);
  });
});
