/**
 * Chunk  ·  Easy
 *
 * We send reminder texts in batches so we do not overload the provider.
 * Split a list into groups of a given size.
 *
 * Examples
 *
 *   chunk([1, 2, 3, 4, 5], 2)  ->  [[1, 2], [3, 4], [5]]
 *   chunk([], 3)               ->  []
 *   chunk([1, 2], 0)           ->  throws a RangeError
 *
 * Rules
 *
 *   - The last group may be smaller.
 *   - A size below 1 is a mistake: throw a RangeError.
 *
 * Check your answer:  pnpm learn   or   pnpm test chunk
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function chunk<T>(items: T[], size: number): T[][] {
  throw new Error("Not implemented");
}
