/**
 * Linked list  ·  Medium
 *
 * A linked list stores values in nodes, where each node points to the next one.
 * Building one teaches you how references work.
 *
 * Examples
 *
 *   append(2); append(3); prepend(1); toArray()  ->  [1, 2, 3]
 *   remove(2)  ->  true, removes only the first 2
 *   reverse(); toArray()  ->  values in the opposite order
 *
 * Rules
 *
 *   - Do not use an array to store the values; toArray builds one only when asked.
 *   - After remove and reverse, append must still add to the end.
 *
 * Check your answer:  pnpm learn   or   pnpm test linked-list
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export class LinkedList<T> {
  append(_value: T): void {
    throw new Error("Not implemented");
  }

  prepend(_value: T): void {
    throw new Error("Not implemented");
  }

  remove(_value: T): boolean {
    throw new Error("Not implemented");
  }

  reverse(): void {
    throw new Error("Not implemented");
  }

  toArray(): T[] {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
