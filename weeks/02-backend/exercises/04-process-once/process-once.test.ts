import { describe, expect, it } from "vitest";
import { OnceProcessor } from "./process-once";

describe("OnceProcessor", () => {
  it("runs the handler once for the same event id and returns the same result", async () => {
    let calls = 0;
    const processor = new OnceProcessor<string>(async (event) => {
      calls += 1;
      return `handled ${event.payload}`;
    });
    await expect(processor.process({ id: "e1", payload: "C" })).resolves.toBe("handled C");
    await expect(processor.process({ id: "e1", payload: "C" })).resolves.toBe("handled C");
    await expect(processor.process({ id: "e2", payload: "X" })).resolves.toBe("handled X");
    expect(calls).toBe(2);
  });
  it("shares one run when the same event arrives twice at the same time", async () => {
    let calls = 0;
    let finish: (value: string) => void = () => {};
    const processor = new OnceProcessor<string>(() => {
      calls += 1;
      return new Promise((resolve) => {
        finish = resolve;
      });
    });
    const first = processor.process({ id: "e1", payload: "C" });
    const second = processor.process({ id: "e1", payload: "C" });
    finish("done");
    await expect(Promise.all([first, second])).resolves.toEqual(["done", "done"]);
    expect(calls).toBe(1);
  });
  it("lets a failed event be retried", async () => {
    let calls = 0;
    const processor = new OnceProcessor<string>(async () => {
      calls += 1;
      if (calls === 1) {
        throw new Error("database down");
      }
      return "done";
    });
    await expect(processor.process({ id: "e1", payload: "C" })).rejects.toThrow("database down");
    await expect(processor.process({ id: "e1", payload: "C" })).resolves.toBe("done");
    expect(calls).toBe(2);
  });
});
