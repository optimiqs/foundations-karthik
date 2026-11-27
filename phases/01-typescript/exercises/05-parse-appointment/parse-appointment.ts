/**
 * Parse an appointment  ·  Medium
 *
 * Appointments arrive as JSON from outside systems, and outside data can be anything.
 * Check the input and either return a typed Appointment or say exactly which field is wrong.
 *
 * Examples
 *
 *   parseAppointment({ id: "a1", patientName: "Test Patient", startsAt: "2027-01-05T10:00:00.000Z", durationMinutes: 30 })
 *     ->  { ok: true, value: { ...with startsAt as a Date } }
 *   parseAppointment({ ...valid, durationMinutes: 300 })
 *     ->  { ok: false, error: "durationMinutes must be ..." }
 *   parseAppointment(null)  ->  { ok: false, error: "input must be an object" }
 *
 * Rules
 *
 *   - id and patientName are non-empty strings.
 *   - startsAt is a string that turns into a real date.
 *   - durationMinutes is a whole number from 5 to 240.
 *   - The error message names the field that is wrong; anything that is not an object is reported as input.
 *
 * Check your answer:  pnpm learn   or   pnpm test parse-appointment
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Appointment {
  id: string;
  patientName: string;
  startsAt: Date;
  durationMinutes: number;
}

export type ParseResult = { ok: true; value: Appointment } | { ok: false; error: string };

export function parseAppointment(input: unknown): ParseResult {
  throw new Error("Not implemented");
}
