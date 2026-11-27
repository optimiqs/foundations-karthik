import { describe, expect, it } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
  it("is first in, first out", () => {
    const queue = new Queue<string>();
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.peek()).toBe("a");
    expect(queue.dequeue()).toBe("a");
    expect(queue.dequeue()).toBe("b");
    expect(queue.dequeue()).toBeUndefined();
  });
  it("handles a large number of items", () => {
    const queue = new Queue<number>();
    for (let i = 0; i < 200_000; i += 1) queue.enqueue(i);
    for (let i = 0; i < 200_000; i += 1) expect(queue.dequeue()).toBe(i);
    expect(queue.size).toBe(0);
  });
});
