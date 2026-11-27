/**
 * LRU cache  ·  Hard
 *
 * A cache keeps recently used data close by. When it is full, it drops the entry used least recently.
 *
 * Examples
 *
 *   capacity 2: set a, set b, get a, set c  ->  b is dropped
 *   set on an existing key updates it and makes it most recent
 *
 * Rules
 *
 *   - get and set must both be fast, not a loop over every entry.
 *   - get on a missing key returns undefined.
 *
 * Check your answer:  pnpm learn   or   pnpm test lru-cache
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export class LRUCache<K, V> {
  constructor(readonly capacity: number) {}

  get(_key: K): V | undefined {
    throw new Error("Not implemented");
  }

  set(_key: K, _value: V): void {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
