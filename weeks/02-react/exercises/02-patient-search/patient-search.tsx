/**
 * Patient search  ·  Medium
 *
 * Staff find patients by typing part of a name or phone number. Build a search box that filters
 * the list as they type, and says so clearly when nothing matches.
 *
 * Examples
 *
 *   Typing "avery" shows Avery Stone and Casey Avery
 *   Typing "0002" shows the patient whose phone contains 0002
 *   Typing "zzz" shows "No patients match zzz"
 *
 * Rules
 *
 *   - The search box is an input of type search, labelled "Search patients".
 *   - Matching ignores upper and lower case.
 *   - Each patient is a list item showing their name and phone.
 *
 * Check your answer:  pnpm learn   or   pnpm test patient-search
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
import type { ReactNode } from "react";

export interface Patient {
  id: string;
  name: string;
  phone: string;
}

export function PatientSearch(_props: { patients: Patient[] }): ReactNode {
  throw new Error("Not implemented");
}
