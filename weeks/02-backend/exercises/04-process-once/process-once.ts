/**
 * Process each event once  ·  Hard
 *
 * Message brokers deliver at least once, so the same event can arrive twice, even at the same moment.
 * Processing a payment or a reply twice is a real bug. Make a processor that runs each event id once.
 *
 * Examples
 *
 *   process({ id: "e1" }) twice      ->  handler runs once, both calls get the same result
 *   two calls for e1 at the same time ->  handler still runs once
 *   handler fails for e1             ->  the next process(e1) runs it again
 *
 * Rules
 *
 *   - Remember the result per event id.
 *   - A second call while the first is still running must wait for that same run.
 *   - Failures are not remembered, so the event can be retried.
 *
 * Check your answer:  pnpm learn   or   pnpm test process-once
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Event<T> {
  id: string;
  payload: T;
}

export class OnceProcessor<T> {
  constructor(private readonly handler: (event: Event<T>) => Promise<string>) {}

  process(_event: Event<T>): Promise<string> {
    throw new Error("Not implemented");
  }
}
