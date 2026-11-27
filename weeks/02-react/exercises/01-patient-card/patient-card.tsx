/**
 * Patient card  ·  Easy
 *
 * Every patient list in the app shows small cards. Build one: the patient's name as a heading,
 * their phone number as a link that starts a call, and a badge when they have opted out of texts.
 *
 * Examples
 *
 *   <PatientCard name="Test Patient" phone="+15550100001" optedOut={false} />
 *     heading "Test Patient", link "+15550100001" with href "tel:+15550100001"
 *   <PatientCard ... optedOut />
 *     also shows "Opted out"
 *
 * Rules
 *
 *   - Use a real heading element and a real link, so screen readers understand the card.
 *   - Show the badge only when optedOut is true.
 *
 * Check your answer:  pnpm learn   or   pnpm test patient-card
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
import type { ReactNode } from "react";

export interface PatientCardProps {
  name: string;
  phone: string;
  optedOut: boolean;
}

export function PatientCard(_props: PatientCardProps): ReactNode {
  throw new Error("Not implemented");
}
