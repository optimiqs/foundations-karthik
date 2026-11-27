/**
 * Event bus  ·  Medium
 *
 * Parts of the app need to react when something happens, such as a message being sent,
 * without knowing about each other. An event bus lets them subscribe and publish.
 *
 * Examples
 *
 *   const bus = new EventBus<{ messageSent: { id: string } }>()
 *   const off = bus.on("messageSent", (p) => console.log(p.id))
 *   bus.emit("messageSent", { id: "m1" })   logs "m1"
 *   off()                                   stops listening
 *
 * Rules
 *
 *   - Handlers only receive the events they subscribed to, in the order they subscribed.
 *   - on returns a function that unsubscribes.
 *   - once handlers run a single time.
 *
 * Check your answer:  pnpm learn   or   pnpm test event-bus
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export type Handler<T> = (payload: T) => void;

export class EventBus<Events extends Record<string, unknown>> {
  on<K extends keyof Events>(_event: K, _handler: Handler<Events[K]>): () => void {
    throw new Error("Not implemented");
  }

  once<K extends keyof Events>(_event: K, _handler: Handler<Events[K]>): void {
    throw new Error("Not implemented");
  }

  emit<K extends keyof Events>(_event: K, _payload: Events[K]): void {
    throw new Error("Not implemented");
  }
}
