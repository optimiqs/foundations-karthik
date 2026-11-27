/**
 * Phone number  ·  Easy
 *
 * Patients type their phone numbers in many ways. Before we can text them, every number must be
 * in one standard form called E.164: a plus sign, the country code 1, then 10 digits.
 * Return the cleaned number, or null when it is not a valid US number.
 *
 * Examples
 *
 *   toE164("(555) 010-0001")    ->  "+15550100001"
 *   toE164("1-555-010-0001")    ->  "+15550100001"
 *   toE164("+1 555 010 0001")   ->  "+15550100001"
 *   toE164("+44 20 7946 0000")  ->  null
 *   toE164("12345")             ->  null
 *
 * Rules
 *
 *   - Only US numbers are valid: 10 digits, or 11 digits that start with 1.
 *   - Spaces, dots, dashes, brackets and a leading + are allowed and ignored.
 *
 * Check your answer:  pnpm learn   or   pnpm test phone-number
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function toE164(input: string): string | null {
  throw new Error("Not implemented");
}
