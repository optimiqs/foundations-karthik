import { describe, expect, it } from "vitest";
import { claimBalance } from "./claim-balance";

const cents = (...amounts: number[]) => amounts.map((amountCents) => ({ amountCents }));

describe("claimBalance", () => {
  it("adds up charges, payments and adjustments in cents", () => {
    expect(claimBalance({ lines: cents(12_500, 4_010), payments: cents(9_000), adjustments: cents(1_510) })).toEqual({
      chargedCents: 16_510,
      paidCents: 9_000,
      adjustedCents: 1_510,
      balanceCents: 6_000,
      status: "PARTIALLY_PAID",
    });
  });
  it.each([
    [cents(10_000), cents(), cents(), "UNPAID", 10_000],
    [cents(10_000), cents(8_000), cents(2_000), "PAID", 0],
    [cents(10_000), cents(10_500), cents(), "OVERPAID", -500],
    [cents(), cents(), cents(), "PAID", 0],
  ] as const)("works out the status %#", (lines, payments, adjustments, status, balanceCents) => {
    const result = claimBalance({ lines: [...lines], payments: [...payments], adjustments: [...adjustments] });
    expect(result.status).toBe(status);
    expect(result.balanceCents).toBe(balanceCents);
  });
  it("counts an adjustment alone as no longer unpaid", () => {
    expect(claimBalance({ lines: cents(10_000), payments: cents(), adjustments: cents(3_000) }).status).toBe("PARTIALLY_PAID");
  });
  it.each([10.5, -100, Number.NaN])("rejects an amount of %s cents", (amountCents) => {
    expect(() => claimBalance({ lines: [{ amountCents }], payments: [], adjustments: [] })).toThrow(RangeError);
    expect(() => claimBalance({ lines: cents(100), payments: [{ amountCents }], adjustments: [] })).toThrow(RangeError);
  });
});
