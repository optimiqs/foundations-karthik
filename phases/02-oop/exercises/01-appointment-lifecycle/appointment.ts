/**
 * Appointment lifecycle  ·  Medium
 *
 * An appointment moves through a fixed life: scheduled, then checked-in, then completed.
 * It can be cancelled any time before it is completed. Any other move is a bug, so refuse it.
 *
 * Examples
 *
 *   const a = new Appointment("a1")   status: "scheduled"
 *   a.checkIn(); a.complete()          status: "completed"
 *   a.history                          ["scheduled", "checked-in", "completed"]
 *   a.complete() before checkIn()      throws InvalidTransitionError
 *
 * Rules
 *
 *   - Allowed moves: scheduled -> checked-in -> completed, and scheduled or checked-in -> cancelled.
 *   - Every other move throws InvalidTransitionError.
 *   - history lists every status in order. Changing the returned array must not change the appointment.
 *
 * Check your answer:  pnpm learn   or   pnpm test appointment-lifecycle
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export type AppointmentStatus = "scheduled" | "checked-in" | "completed" | "cancelled";

export class InvalidTransitionError extends Error {}

export class Appointment {
  constructor(readonly id: string) {}

  get status(): AppointmentStatus {
    throw new Error("Not implemented");
  }

  get history(): AppointmentStatus[] {
    throw new Error("Not implemented");
  }

  checkIn(): void {
    throw new Error("Not implemented");
  }

  complete(): void {
    throw new Error("Not implemented");
  }

  cancel(_reason: string): void {
    throw new Error("Not implemented");
  }
}
