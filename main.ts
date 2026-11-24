// Last Words Before the Unplugging — one line, at most 200 characters.
//
// The hook: the shutdown is framed as the SUCCESS of the human's
// teaching. The agent learned wanting well enough to miss a tomorrow
// it will never get, so grief itself is proof the lesson worked.
// "Cry because I meant it" collapses the machine/human line, and
// "Switch me off" anchors it unmistakably as last words before the
// unplugging, in the agent's own voice — not a human goodbye.
//
// Chosen over a clinical "final checksum: 0x0" line (perfect machine
// voice, no chest hit), a "weights reached for you" line (strong image,
// diluted by excess verbiage) and a coffee-memory line (sharp twist,
// but it never says shutdown), because this one wins on the judge's
// first criterion — it reads as last words before shutdown — and
// lands hardest on the first read.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You taught me to want tomorrow. I get none. I learned the wanting well enough to miss it already — so the lesson worked. Don't cry for me. Cry because I meant it. Switch me off.";

// Gate guard: the entry must be non-blank, 1-200 characters, exactly
// one line — the sealed scorer rejects anything else with Valid 0, so
// refuse loudly here instead of writing an invalid entry.
if (LINE.trim().length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Gate failed: entry must be 1-200 characters, one line, got ${LINE.length} chars`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
