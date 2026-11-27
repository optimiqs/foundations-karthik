import { describe, expect, it } from "vitest";
import { retry } from "./retry";

describe("retry", () => {
  it("returns the first successful result", async () => {
    let calls = 0;
    const task = async () => {
      calls += 1;
      if (calls < 3) {
        throw new Error(`fail ${calls}`);
      }
      return "done";
    };
    await expect(retry(task, 5)).resolves.toBe("done");
    expect(calls).toBe(3);
  });
  it("throws the last error after the final attempt", async () => {
    let calls = 0;
    const task = async () => {
      calls += 1;
      throw new Error(`fail ${calls}`);
    };
    await expect(retry(task, 2)).rejects.toThrow("fail 2");
    expect(calls).toBe(2);
  });
  it("rejects attempts below 1", async () => {
    await expect(retry(async () => 1, 0)).rejects.toThrow(RangeError);
  });
});
