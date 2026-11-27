import { describe, expect, it } from "vitest";
import { type Channel, Notifier } from "./notifier";

function channel(name: string, works: boolean, log: string[]): Channel {
  return {
    name,
    async send(to, message) {
      log.push(`${name}:${to}:${message}`);
      if (!works) {
        throw new Error(`${name} down`);
      }
    },
  };
}

describe("Notifier", () => {
  it("uses the first preferred channel that works", async () => {
    const log: string[] = [];
    const notifier = new Notifier([channel("sms", false, log), channel("email", true, log)]);
    await expect(notifier.notify("p1", "hi", ["sms", "email"])).resolves.toBe("email");
    expect(log).toEqual(["sms:p1:hi", "email:p1:hi"]);
  });
  it("skips channel names it does not know", async () => {
    const log: string[] = [];
    const notifier = new Notifier([channel("email", true, log)]);
    await expect(notifier.notify("p1", "hi", ["push", "email"])).resolves.toBe("email");
  });
  it("throws when every channel fails", async () => {
    const log: string[] = [];
    const notifier = new Notifier([channel("sms", false, log)]);
    await expect(notifier.notify("p1", "hi", ["sms"])).rejects.toThrow("All channels failed");
  });
});
