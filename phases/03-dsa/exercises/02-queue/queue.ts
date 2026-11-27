/**
 * Queue  ·  Medium
 *
 * A queue is first in, first out, like a line at reception. Job queues and breadth-first search use one.
 *
 * Examples
 *
 *   enqueue("a"); enqueue("b"); dequeue()  ->  "a"
 *   200,000 enqueues then 200,000 dequeues must finish quickly
 *
 * Rules
 *
 *   - dequeue and peek return undefined when the queue is empty.
 *   - dequeue must be fast even with many items.
 *
 * Check your answer:  pnpm learn   or   pnpm test queue
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export class Queue<T> {
  enqueue(_item: T): void {
    throw new Error("Not implemented");
  }

  dequeue(): T | undefined {
    throw new Error("Not implemented");
  }

  peek(): T | undefined {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
