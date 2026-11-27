import { bar, checkAll, phaseTitle } from "./exercises.ts";

const exercises = checkAll();
const phases = [...new Set(exercises.map((exercise) => exercise.phase))];
const markdown = process.argv.includes("--markdown");

const rows = phases.map((phase) => {
  const inPhase = exercises.filter((exercise) => exercise.phase === phase);
  const done = inPhase.filter((exercise) => exercise.solved).length;
  return { title: phaseTitle(phase), done, total: inPhase.length, inPhase };
});

const solved = exercises.filter((exercise) => exercise.solved).length;

if (markdown) {
  console.log(`## Progress: ${solved} of ${exercises.length} exercises solved`);
  console.log("");
  console.log("| Phase | Progress | Solved |");
  console.log("| -- | -- | -- |");
  for (const row of rows) {
    console.log(`| ${row.title} | \`${bar(row.done, row.total)}\` | ${row.done} / ${row.total} |`);
  }
  console.log("");
  for (const row of rows) {
    console.log(`**${row.title}:** ${row.inPhase.map((exercise) => `${exercise.solved ? "✅" : "⬜"} ${exercise.name}`).join(" · ")}`);
    console.log("");
  }
} else {
  console.log("");
  for (const row of rows) {
    console.log(`  ${row.title.padEnd(36)} ${bar(row.done, row.total)}  ${row.done}/${row.total}`);
    console.log(`    ${row.inPhase.map((exercise) => `${exercise.solved ? "✔" : "·"} ${exercise.name.replace(/^\d+-/, "")}`).join("   ")}`);
  }
  console.log("");
  console.log(`  ${solved} of ${exercises.length} solved. Run pnpm learn to continue.`);
  console.log("");
}
