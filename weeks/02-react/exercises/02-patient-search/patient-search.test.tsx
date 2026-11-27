import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PatientSearch } from "./patient-search";

const patients = [
  { id: "1", name: "Avery Stone", phone: "+15550100001" },
  { id: "2", name: "Blake Rivers", phone: "+15550100002" },
  { id: "3", name: "Casey Avery", phone: "+15550100003" },
];

function names() {
  return screen.queryAllByRole("listitem").map((item) => item.textContent);
}

describe("PatientSearch", () => {
  it("lists every patient before anything is typed", () => {
    render(<PatientSearch patients={patients} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
  it("filters by name, ignoring case", async () => {
    render(<PatientSearch patients={patients} />);
    await userEvent.type(screen.getByRole("searchbox", { name: "Search patients" }), "avery");
    expect(names()).toHaveLength(2);
    expect(names().join(" ")).toContain("Avery Stone");
    expect(names().join(" ")).toContain("Casey Avery");
  });
  it("filters by phone number", async () => {
    render(<PatientSearch patients={patients} />);
    await userEvent.type(screen.getByRole("searchbox", { name: "Search patients" }), "0002");
    expect(names()).toHaveLength(1);
    expect(names()[0]).toContain("Blake Rivers");
  });
  it("says so when nothing matches", async () => {
    render(<PatientSearch patients={patients} />);
    await userEvent.type(screen.getByRole("searchbox", { name: "Search patients" }), "zzz");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    expect(screen.getByText("No patients match zzz")).toBeTruthy();
  });
});
