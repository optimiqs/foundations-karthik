/**
 * Patient repository  ·  Medium
 *
 * Business rules should not care where data is stored. A repository hides storage behind an
 * interface, and the service receives it from outside, so tests can pass an in-memory one.
 *
 * Examples
 *
 *   const service = new PatientService(new InMemoryPatientRepository(), () => "p-1")
 *   await service.register("Test Patient", "+15550100001")
 *     ->  { id: "p-1", name: "Test Patient", phone: "+15550100001" }
 *   registering the same phone again  ->  throws DuplicatePhoneError
 *
 * Rules
 *
 *   - Two patients can never share a phone number.
 *   - The service gets new ids from the function it was given.
 *   - Changing an object you returned must not change what is stored: store and return copies.
 *
 * Check your answer:  pnpm learn   or   pnpm test patient-repository
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Patient {
  id: string;
  name: string;
  phone: string;
}

export interface PatientRepository {
  save(patient: Patient): Promise<void>;
  findById(id: string): Promise<Patient | undefined>;
  findByPhone(phone: string): Promise<Patient | undefined>;
}

export class InMemoryPatientRepository implements PatientRepository {
  save(_patient: Patient): Promise<void> {
    throw new Error("Not implemented");
  }

  findById(_id: string): Promise<Patient | undefined> {
    throw new Error("Not implemented");
  }

  findByPhone(_phone: string): Promise<Patient | undefined> {
    throw new Error("Not implemented");
  }
}

export class DuplicatePhoneError extends Error {}

export class PatientService {
  constructor(
    private readonly repository: PatientRepository,
    private readonly newId: () => string,
  ) {}

  register(_name: string, _phone: string): Promise<Patient> {
    throw new Error("Not implemented");
  }
}
