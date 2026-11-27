import { describe, expect, it } from "vitest";
import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  it("appends, prepends and lists in order", () => {
    const list = new LinkedList<number>();
    list.append(2);
    list.append(3);
    list.prepend(1);
    expect(list.toArray()).toEqual([1, 2, 3]);
    expect(list.size).toBe(3);
  });
  it("removes the first matching value", () => {
    const list = new LinkedList<number>();
    [1, 2, 3, 2].forEach((n) => list.append(n));
    expect(list.remove(2)).toBe(true);
    expect(list.remove(9)).toBe(false);
    expect(list.toArray()).toEqual([1, 3, 2]);
  });
  it("removes the head and the tail", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.append(n));
    list.remove(1);
    list.remove(3);
    list.append(4);
    expect(list.toArray()).toEqual([2, 4]);
  });
  it("reverses in place", () => {
    const list = new LinkedList<number>();
    [1, 2, 3].forEach((n) => list.append(n));
    list.reverse();
    list.append(0);
    expect(list.toArray()).toEqual([3, 2, 1, 0]);
  });
});
