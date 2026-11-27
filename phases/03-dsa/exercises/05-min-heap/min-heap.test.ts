import { describe, expect, it } from "vitest";
import { MinHeap } from "./min-heap";

describe("MinHeap", () => {
  it("always pops the smallest value", () => {
    const heap = new MinHeap();
    [5, 3, 8, 1, 9, 2].forEach((n) => heap.push(n));
    expect(heap.peek()).toBe(1);
    const out: number[] = [];
    while (heap.size > 0) out.push(heap.pop() as number);
    expect(out).toEqual([1, 2, 3, 5, 8, 9]);
    expect(heap.pop()).toBeUndefined();
  });
  it("sorts many random values", () => {
    const heap = new MinHeap();
    const values = Array.from({ length: 1000 }, (_, i) => (i * 7919) % 1009);
    values.forEach((n) => heap.push(n));
    const out: number[] = [];
    while (heap.size > 0) out.push(heap.pop() as number);
    expect(out).toEqual([...values].sort((a, b) => a - b));
  });
});
