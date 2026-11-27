/**
 * Inbound SMS webhook  ·  Medium
 *
 * When a patient texts the clinic, the SMS provider calls our webhook with JSON. Outside data cannot
 * be trusted, so we check it once at the boundary with Zod and pass a typed value inward.
 *
 * Examples
 *
 *   { messageId: "msg_1", from: "+15550100001", to: "+15550100002", body: "  Yes  ", receivedAt: "2027-01-05T10:00:00.000Z" }
 *     ->  { ...same, body: "Yes", receivedAt: Date }
 *   { ...valid, from: "5550100001" }  ->  throws InvalidWebhookError with field "from"
 *
 * Rules
 *
 *   - from and to are US numbers in E.164 form: +1 and 10 digits.
 *   - body may be empty, is trimmed, and is at most 1600 characters.
 *   - receivedAt is an ISO date-time and becomes a Date.
 *   - Unknown fields are dropped. The error names the first bad field.
 *
 * Check your answer:  pnpm learn   or   pnpm test inbound-sms
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface InboundSms {
  messageId: string;
  from: string;
  to: string;
  body: string;
  receivedAt: Date;
}

export class InvalidWebhookError extends Error {
  constructor(readonly field: string) {
    super(`Invalid webhook field: ${field}`);
  }
}

export function parseInboundSms(_input: unknown): InboundSms {
  throw new Error("Not implemented");
}
