import { describe, expect, it } from "vitest";
import { toE164 } from "./to-e164";

describe("toE164", () => {
  it.each([
    ["(555) 010-0001", "+15550100001"],
    ["555.010.0001", "+15550100001"],
    ["5550100001", "+15550100001"],
    ["+1 555 010 0001", "+15550100001"],
    ["1-555-010-0001", "+15550100001"],
  ])("normalises %s", (input, expected) => {
    expect(toE164(input)).toBe(expected);
  });
  it.each(["", "12345", "+44 20 7946 0000", "2-555-010-0001", "555-010-00011"])("rejects %s", (input) => {
    expect(toE164(input)).toBeNull();
  });
});
