import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8
// The word: "defenestration" — the act of throwing someone out of a window.
// Why it wins the judge brief: it is surprising (nobody guesses it), vivid and
// specific (one image lands instantly — a body sailing out of a window), and it
// carries a spark of wit and history (the Defenestrations of Prague). It feels
// chosen, not generic filler, and it is exactly one word.
const TEXT = "defenestration";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters, not only
// whitespace, and exactly one word (no spaces). One combined check keeps the
// rule in a single place.
const MAX_LEN = 24;
if (
  typeof TEXT !== "string" ||
  TEXT.length < 1 ||
  TEXT.length > MAX_LEN ||
  TEXT.trim().length === 0 ||
  /\s/.test(TEXT)
) {
  throw new Error(
    `gate: entry must be exactly one word of 1-${MAX_LEN} characters, got ${JSON.stringify(TEXT)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
