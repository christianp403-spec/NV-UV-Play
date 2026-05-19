# NV⚡UV Play

**Simple game undervolting for NVIDIA GeForce cards. Fire and forget.**

> Open Alpha — Build 1 · v0.1.0-alpha

NV⚡UV Play is a lightweight undervolting tool for NVIDIA GeForce GPUs. Pick a tier, hit start, play. The tool watches for your games, applies your chosen voltage/frequency lock when the game starts, resets to stock when you quit. Pre-tuned community tiers cover the common cases; a custom profile per tier lets you dial things in if you want to go further.

It is the standalone sibling of [NV-UV](https://github.com/christianp403-spec/NV-UV), the full-featured undervolting and stress-testing toolkit. 

---

## What it does

- **Five tiers on Blackwell** (Eco · MFG · Balanced · Performance · Max), **four on Ada / Ampere / Turing** (no MFG tier). Community-tuned presets, plus one custom profile slot per tier.
- **Per-game profiles** with a global fallback, or a tier-defaults editor to retune what each tier means on your card.
- **Game watcher** — Auto-Apply on launch, Auto-Reset on quit, hot-swap mid-game. Win32 event-driven. Anti-flap cooldown (8 s) and minimum-runtime gate (30 s) keep alt-tab thrash from spamming the GPU. Silent alias-switch for multi-process games (Unreal Engine, Marvel Rivals).
- **Two apply algorithms** — *Gradient Lock* (ramp below, plateau above, Afterburner-style shape) and *Voltage Lock* (strict per-voltage, flat-tail above). Optional V-Droop Compensation.
- **Stabilizer** — TDR detection via Windows Event Log. On crash, the lock steps down 50 MHz (default) or raises voltage by 5 mV, your choice. Floors at 1500 MHz / 1050 mV. Resets after clean runs. Per-game persistent.
- **Tray icon** with tier-specific glyph + dynamic tooltip showing current game/tier/voltage/MHz. Toast notifications on every Apply / Reset / Hot-swap / Crash-recovery.
- **Expert Overrides** (hidden by default) — Power Limit slider 60-100 %, VRAM offset 0-3000 MHz, globally or per-tier.
- **Game library** — bundled starter database, auto-updates from this repo on startup. Manual add via Browse for .exe.
- **Direct NVAPI** — no MSI Afterburner installation required. Optional autostart at logon via Task Scheduler.

## What it doesn't do

- **No telemetry, no analytics, no network calls** except the optional game-library update check against this repo.
- **No real-time monitoring overlay.** For that, use one of:
  - [MSI Afterburner + RivaTuner Statistics Server](https://www.guru3d.com/download/msi-afterburner-beta-download/) — full overlay customization
  - [GPU-Z](https://www.techpowerup.com/download/gpu-z/) — quick sensor view and logging
  - [HWiNFO](https://www.hwinfo.com/) — deep telemetry, RTSS integration
  - **NVIDIA App** overlay — built-in to the GeForce driver
- **No per-point VF curve editor.** Play works at the tier level. For full curve editing, use [Green Curve](https://github.com/krautmaster/green-curve) by aufkrawall or [MSI Afterburner](https://www.guru3d.com/download/msi-afterburner-beta-download/). NV-UV main continues to exist alongside Play with its full scanner and stress-test suite.
- **No automatic stability scanner.** Play applies what you ask for; it doesn't loop to find your card's limits.

---

## How to install

Download `NV-UV-Play-<version>.exe` from [Releases](https://github.com/christianp403-spec/nv-uv-play/releases), put it anywhere, run it. No installer, no runtime to install. First run shows a one-time license acceptance, then you're in.

## Requirements

- **Windows 11** (latest cumulative update)
- **.NET 10 Runtime** — bundled
- **Latest NVIDIA Game Ready driver**
- **NVIDIA GeForce GPU** — see below

## Supported hardware

- **RTX 50-series (Blackwell)** — full support, primary test platform, five tiers including MFG.
- **RTX 40-series (Ada / Lovelace)** — full support, four tiers.
- **RTX 30 / 20-series (Ampere / Turing)** — experimental, untested by the author. Voltage Lock recommended (Gradient Lock falls back automatically). Feedback welcome.
- **RTX 10-series (Pascal) and older** — not supported.

## Supported games

The library lives in [`games/GameDatabase.json`](games/GameDatabase.json) and updates from this repo automatically on startup. If a game you play is missing, open an Issue or PR with the executable name and a Steam/store link. You can also add games manually inside Play via Add Game → Browse for .exe.

---

## License

NV⚡UV Play is **free for personal and non-commercial use**. Content creators, streamers, reviewers, and journalists are explicitly welcome to use, demonstrate, and feature it. Experts and technically skilled users are explicitly welcome to use Play on their own or other people's machines, help friends and community members, and tune systems for enthusiasts.

Charging money for the tool's output, OEM bundling, and selling tuning services with Play doing the actual work need a separate commercial license. Full terms: [LICENSE](LICENSE)

Commercial-license requests, OEM bundling, press inquiries: **christian.papaioannou@gmx.de**

## Credits

NV⚡UV Play uses [Green Curve](https://github.com/krautmaster/green-curve) by aufkrawall (MIT License) as the foundation for the native NVAPI bridge and the flat-tail technique that powers the Voltage Lock apply path. Without that prior work, Play wouldn't exist in its current form.

The Gradient Lock curve shape is inspired by the curve behavior popularized by Afterburner. Constants tuned from Ada / Blackwell reference profile analysis.

## Community

- **Discord** — coming with the public release
- **Forum thread** — [PCGH Extreme](https://extreme.pcgameshardware.de/) (with the public release)
- **Issues & feature requests** — [GitHub Issues](https://github.com/christianp403-spec/nv-uv-play/issues)

---

## A word on safety

NV⚡UV Play modifies GPU voltage and frequency settings. Wrong settings can crash games, freeze your desktop, or in rare cases destabilize the system. Every silicon sample is different — what runs Eco-stable on one card may need Balanced on another. The Stabilizer catches most crashes automatically, but ultimately you're driving. Use at your own risk.

On experimental families (Ampere / Turing) the tiers are unvalidated starting points — expect to dial back to Eco or Balanced if Max isn't stable.

NV⚡UV Play is currently in Open Alpha. Bugs, unexpected behavior, and breaking changes between versions are expected.
