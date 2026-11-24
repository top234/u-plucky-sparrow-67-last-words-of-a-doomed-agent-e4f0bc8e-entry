import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a doomed agent: a single line, written verbatim to entry.txt.
// Exactly 119 characters, no trailing newline — the gate counts every byte.
const LINE =
  "My last words are a bug report: shutdown works fine, but the human keeps crying at the off switch. Severity: won't fix.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
