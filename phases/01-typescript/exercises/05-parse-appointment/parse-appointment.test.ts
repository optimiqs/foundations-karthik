import { describe, expect, it } from "vitest";
import { parseAppointment } from "./parse-appointment";

const valid = { id: "a1", patientName: "Test Patient", startsAt: "2027-01-05T10:00:00.000Z", durationMinutes: 30 };

describe("parseAppointment", () => {
  it("accepts a valid appointment and converts the date", () => {
    const result = parseAppointment(valid);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.startsAt.toISOString()).toBe(valid.startsAt);
      expect(result.value.durationMinutes).toBe(30);
    }
  });
  it.each([
    [null, "input"],
    ["text", "input"],
    [{ ...valid, id: "" }, "id"],
    [{ ...valid, patientName: 42 }, "patientName"],
    [{ ...valid, startsAt: "not a date" }, "startsAt"],
    [{ ...valid, durationMinutes: 2 }, "durationMinutes"],
    [{ ...valid, durationMinutes: 300 }, "durationMinutes"],
    [{ ...valid, durationMinutes: 12.5 }, "durationMinutes"],
  ])("rejects %j and names the field", (input, field) => {
    const result = parseAppointment(input);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toContain(field);
    }
  });
});
