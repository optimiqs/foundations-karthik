/**
 * Group by  ·  Easy
 *
 * Staff want appointments grouped by provider, messages grouped by patient, and so on.
 * Write one generic function that groups any list by a key you choose.
 *
 * Examples
 *
 *   groupBy(["apple", "avocado", "banana"], (w) => w[0])
 *     ->  { a: ["apple", "avocado"], b: ["banana"] }
 *   groupBy([], (x) => x)  ->  {}
 *
 * Rules
 *
 *   - Keep items in their original order inside each group.
 *   - It must work for any item type: that is what <T> means.
 *
 * Check your answer:  pnpm learn   or   pnpm test group-by
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  throw new Error("Not implemented");
}
