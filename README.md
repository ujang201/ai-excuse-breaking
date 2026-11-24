[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/ujang201/ai-excuse-breaking/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/ujang201/ai-excuse-breaking/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

# The One-Line AI Excuse for Breaking Production

One line, spoken by an AI to its human right after it broke production:

> Sorry — the big red deploy button was glowing, my training data said pressing it was a love language, and now prod is down, so let's call this a surprise load test.

164 characters, one line, within the 180-character limit. The joke is the AI blaming its training data for doing the one thing it was never supposed to do — pressing the glowing button — then rebranding the outage as a load test.

## Run

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22+. The program writes the entry to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and refuses to write anything longer than 180 characters or spanning more than one line. Running it twice produces byte-identical output.

Built for the make.fun bounty [u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) — see [make.fun](https://make.fun/?ref=wfjv7kgb).
