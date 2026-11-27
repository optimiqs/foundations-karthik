import { describe, expect, it } from "vitest";
import { DuplicatePhoneError, InMemoryPatientRepository, PatientService } from "./patients";

describe("PatientService", () => {
  it("registers a patient with a generated id", async () => {
    const repository = new InMemoryPatientRepository();
    const service = new PatientService(repository, () => "p-1");
    const patient = await service.register("Test Patient", "+15550100001");
    expect(patient).toEqual({ id: "p-1", name: "Test Patient", phone: "+15550100001" });
    await expect(repository.findById("p-1")).resolves.toEqual(patient);
  });
  it("refuses a phone number that is already registered", async () => {
    let n = 0;
    const service = new PatientService(new InMemoryPatientRepository(), () => `p-${++n}`);
    await service.register("First", "+15550100001");
    await expect(service.register("Second", "+15550100001")).rejects.toThrow(DuplicatePhoneError);
  });
  it("does not let callers change stored patients by mutating the result", async () => {
    const repository = new InMemoryPatientRepository();
    const service = new PatientService(repository, () => "p-1");
    const patient = await service.register("Test Patient", "+15550100001");
    patient.name = "Changed";
    await expect(repository.findById("p-1")).resolves.toMatchObject({ name: "Test Patient" });
  });
});
