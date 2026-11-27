/**
 * Notifier  ·  Medium
 *
 * A patient can be reached by text, email or voice. Each channel can fail.
 * Try the patient's preferred channels in order and stop at the first one that works.
 *
 * Examples
 *
 *   notify("p1", "hi", ["sms", "email"])  sms fails, email works   ->  "email"
 *   notify("p1", "hi", ["push", "email"])  push is unknown         ->  "email"
 *   notify("p1", "hi", ["sms"])           sms fails               ->  throws "All channels failed"
 *
 * Rules
 *
 *   - Try channels in the preferred order, one at a time.
 *   - Skip names that do not match any channel.
 *   - Return the name of the channel that worked.
 *
 * Check your answer:  pnpm learn   or   pnpm test notifier
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Channel {
  readonly name: string;
  send(to: string, message: string): Promise<void>;
}

export class Notifier {
  constructor(private readonly channels: Channel[]) {}

  notify(_to: string, _message: string, _preferred: string[]): Promise<string> {
    throw new Error("Not implemented");
  }
}
