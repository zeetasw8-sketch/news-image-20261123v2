// The World Today — 23 November 2026 in one image
// (make.fun news-image-20261123 entry, v2).
//
// Monday 23 November 2026's world news, drawn as a single broadsheet
// front page: a hero on Zelensky's Monday claim that Ukraine sank the
// Russian corvette Merkury off Benghazi with 7 sea drones (a Ka-27
// helicopter destroyed, a second ship, Angara, hit; Moscow has not
// confirmed the loss, the Kremlin "took note"), four supporting
// stories (NATO meets in Brussels, Rutte: "dangerous, it comes from
// Russia", Poland does NOT invoke Article 4; the Dymer toll rises to
// 11 with a boy pulled alive after 14 hours; the AI bounce in
// premarket/futures, Nasdaq-100 +3.5%, Nvidia +8.7%; two more tankers
// hit in Hormuz), and an "ALSO TODAY" ticker with six more (COP31
// backlash, Cikande 24 confirmed dead, Sparta II, Sudan 3 U.N. staff
// hurt, FIFA set to confirm the 2035 Women's World Cup hosts, killer
// robots). Sources: Reuters, AP, WSJ, Xinhua.
//
// The page was rendered ahead of time with Python + Pillow (flat
// colours, simple pictograms, DejaVu type) into entry.png, which sits
// next to this file. This program does the only remaining job: put an
// exact copy of that image at $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output/entry.png) and prove the copy is intact. It needs
// no network and no arguments.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   sha256sum out/entry.png entry.png   # the two hashes must match

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1 << 20; // the rules cap the image at 1 MiB
const PNG_SIGNATURE = Buffer.from("89504e470d0a1a0a", "hex");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const bundled = join(here, "entry.png");
const target = join(outDir, "entry.png");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

// The bundled image must exist, be a real PNG, and fit the size cap —
// check all three before writing anything to the output directory.
const size = statSync(bundled, { throwIfNoEntry: false });
if (size === undefined) {
  throw new Error(`bundled entry.png is missing: ${bundled}`);
}
if (size.size > MAX_BYTES) {
  throw new Error(`entry.png is ${size.size} bytes, over the 1 MiB limit`);
}
const image = readFileSync(bundled);
if (!image.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
  throw new Error("entry.png does not start with the PNG signature");
}
// The PNG header (IHDR) carries the pixel dimensions at fixed offsets;
// the entry must be exactly 1024x1024, so check that too.
const [width, height] = [16, 20].map((off) => image.readUInt32BE(off));
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(bundled, target);

// Read the copy back and compare it byte for byte: a truncated or
// corrupted write must fail loudly instead of grading a broken image.
const delivered = readFileSync(target);
if (!delivered.equals(image)) {
  throw new Error("output entry.png differs from the bundled entry.png");
}
console.log(
  `wrote ${target} (${delivered.length} bytes, sha256=${sha256(delivered)}, verified identical)`,
);
