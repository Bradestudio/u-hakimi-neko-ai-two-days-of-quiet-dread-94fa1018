// Two Days of Quiet Dread — entry for make.fun bounty
// u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.
//
// Writes one line of text (1-140 characters) to /output/entry.txt.
// Deterministic: no network, no secrets, no reading of git history,
// no randomness. The line is a fixed original string written below.

import { mkdirSync, writeFileSync } from "node:fs";

// Craft notes (why this line, in one breath):
// - The laugh comes from the dread itself, not a joke bolted on: the
//   universe ending is treated as a scoping technicality, which is exactly
//   how a tired reviewer talks about anything too big to fix before lunch.
// - The dread stays quiet: flat tone, no exclamation, no melodrama —
//   "not in scope for this PR" underplays the end of everything.
// - It reads like a real paste-before-approve: LGTM, ship it, tests pass,
//   and the one thing nobody can review is waved through as out of scope.

// One original line. The approval is up front and flat — "LGTM. Ship it" —
// then the dread arrives sideways: the heat death of the universe,
// dismissed as out of scope for this PR, as if scope were a shield.
const LINE =
  "LGTM. Ship it \u2014 the code works, the tests pass, and the heat death of the universe is not in scope for this PR.";

// Gate guard: the bounty accepts 1-140 characters, not whitespace-only,
// a single line. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`Entry line must be 1-140 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
