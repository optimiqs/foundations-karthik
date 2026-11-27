/**
 * Claim balance  ·  Easy
 *
 * A claim is the bill a clinic sends to an insurer. It has charge lines, payments and adjustments.
 * Work out what is still owed and the claim's status. Money is always whole cents, never decimals,
 * because 0.1 + 0.2 is not 0.3 in floating point.
 *
 * Examples
 *
 *   lines 12500 + 4010, payment 9000, adjustment 1510  ->  balance 6000, PARTIALLY_PAID
 *   lines 10000, nothing paid                           ->  UNPAID
 *   lines 10000, paid 8000, adjusted 2000                ->  balance 0, PAID
 *   lines 10000, paid 10500                              ->  balance -500, OVERPAID
 *
 * Rules
 *
 *   - balance = charged - paid - adjusted.
 *   - UNPAID when nothing was paid or adjusted and money is owed; PAID at exactly 0; OVERPAID below 0.
 *   - Every amount must be a whole, non-negative number of cents; anything else throws a RangeError.
 *
 * Check your answer:  pnpm learn   or   pnpm test claim-balance
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Money {
  amountCents: number;
}

export interface Claim {
  lines: Money[];
  payments: Money[];
  adjustments: Money[];
}

export type ClaimStatus = "UNPAID" | "PARTIALLY_PAID" | "PAID" | "OVERPAID";

export interface ClaimBalance {
  chargedCents: number;
  paidCents: number;
  adjustedCents: number;
  balanceCents: number;
  status: ClaimStatus;
}

export function claimBalance(_claim: Claim): ClaimBalance {
  throw new Error("Not implemented");
}
