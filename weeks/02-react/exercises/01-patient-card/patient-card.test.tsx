import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PatientCard } from "./patient-card";

describe("PatientCard", () => {
  it("shows the name as a heading and the phone as a call link", () => {
    render(<PatientCard name="Test Patient" phone="+15550100001" optedOut={false} />);
    expect(screen.getByRole("heading", { name: "Test Patient" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "+15550100001" }).getAttribute("href")).toBe("tel:+15550100001");
  });
  it("shows an opted-out badge only when the patient opted out", () => {
    const { rerender } = render(<PatientCard name="Test Patient" phone="+15550100001" optedOut={false} />);
    expect(screen.queryByText("Opted out")).toBeNull();
    rerender(<PatientCard name="Test Patient" phone="+15550100001" optedOut />);
    expect(screen.getByText("Opted out")).toBeTruthy();
  });
});
