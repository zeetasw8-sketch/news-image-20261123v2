[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/zeetasw8-sketch/news-image-20261123v2/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/zeetasw8-sketch/news-image-20261123v2/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The World Today — 23 November 2026 in one image (v2)

Entry for make.fun competition `news-image-20261123` ($100).
One 1024×1024 PNG that sums up Monday 23 November 2026's world
news — a navy broadsheet masthead, one dominant hero, four big cards,
and an "ALSO TODAY" ticker with six more stories — 11 stories in
total. This v2 strengthens the v1 entry (round 1 blind rank 240/7226,
score 704707) with Monday afternoon/evening developments: the hero is
now Zelensky's official claim, the Dymer and Cikande tolls are the
confirmed Monday figures, Hormuz has two new confirmed attacks, and
the market card uses labelled premarket/futures numbers (the NYSE
close was not yet available at render time).

## The 11 stories

### Hero — Kyiv Claims It: Merkury Sunk
On Monday, President Zelensky officially claims Ukraine sank the
Russian corvette Merkury off Benghazi with 7 sea drones, releasing
video of the strike; a Ka-27 helicopter was destroyed with the ship
and a second vessel, the cargo ship Angara, was hit. Moscow has not
confirmed the loss; the Kremlin says it "took note" and Russia's
envoy vows a response. 10 people hurt, none killed.
Sources: Reuters, CNN, The Times, 23 Nov 2026.

### Card 1 — Rutte: "Dangerous, It Comes From Russia"
The North Atlantic Council meets in emergency session in Brussels on
Monday after 3 Russian Kh-101 cruise missiles came down in Poland on
Friday. Poland does NOT formally invoke Article 4 and no joint
communique is expected; Rutte says the incident is dangerous and
comes from Russia, but refuses to speculate on intent. Tusk calls it
a "deliberate provocation".
Sources: Reuters, AsiaToday, 23 Nov 2026.

### Card 2 — Dymer: 11 Dead, Boy Alive After 14 Hrs
A Shahed drone flattens a stairwell in Dymer, 45 km north of Kyiv,
on Sunday morning. The death toll rises to 11 on Monday (from 9);
15 are killed across the Kyiv region, which marks Monday as a day of
mourning. A 7-year-old boy is pulled alive from the rubble after
about 14 hours; 2 people are still missing.
Sources: Reuters, 23 Nov 2026.

### Card 3 — AI Bounce Back: Nasdaq Futures +3.5%
After the Nasdaq's worst week since March 2020 (−10%), U.S. futures
bounce in Monday premarket: Nasdaq-100 +3.5%, S&P +2.7%, Dow +1.9%,
Nvidia +8.7% premarket as Trump urges Nvidia to rehire Jensen Huang
— but the board still refuses. All U.S. market figures are
premarket/futures, not the close.
Sources: Reuters, CNN, Barron's, 23 Nov 2026.

### Card 4 — Hormuz: Two More Tankers Hit
UKMTO reports two tankers hit, both with engine-room fires and no
one hurt. Iran claims two supertankers hit mines — unverified.
Brent crude trades around $92.
Sources: Al Jazeera, Reuters, WSJ, 23 Nov 2026.

### Also today
- COP31: Australia backlash — opposition demands minister Bowen quit
  after the A$150m flop; Pacific states "let down on all sides"
  (Reuters, 23 Nov 2026).
- Indonesia: Cikande candy-factory fire — 24 confirmed dead, ~30
  still missing; 29 survived. Suspected AC short circuit (Reuters,
  23 Nov 2026).
- Baltic: Sparta II towed out of Finnish waters Sunday night; no
  fuel leaked, 16 crew safe (Reuters, WSJ, 22–23 Nov 2026).
- Sudan: 3 U.N. staff hurt as drones hit Khartoum; Saudi Arabia and
  Egypt condemn the "brutal" attacks (23 Nov 2026).
- Football: FIFA set to confirm the U.K. and Ireland as 2035
  Women's World Cup hosts; vote due Monday (23 Nov 2026).
- U.N.: 128 states agree on 2 years of talks toward rules for
  "killer robots" — no binding pledge (22 Nov 2026).

## Render locally

```sh
cd ..
python3 render23v2.py    # writes entry-23v2/entry.png (1024x1024, < 1 MiB)
sha256sum entry-23v2/entry.png   # run twice: the hash must not change
```

Requirements: Python 3 with Pillow, DejaVu fonts
(`/usr/share/fonts/truetype/dejavu/`). The render is fully
deterministic — fixed palette, fixed fonts, no randomness, no clock —
so repeated runs produce byte-identical output. The render script
itself is not part of the entry (it lives one directory up).

## Run the entrypoint

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum out/entry.png entry.png   # both hashes must match
```

`main.ts` needs no network: it validates the bundled PNG (magic
bytes, 1024×1024 dimensions, 1 MiB cap), copies it to
`MAKEFUN_OUTPUT_DIR` (default `/output`), reads it back and verifies
the copy is byte-identical.

## License

MIT — see `LICENSE`.
