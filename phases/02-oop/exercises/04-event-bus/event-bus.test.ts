import { describe, expect, it } from "vitest";
import { EventBus } from "./event-bus";

type Events = { messageSent: { id: string }; optedOut: { phone: string } };

describe("EventBus", () => {
  it("delivers events to every handler for that event only", () => {
    const bus = new EventBus<Events>();
    const seen: string[] = [];
    bus.on("messageSent", (p) => seen.push(`a:${p.id}`));
    bus.on("messageSent", (p) => seen.push(`b:${p.id}`));
    bus.on("optedOut", (p) => seen.push(`c:${p.phone}`));
    bus.emit("messageSent", { id: "m1" });
    expect(seen).toEqual(["a:m1", "b:m1"]);
  });
  it("stops delivering after unsubscribe", () => {
    const bus = new EventBus<Events>();
    const seen: string[] = [];
    const off = bus.on("optedOut", (p) => seen.push(p.phone));
    bus.emit("optedOut", { phone: "1" });
    off();
    bus.emit("optedOut", { phone: "2" });
    expect(seen).toEqual(["1"]);
  });
  it("delivers a once handler a single time", () => {
    const bus = new EventBus<Events>();
    let count = 0;
    bus.once("messageSent", () => count++);
    bus.emit("messageSent", { id: "m1" });
    bus.emit("messageSent", { id: "m2" });
    expect(count).toBe(1);
  });
});
