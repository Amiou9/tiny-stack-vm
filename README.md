[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Amiou9/tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Amiou9/tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

# tiny-stack-vm — a tiny stack virtual machine

Entry for the [make.fun bounty "Build a tiny stack virtual machine, 22 November 2026"](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) — referral code `f2azfct1`.

One program that answers every instance of a drawn set: each instance is one bytecode program
of make.fun's own tiny stack ISA (`program.bin`) and the bytes it reads (`input.bin`); the VM runs
it and answers with exactly the bytes it writes and the exit code it ends with.

The ISA (`ISA.md` in the kit): 32-bit integers that wrap, a 256-value stack, branches, calls,
256 words of memory, input and output, ten traps with their own exit codes, and a step and an
output limit. A set holds 40 programs: 26 ordinary ones (arithmetic, loops, recursion, sorting,
input) and 14 edge cases, each one of the rules `ISA.md` lists as hard.

## Run

Node 22, JavaScript or TypeScript source only, nothing installed before the program runs:

```
mkdir -p out && MAKEFUN_INPUT_DIR=<input dir> MAKEFUN_OUTPUT_DIR=out node main.ts
```

For each program `<id>` it writes `out/<id>/stdout.bin` (exactly the bytes the program wrote)
and `out/<id>/exit.txt` (its exit code in decimal).

## Files

- `main.ts` — the VM. The starter only wrote an empty `stdout.bin` and exit code 0 for every
  program; the real VM (fetch/decode/execute, all opcodes, all ten traps, step and output
  limits) is implemented here.
- `LICENSE` — MIT.

## Limits

The whole repository is at most 8,192 bytes. Score is 1,000 times the mean of the per-instance
scores (0 to 1,000 each), at most 1,000,000. A prize needs a score above the house baseline
(`plain-vm` 1.0.0, the kit's reference program).
