/**
 * Min heap  ·  Hard
 *
 * A heap always gives you the smallest value quickly. Schedulers use one to pick the next job.
 *
 * Examples
 *
 *   push 5, 3, 8, 1; peek()  ->  1
 *   pop() repeatedly  ->  values in ascending order
 *
 * Rules
 *
 *   - push and pop must each take about log2(n) steps.
 *   - pop and peek return undefined when the heap is empty.
 *
 * Check your answer:  pnpm learn   or   pnpm test min-heap
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export class MinHeap {
  push(_value: number): void {
    throw new Error("Not implemented");
  }

  pop(): number | undefined {
    throw new Error("Not implemented");
  }

  peek(): number | undefined {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
