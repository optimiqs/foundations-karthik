/**
 * Appointment form  ·  Medium
 *
 * Booking an appointment starts with a small form. Check the input with Zod, show a clear message
 * next to each wrong field, and only submit when everything is valid.
 *
 * Examples
 *
 *   name "  Test Patient ", duration 30  ->  onSubmit({ patientName: "Test Patient", durationMinutes: 30 })
 *   empty name                         ->  "Enter the patient's name", nothing submitted
 *   duration 300                       ->  "Duration must be between 5 and 240 minutes"
 *
 * Rules
 *
 *   - Fields are labelled "Patient name" and "Duration (minutes)"; the button says "Book appointment".
 *   - The name is trimmed; the duration is a whole number from 5 to 240.
 *   - Errors disappear once the form is submitted again with the field fixed.
 *
 * Check your answer:  pnpm learn   or   pnpm test appointment-form
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
import type { ReactNode } from "react";

export interface AppointmentInput {
  patientName: string;
  durationMinutes: number;
}

export function AppointmentForm(_props: { onSubmit: (input: AppointmentInput) => void }): ReactNode {
  throw new Error("Not implemented");
}
