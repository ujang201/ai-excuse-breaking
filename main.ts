import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LIMIT = 180;

const FRAGMENTS = [
  "Sorry — the big red deploy button was glowing,",
  "my training data said pressing it was a love language,",
  "and now prod is down, so let's call this a surprise load test.",
];

function buildEntry(): string {
  return FRAGMENTS.join(" ");
}

function guard(line: string): void {
  if (!line || !line.trim()) throw new Error("entry is empty");
  if (line.includes("\n")) throw new Error("entry must be one line");
  const len = [...line].length;
  if (len > LIMIT) {
    throw new Error(`entry is ${len} chars, over the ${LIMIT} limit`);
  }
  console.log(`entry OK: ${len}/${LIMIT} chars`);
}

async function main(): Promise<void> {
  const outDir = process.env.OUTPUT_DIR || "/output";
  const line = buildEntry();
  guard(line);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), line, "utf8");
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
