import { describe, expect, it } from "vitest";
import { Appointment, InvalidTransitionError } from "./appointment";

describe("Appointment", () => {
  it("starts scheduled and moves through its life", () => {
    const appointment = new Appointment("a1");
    expect(appointment.status).toBe("scheduled");
    appointment.checkIn();
    appointment.complete();
    expect(appointment.status).toBe("completed");
    expect(appointment.history).toEqual(["scheduled", "checked-in", "completed"]);
  });
  it("can be cancelled before it is completed", () => {
    const appointment = new Appointment("a2");
    appointment.checkIn();
    appointment.cancel("patient left");
    expect(appointment.status).toBe("cancelled");
  });
  it.each([
    ["complete before check-in", (a: Appointment) => a.complete()],
    ["check in twice", (a: Appointment) => { a.checkIn(); a.checkIn(); }],
    ["cancel after completion", (a: Appointment) => { a.checkIn(); a.complete(); a.cancel("late"); }],
    ["check in after cancellation", (a: Appointment) => { a.cancel("sick"); a.checkIn(); }],
  ])("rejects: %s", (_name, act) => {
    expect(() => act(new Appointment("x"))).toThrow(InvalidTransitionError);
  });
  it("does not let callers change the history", () => {
    const appointment = new Appointment("a3");
    appointment.history.push("completed");
    expect(appointment.history).toEqual(["scheduled"]);
  });
});
