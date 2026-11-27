import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AppointmentForm } from "./appointment-form";

function setup() {
  const onSubmit = vi.fn();
  render(<AppointmentForm onSubmit={onSubmit} />);
  const name = screen.getByLabelText("Patient name");
  const duration = screen.getByLabelText("Duration (minutes)");
  const submit = screen.getByRole("button", { name: "Book appointment" });
  return { onSubmit, name, duration, submit };
}

describe("AppointmentForm", () => {
  it("submits trimmed, typed values when the form is valid", async () => {
    const { onSubmit, name, duration, submit } = setup();
    await userEvent.type(name, "  Test Patient ");
    await userEvent.clear(duration);
    await userEvent.type(duration, "30");
    await userEvent.click(submit);
    expect(onSubmit).toHaveBeenCalledWith({ patientName: "Test Patient", durationMinutes: 30 });
  });
  it("shows an error for a missing name and does not submit", async () => {
    const { onSubmit, duration, submit } = setup();
    await userEvent.clear(duration);
    await userEvent.type(duration, "30");
    await userEvent.click(submit);
    expect(screen.getByText("Enter the patient's name")).toBeTruthy();
    expect(onSubmit).not.toHaveBeenCalled();
  });
  it("rejects a duration outside 5 to 240 minutes", async () => {
    const { onSubmit, name, duration, submit } = setup();
    await userEvent.type(name, "Test Patient");
    await userEvent.clear(duration);
    await userEvent.type(duration, "300");
    await userEvent.click(submit);
    expect(screen.getByText("Duration must be between 5 and 240 minutes")).toBeTruthy();
    expect(onSubmit).not.toHaveBeenCalled();
  });
  it("clears an error once the field is fixed and submitted again", async () => {
    const { onSubmit, name, duration, submit } = setup();
    await userEvent.clear(duration);
    await userEvent.type(duration, "30");
    await userEvent.click(submit);
    await userEvent.type(name, "Test Patient");
    await userEvent.click(submit);
    expect(screen.queryByText("Enter the patient's name")).toBeNull();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
