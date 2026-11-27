import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { bar, checkAll, phaseTitle, relativePath, root, solutionFile } from "./exercises.ts";

const exercises = checkAll();
const solved = exercises.filter((exercise) => exercise.solved).length;
const next = exercises.find((exercise) => !exercise.solved);

console.log("");
console.log(`  ${bar(solved, exercises.length)}  ${solved} of ${exercises.length} exercises solved`);
console.log("");

if (next === undefined) {
  console.log("  Every exercise is solved. Brilliant work.");
  console.log("  Next: the phase project in your current phase README, and one LeetCode problem a day.");
  console.log("");
  process.exit(0);
}

const file = solutionFile(next.folder);
const statement = readFileSync(file, "utf8").split("*/")[0]?.replace("/**", "") ?? "";

console.log(`  ${phaseTitle(next.phase)}  ·  exercise ${next.name}`);
console.log(`  Open:  ${relativePath(file)}`);
console.log(`  Hints: ${relativePath(next.folder)}/HINTS.md`);
console.log(statement.split("\n").map((line) => line.replace(/^ \* ?/, "    ")).join("\n").trimEnd());
console.log("");
console.log("  Watching your file. Save it and the checks run again.");
console.log("  When everything is green, press q, commit, and run pnpm learn for the next one.");
console.log("");

spawnSync("pnpm", ["exec", "vitest", relativePath(next.folder)], { cwd: root, stdio: "inherit" });
