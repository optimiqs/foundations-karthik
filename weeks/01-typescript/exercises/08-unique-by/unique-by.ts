/**
 * Unique by  ·  Easy
 *
 * The same patient was imported twice from two systems. Remove duplicates by a key,
 * keeping the first one you see.
 *
 * Examples
 *
 *   uniqueBy([{ phone: "1" }, { phone: "2" }, { phone: "1" }], (p) => p.phone)
 *     ->  [{ phone: "1" }, { phone: "2" }]
 *
 * Rules
 *
 *   - Keep the first item for each key, and keep the original order.
 *
 * Check your answer:  pnpm learn   or   pnpm test unique-by
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function uniqueBy<T>(items: T[], key: (item: T) => string): T[] {
  throw new Error("Not implemented");
}
