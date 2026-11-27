import { describe, expect, it } from "vitest";
import { InvalidWebhookError, parseInboundSms } from "./inbound-sms";

const valid = {
  messageId: "msg_1",
  from: "+15550100001",
  to: "+15550100002",
  body: "  Yes, see you then  ",
  receivedAt: "2027-01-05T10:00:00.000Z",
  carrier: "ignored",
};

describe("parseInboundSms", () => {
  it("returns a typed message with a trimmed body and a real date", () => {
    expect(parseInboundSms(valid)).toEqual({
      messageId: "msg_1",
      from: "+15550100001",
      to: "+15550100002",
      body: "Yes, see you then",
      receivedAt: new Date("2027-01-05T10:00:00.000Z"),
    });
  });
  it("drops fields we do not use", () => {
    expect(parseInboundSms(valid)).not.toHaveProperty("carrier");
  });
  it("accepts an empty body", () => {
    expect(parseInboundSms({ ...valid, body: "" }).body).toBe("");
  });
  it.each([
    [{ ...valid, messageId: "" }, "messageId"],
    [{ ...valid, from: "5550100001" }, "from"],
    [{ ...valid, to: "+445550100002" }, "to"],
    [{ ...valid, body: "x".repeat(1601) }, "body"],
    [{ ...valid, receivedAt: "yesterday" }, "receivedAt"],
    [{ ...valid, receivedAt: undefined }, "receivedAt"],
  ])("rejects a bad %s and names the field", (input, field) => {
    try {
      parseInboundSms(input);
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidWebhookError);
      expect((error as InvalidWebhookError).field).toBe(field);
    }
  });
  it("rejects input that is not an object", () => {
    expect(() => parseInboundSms("hello")).toThrow(InvalidWebhookError);
  });
});
