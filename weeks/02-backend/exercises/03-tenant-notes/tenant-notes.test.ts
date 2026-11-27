import { describe, expect, it } from "vitest";
import { NotesStore } from "./tenant-notes";

function store() {
  let id = 0;
  let minute = 0;
  return new NotesStore(
    () => `note-${++id}`,
    () => new Date(Date.UTC(2027, 0, 5, 10, minute++)),
  );
}

describe("NotesStore", () => {
  it("creates notes and lists a patient's notes newest first", () => {
    const notes = store();
    notes.create("org-a", "p1", "first");
    notes.create("org-a", "p1", "second");
    notes.create("org-a", "p2", "other patient");
    expect(notes.listForPatient("org-a", "p1").map((note) => note.text)).toEqual(["second", "first"]);
  });
  it("never shows one organization's notes to another", () => {
    const notes = store();
    const note = notes.create("org-a", "p1", "private");
    expect(notes.get("org-b", note.id)).toBeUndefined();
    expect(notes.listForPatient("org-b", "p1")).toEqual([]);
  });
  it("never lets one organization delete another's note", () => {
    const notes = store();
    const note = notes.create("org-a", "p1", "private");
    expect(notes.delete("org-b", note.id)).toBe(false);
    expect(notes.get("org-a", note.id)?.text).toBe("private");
    expect(notes.delete("org-a", note.id)).toBe(true);
    expect(notes.get("org-a", note.id)).toBeUndefined();
  });
  it("does not let callers change stored notes through returned objects", () => {
    const notes = store();
    const note = notes.create("org-a", "p1", "original");
    note.text = "changed";
    const listed = notes.listForPatient("org-a", "p1");
    listed[0]!.text = "changed again";
    expect(notes.get("org-a", note.id)?.text).toBe("original");
  });
});
