/**
 * Stack  ·  Easy
 *
 * A stack is last in, first out, like a pile of plates. Undo buttons and bracket matching use one.
 *
 * Examples
 *
 *   push(1); push(2); pop()  ->  2
 *   peek() on an empty stack  ->  undefined
 *
 * Rules
 *
 *   - pop and peek return undefined when the stack is empty.
 *
 * Check your answer:  pnpm learn   or   pnpm test stack
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export class Stack<T> {
  push(_item: T): void {
    throw new Error("Not implemented");
  }

  pop(): T | undefined {
    throw new Error("Not implemented");
  }

  peek(): T | undefined {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
