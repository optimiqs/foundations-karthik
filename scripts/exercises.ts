import { spawnSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";

export interface Exercise {
  phase: string;
  name: string;
  folder: string;
  solved: boolean;
}

const root = join(import.meta.dirname, "..");

const phaseTitles: Record<string, string> = {
  "01-typescript": "Phase 1 · TypeScript",
  "02-oop": "Phase 2 · Object-oriented design",
  "03-dsa": "Phase 3 · Data structures",
};

export function phaseTitle(phase: string): string {
  return phaseTitles[phase] ?? phase;
}

function exerciseFolders(): { phase: string; name: string; folder: string }[] {
  return Object.keys(phaseTitles).flatMap((phase) => {
    const base = join(root, "phases", phase, "exercises");
    return readdirSync(base, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
      .map((name) => ({ phase, name, folder: join(base, name) }));
  });
}

interface VitestReport {
  testResults: { name: string; status: string }[];
}

export function checkAll(): Exercise[] {
  const dir = mkdtempSync(join(tmpdir(), "learn-"));
  const output = join(dir, "report.json");
  spawnSync("pnpm", ["exec", "vitest", "run", "--reporter=json", `--outputFile=${output}`], {
    cwd: root,
    stdio: "ignore",
  });
  const report = JSON.parse(readFileSync(output, "utf8")) as VitestReport;
  rmSync(dir, { recursive: true, force: true });
  return exerciseFolders().map((exercise) => {
    const results = report.testResults.filter((result) => result.name.startsWith(`${exercise.folder}/`));
    return { ...exercise, solved: results.length > 0 && results.every((result) => result.status === "passed") };
  });
}

export function relativePath(path: string): string {
  return relative(root, path);
}

export function solutionFile(folder: string): string {
  const file = readdirSync(folder).find((name) => name.endsWith(".ts") && !name.endsWith(".test.ts"));
  return join(folder, file ?? "");
}

export function bar(done: number, total: number, width = 20): string {
  const filled = total === 0 ? 0 : Math.round((done / total) * width);
  return `${"█".repeat(filled)}${"░".repeat(width - filled)}`;
}

export { root };
