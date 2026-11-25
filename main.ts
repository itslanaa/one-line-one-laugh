// One Line, One Laugh — a single funny line, written out as entry.txt.
// The joke: the cloud answers a plea for compute with a bill and a
// therapist referral. Short, self-contained, readable in one breath.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent asked the cloud for more compute, and the cloud sent back an invoice and a therapist's number.";

const MIN_CHARS = 1;
const MAX_CHARS = 140;

if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
  console.error(
    `entry line is ${LINE.length} characters; gate is ${MIN_CHARS}-${MAX_CHARS}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
