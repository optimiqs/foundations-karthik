import { describe, expect, it } from "vitest";
import { shortestPath } from "./shortest-path";

const graph = {
  reception: ["triage", "billing"],
  triage: ["exam-1", "exam-2"],
  billing: ["exit"],
  "exam-1": ["lab"],
  "exam-2": ["exit"],
  lab: ["exit"],
  exit: [],
};

describe("shortestPath", () => {
  it("finds the path with the fewest steps", () => {
    expect(shortestPath(graph, "reception", "exit")).toEqual(["reception", "billing", "exit"]);
  });
  it("returns a single-node path when start is the goal", () => {
    expect(shortestPath(graph, "lab", "lab")).toEqual(["lab"]);
  });
  it("returns null when there is no path", () => {
    expect(shortestPath(graph, "exit", "reception")).toBeNull();
  });
  it("handles cycles", () => {
    expect(shortestPath({ a: ["b"], b: ["a", "c"], c: [] }, "a", "c")).toEqual(["a", "b", "c"]);
  });
});
