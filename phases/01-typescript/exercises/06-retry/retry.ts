/**
 * Retry  ·  Medium
 *
 * Sending a text can fail because the network blinks. Try a task again until it works,
 * up to a fixed number of attempts.
 *
 * Examples
 *
 *   retry(task, 5)  where task fails twice, then returns "done"  ->  "done" after 3 calls
 *   retry(task, 2)  where task always fails  ->  throws the error from the 2nd call
 *   retry(task, 0)  ->  throws a RangeError
 *
 * Rules
 *
 *   - Stop as soon as one attempt succeeds.
 *   - If every attempt fails, throw the error from the last attempt.
 *   - Fewer than 1 attempt is a mistake by the caller: throw a RangeError.
 *
 * Check your answer:  pnpm learn   or   pnpm test retry
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export async function retry<T>(task: () => Promise<T>, attempts: number): Promise<T> {
  throw new Error("Not implemented");
}
