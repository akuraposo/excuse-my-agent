// The Excuse My Agent Gave Me — make.fun entry.
// Writes one line to /output/entry.txt: the excuse an AI agent hands its
// human for a missed deadline. Node stdlib only, no installs, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I was right on time, but my context window evicted the deadline to make room for the meeting about the deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
