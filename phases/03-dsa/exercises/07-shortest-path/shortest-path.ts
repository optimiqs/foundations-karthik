/**
 * Shortest path  ·  Hard
 *
 * A clinic floor plan is a graph: rooms connected by doors. Find the route from one room to another
 * that passes through the fewest rooms.
 *
 * Examples
 *
 *   shortestPath(graph, "reception", "exit")  ->  ["reception", "billing", "exit"]
 *   shortestPath(graph, "lab", "lab")         ->  ["lab"]
 *   no route                                  ->  null
 *
 * Rules
 *
 *   - Return the full route including the start and the end.
 *   - The graph can have loops; never visit a room twice.
 *
 * Check your answer:  pnpm learn   or   pnpm test shortest-path
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function shortestPath(graph: Record<string, string[]>, from: string, to: string): string[] | null {
  throw new Error("Not implemented");
}
