# NV⚡UV Play 2

**Kilby DEV Alpha — NVIDIA GPU undervolting, game profiles, DCC and a customizable overlay.**

NV⚡UV Play applies your chosen GPU profile when a game starts. Use the community presets, create your own voltage/frequency curve, or enable DCC to adjust GPU clocks during gameplay. Version 2 brings these features together with a UV scanner, shared profiles and an integrated monitoring overlay.

**Current release: [v2.0.1 Alpha — Enhanced Overlay](https://github.com/christianp403-spec/NV-UV-Play/releases/tag/v2.0.1).** This is an early development prerelease for testing.

**Coming in v2.0.2 Alpha: NVIDIA GPU selection.** On systems with multiple NVIDIA GPUs, choose the card Play should control in **Settings → NVIDIA GPU for Play**. The startup picker asks for a choice when needed, and Play remembers the selected card. Changes take effect after restarting Play. This feature is not included in the v2.0.1 download yet.

Play is the standalone sibling of [NV-UV](https://github.com/christianp403-spec/NV-UV).

## What's in version 2

- **Profiles and UV Pilot:** six profile slots, shared global and per-game profiles, automatic game detection and per-game exceptions.
- **Curve editor:** edit individual voltage/frequency points, use Undo/Redo, and adjust power limits and VRAM offsets.
- **UV scanner:** configurable tests, saved results and history, NVIDIA Auto-UV starting points and UV Try community profiles.
- **DCC:** Automatic clock regulation with per-game learning, plus an experimental NVIDIA Power Efficiency mode.
- **Enhanced Overlay in v2.0.1:** one settings window for display, readings, layout, colors and saved overlay profiles, with a live preview. Select and move readings in the preview, or start from the existing defaults.
- **Performance readings:** FPS, 1% lows, frame times, GPU usage, voltage, power, clocks and temperatures, plus available CPU and RAM readings. Sensor availability depends on the hardware; some readings require optional PawnIO setup.
- **Stabilizer and Smart Hz:** profile corrections after detected driver crashes and automatic display refresh-rate switching.
- **Game library, diagnostics and updates:** game database updates, game requests, diagnostic exports and optional report uploads, plus a signed in-app updater.

## Install or update

For a new installation:

1. Download the **portable ZIP** from [Releases](https://github.com/christianp403-spec/NV-UV-Play/releases).
2. Extract the **entire ZIP** into its own folder, separate from an NV-UV installation. Keep the supplied files and subfolders together.
3. Run `NV-UV-Play.exe`. The .NET runtime is bundled; no separate runtime installation is needed.

If your Play version already includes the updater, use **Updates → Check now → Download → Install & restart**. Installation asks for confirmation. The v2.0.1 release also serves as a test of updating in place from v2.0 while preserving profiles and settings. A manual download of the full portable ZIP remains available.

**Please do not use MSI Afterburner together with Play.** Running both at the same time may cause conflicts in GPU voltage settings.

## Requirements and hardware support

- **Windows 11**, with current Windows updates and an up-to-date NVIDIA driver.
- **NVIDIA desktop GeForce RTX 20-, 30-, 40- or 50-series GPU.** The current Kilby test release has been tested by the developer only on Blackwell / RTX 50-series. Other supported desktop families still need validation; Ampere and Turing remain experimental.
- **Notebooks are excluded from this test release.**
- **Multi-GPU in v2.0.2 Alpha:** profiles, readings and DCC Automatic use the selected NVIDIA GPU. Choose the card used by your game; Play does not change the game's or Lossless Scaling's GPU assignment. If the saved card is unavailable, Play requires a new selection instead of silently switching cards. The scanner and NVIDIA Experimental currently require a single NVIDIA GPU. Multi-GPU hardware validation is still pending; the public v2.0.1 build has no GPU selector.

## Using DCC

**DCC Automatic** adjusts GPU clocks for a detected game and saves its learning per game. Its status shows the current learning or regulation stage.

**NVIDIA Experimental** requests the driver's Power Efficiency mode. Its efficiency target is separate from an FPS limiter and is not a guaranteed frame rate. Configure this mode before launching a game; restart the game after changing it.

The optional **NVIDIA Max Frame Rate** and **Global NVIDIA VSync** controls apply driver settings. If you already manage frame limiting or V-Sync through the game or NVIDIA App, you do not need to enable those controls again in Play.

## Overlay modes

The regular overlay supports desktop and windowed/borderless game display, with configurable readings, layout and colors.

An **experimental exclusive-fullscreen renderer** is available for DX11/DX12 and supported Vulkan modes. It is **off by default** and requires explicit warning acknowledgment: it may cause **anti-cheat bans or game crashes**. It currently supports SDR; Vulkan requires preparation and a game restart.

Some antivirus products flag the bundled attach helpers. See the [v2.0 release notes](https://github.com/christianp403-spec/NV-UV-Play/releases/tag/v2.0.0) for the published scan results and limitations. Those results do not cover the new v2.0.1 main EXE. Play's main functions and regular desktop/windowed/borderless overlay do not require the attach helpers.

## Game library

The public library lives in [`games/GameDatabase.json`](games/GameDatabase.json). Play includes a bundled copy and can check this repository for updates.

Add a missing game inside Play by browsing for its executable, use **Game Library → Request a game**, or open a [GitHub issue](https://github.com/christianp403-spec/NV-UV-Play/issues) with the executable name and a Steam/store link. For games with a launcher, include the actual game executable as well.

## Feedback and diagnostics

Use **Settings → Report a problem** to export diagnostics or submit a report. Include your Play version, GPU, driver version, affected game and steps to reproduce the issue. Review the report before sending it.

For a DCC issue, enable **performance logging before launching the game** and include the generated logs and approximate test time. If no performance log is created, mention that too.

Game-library and application update checks access GitHub. Game requests and diagnostic uploads are separate, user-initiated actions.

## Credits

Play uses **Greencurve by [aufkrawall](https://github.com/aufkrawall)** (MIT License) as the foundation for the native NVAPI bridge and the flat-tail technique used by Voltage Lock. The Gradient Lock curve shape is inspired by the curve behavior popularized by Afterburner. Required third-party notices are included with the portable release.

## Community

- [Forum thread](https://extreme.pcgameshardware.de/threads/nv-uv-play.674754/)
- [Bug reports and feature requests](https://github.com/christianp403-spec/NV-UV-Play/issues)

## Before testing

Play changes GPU voltage, frequency and related settings. Unstable settings can crash games or the system. Presets and scanner results are starting points, not a guarantee of stability on every card. Experimental features have additional notices in the application.

Kilby is a development alpha. Bugs and changes between versions are expected. Thank you for your feedback, bug reports and diagnostic data!

## Support the project

NV-UV Play is free. If you find it useful, you can [support development](https://www.paypal.com/paypalme/christianpapaioannou).
