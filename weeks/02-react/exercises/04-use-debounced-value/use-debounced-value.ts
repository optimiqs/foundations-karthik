/**
 * Debounced value hook  ·  Medium
 *
 * Searching the server on every key press is wasteful. A debounced value only updates after the
 * user stops typing for a moment. Write it as a custom hook.
 *
 * Examples
 *
 *   useDebouncedValue("a", 300)  ->  "a" straight away
 *   value changes to "ab", then "abc" within 300 ms  ->  still "a"
 *   300 ms after the last change  ->  "abc"
 *
 * Rules
 *
 *   - Return the first value immediately.
 *   - Every new value restarts the wait.
 *
 * Check your answer:  pnpm learn   or   pnpm test use-debounced-value
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function useDebouncedValue<T>(_value: T, _delayMs: number): T {
  throw new Error("Not implemented");
}
