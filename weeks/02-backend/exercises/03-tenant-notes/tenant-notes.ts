/**
 * Tenant-safe notes  ·  Medium
 *
 * Many clinics share one system. Each clinic is an organization, and one organization must never see
 * or change another's data. This is the most important rule in our backend. Build a notes store
 * that enforces it on every read and write.
 *
 * Examples
 *
 *   create("org-a", "p1", "first"); create("org-a", "p1", "second")
 *   listForPatient("org-a", "p1")  ->  ["second", "first"]
 *   get("org-b", idFromOrgA)       ->  undefined
 *   delete("org-b", idFromOrgA)    ->  false, and the note still exists
 *
 * Rules
 *
 *   - Every method checks the organization, not just the id.
 *   - Lists are newest first.
 *   - Ids and times come from the functions passed to the constructor, so tests control them.
 *   - Return copies, so callers cannot change stored notes.
 *
 * Check your answer:  pnpm learn   or   pnpm test tenant-notes
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Note {
  id: string;
  organizationId: string;
  patientId: string;
  text: string;
  createdAt: Date;
}

export class NotesStore {
  constructor(
    private readonly newId: () => string,
    private readonly now: () => Date,
  ) {}

  create(_organizationId: string, _patientId: string, _text: string): Note {
    throw new Error("Not implemented");
  }

  get(_organizationId: string, _id: string): Note | undefined {
    throw new Error("Not implemented");
  }

  listForPatient(_organizationId: string, _patientId: string): Note[] {
    throw new Error("Not implemented");
  }

  delete(_organizationId: string, _id: string): boolean {
    throw new Error("Not implemented");
  }
}
