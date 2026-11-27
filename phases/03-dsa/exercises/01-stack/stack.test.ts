import { describe, expect, it } from "vitest";
import { Stack } from "./stack";

describe("Stack", () => {
  it("is last in, first out", () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
    expect(stack.size).toBe(0);
  });
});
