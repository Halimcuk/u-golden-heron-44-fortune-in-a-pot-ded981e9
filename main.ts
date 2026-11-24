// Fortune in a Pot — a kind, funny fortune for a houseplant.
// The entry line is held as a single constant and written unchanged
// to entry.txt on every run, so the output is fully deterministic.
// No trailing newline is written, keeping the file exactly 109 chars.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Soon a brand-new leaf will unfurl on your sunny sill, and your keeper will grin like they grew it themselves.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
