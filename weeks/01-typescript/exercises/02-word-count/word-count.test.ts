import { describe, expect, it } from "vitest";
import { wordCount } from "./word-count";

describe("wordCount", () => {
  it("counts words ignoring case", () => {
    expect(wordCount("Go go GO stop")).toEqual({ go: 3, stop: 1 });
  });
  it("ignores punctuation and extra spaces", () => {
    expect(wordCount("  Hello, world!  Hello...  ")).toEqual({ hello: 2, world: 1 });
  });
  it("keeps apostrophes inside words", () => {
    expect(wordCount("don't stop, don't")).toEqual({ "don't": 2, stop: 1 });
  });
  it("returns an empty object for empty text", () => {
    expect(wordCount("")).toEqual({});
  });
});
