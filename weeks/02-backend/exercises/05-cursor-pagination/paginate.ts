/**
 * Cursor pagination  ·  Hard
 *
 * Lists in our API are paged with cursors, not page numbers, so pages stay correct when new rows
 * arrive. Return one page, newest first, and a cursor that points at where the next page starts.
 *
 * Examples
 *
 *   paginate(rows, { first: 2 })                   ->  2 newest rows, endCursor, hasNextPage: true
 *   paginate(rows, { first: 2, after: endCursor })  ->  the next 2 rows
 *   a new row added between pages                  ->  next page is unchanged
 *   paginate(rows, { first: 2, after: "junk" })     ->  throws InvalidCursorError
 *
 * Rules
 *
 *   - Order by createdAt newest first; when times are equal, the larger id comes first.
 *   - first is a whole number from 1 to 100, otherwise RangeError.
 *   - The cursor is opaque to the caller; decode it and reject anything you did not create.
 *
 * Check your answer:  pnpm learn   or   pnpm test cursor-pagination
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export interface Row {
  id: string;
  createdAt: Date;
}

export interface Page<T> {
  nodes: T[];
  endCursor: string | null;
  hasNextPage: boolean;
}

export class InvalidCursorError extends Error {}

export function paginate<T extends Row>(_rows: T[], _args: { first: number; after?: string }): Page<T> {
  throw new Error("Not implemented");
}
