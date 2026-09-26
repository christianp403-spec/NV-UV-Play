'use strict';
// English copy follows the same feature and control order as guide.de.js.
window.PLAY_GUIDE_EN = {
  profiles: {
    purpose: 'Profiles bring your GPU settings together. Six slots make them directly accessible in the main window.',
    benefit: 'You do not have to work out every setting yourself. Preselected, community-tested profiles make it easy to start; your own profiles let you fine-tune later.',
    how: 'Choose a preselected profile slot in the main window. One click activates it. Profiles include Eco, Balanced, Performance and Max, plus MFG on Blackwell/RTX 50. You can save your own profiles and assign them to the slots later.',
    limit: 'Community-tested does not mean stable on every graphics card. Test a profile on your own system.',
    controls: [
      ['Profile slots', 'Quick access to up to six profiles. Clicking a slot activates its saved profile globally. You can customize the names.'],
      ['Eco / MFG / Balanced / Performance / Max', 'Preselected profiles with different priorities. Eco focuses on saving power; Balanced strikes a balance between performance and consumption. MFG is also available on Blackwell GPUs in the RTX 50 series for games using Multi Frame Generation. Actual values depend on the GPU and profile.'],
      ['Default', 'Restores the default profile. This does not delete your saved profiles or game assignments.'],
      ['Manage profiles', 'Create and edit your own profiles and assign them to multiple games. Changes to a shared profile apply to its assignments.'],
      ['Rename', 'Gives a profile a meaningful name. This changes its label, not its tuning values.'],
      ['Save only / Save as new', 'Saves a draft or a new copy. Useful when preparing settings without immediately changing the active profile.'],
      ['Balanced', 'Balanced strikes a balance between performance and power consumption. Custom profile slots can have other names.'],
      ['Community profiles through UV Try', 'UV Curve → UV Try offers more entries for your GPU model. Import one into a slot, test it and rate your experience. Learn from other users and contribute your own findings.'],
      ['MFG · Multi Frame Generation', 'A dedicated profile for games with Multi Frame Generation on Blackwell GPUs in the RTX 50 series. It sits between Eco and Balanced and is tuned for this workload. You still select the frame-generation setting in the game. Check performance, power consumption and stability with your actual game settings.']
    ]
  },
  pilot: {
    purpose: 'UV Pilot detects games through the Game Library and automatically uses their assigned profiles.',
    benefit: 'Use different settings for different games without switching manually before each launch.',
    how: 'Assign a profile in the Game Library and enable UV Pilot. Launch the game. Play detects the matching entry and uses its assignment.',
    limit: 'Clicking a global profile slot directly turns UV Pilot off. A launcher may use a different EXE from the actual game.',
    controls: [
      ['UV Pilot on / off', 'On enables game assignments. Off uses the last selected global profile.'],
      ['Game detection', 'Play needs a matching process entry in the library. If detection fails, check the actual game EXE, not just its launcher.']
    ],
    scenarioTitle: 'Different games. Different UV profiles.',
    scenario: 'An older title may run well with a power-saving profile. For a demanding game you want more performance, and for another you have tuned your own UV curve. Assign each game a suitable profile in the Game Library. UV Pilot detects the launch and switches for you.'
  },
  library: {
    purpose: 'The Game Library links games to profiles and manages the entries used for game detection.',
    benefit: 'A demanding game can use a different profile from an older or lighter title. UV Pilot uses these assignments automatically.',
    how: 'Find a game, choose its profile and enable UV Pilot. Add missing games using their EXE files.',
    limit: 'The actual game EXE must be detected for automatic switching. Check the library entry if the profile does not switch.',
    controls: [
      ['Profile assignment', 'Sets the profile UV Pilot should use for this game. The global profile and a game assignment are separate settings.'],
      ['Add Game', 'Adds a game using its executable file. This also supports titles not yet in the shared database.'],
      ['Request a game', 'Submits a missing title for the shared library. Include the game name, actual game EXE and a store link.'],
      ['Game override / No Override', 'A game override can use a shared setting. No Override excludes individual games from it, which is useful for exceptions.'],
      ['Search / Filter', 'Find entries in a large library, for example by name or profile.'],
      ['Stabilizer Adjustments', 'Shows learned corrections for games and profiles so you can see which adjustments were made.'],
      ['Database update', 'Updates the shared list of known games. This is separate from updating the Play application.'],
      ['Choose MFG for a game', 'On Blackwell/RTX 50, the MFG profile is available for games with Multi Frame Generation. Assign it to the appropriate game. UV Pilot uses the assignment automatically when it is enabled and detects the game.']
    ]
  },
  curve: {
    purpose: 'The UV curve editor defines the GPU frequency at each voltage point. You can also change the power limit and VRAM offset.',
    benefit: 'Fine-tune a community profile for your card and games. The aim is to find a suitable balance between performance and power consumption.',
    how: 'Select a profile slot and voltage point, then enter the clock, for example from a forum or video. One click on Apply curve applies and saves the UV curve. Use Save only if you want to save a draft first.',
    limit: 'The values shown belong to the original screenshot. They are not tuning recommendations for your card. Test changes in your games.',
    controls: [
      ['Profile slots', 'Selects the profile whose curve you want to edit. The draft and the currently active GPU profile can be different.'],
      ['Edit a point', 'Voltage selects the voltage point. Frequency sets the clock at that point. This allows targeted changes instead of a uniform clock offset.'],
      ['Apply curve', 'Applies the curve draft to the GPU and saves it. Test the changed setting in your games afterwards.'],
      ['Save only', 'Saves changes without immediately applying them to the GPU. Useful for preparing a draft.'],
      ['Save as new', 'Saves a separate profile copy so you can keep a variation and compare it later.'],
      ['Power limit and VRAM', 'Power limit caps permitted power draw. VRAM is a clock offset for graphics memory. A lower power limit is not a substitute for a suitable UV curve; excessive memory clocks can be unstable.'],
      ['Read GPU', 'Reads the currently applied GPU curve into the editor without changing it.'],
      ['Stock curve', 'Loads the reference curve as a draft. Useful as a starting point for changes. This is not the same as immediately activating Default.'],
      ['Undo / Redo', 'Reverts or restores an edit so you can compare drafts and correct mistakes.'],
      ['UV Try, Auto-UV and Scanner', 'UV Try provides community profiles. Auto-UV provides a NVIDIA starting point. The scanner checks candidates under test load. None of these methods guarantees stability on every GPU.'],
      ['Expert voltage settings', 'Opens experimental voltage and clock parameters that require separate confirmation. This area is intended for experienced users and carries additional risks.'],
      ['Restore Balanced', 'Resets the draft to the selected base profile. In this screenshot, that is Balanced. This gives you a starting point for further changes.'],
      ['Assign to game', 'Assigns the profile to a game. UV Pilot can then use it automatically when the game launch is detected.'],
      ['Enable UV Pilot', 'Enables automatic use of game assignments. Assignments and the global profile are explained in the UV Pilot section.'],
      ['Voltage', 'Selects the voltage point you want to edit. The frequency shown beside it belongs to that point.'],
      ['Frequency (MHz)', 'Sets the desired GPU clock at the selected voltage point. Raising the clock at the same voltage can reduce stability.'],
      ['Power limit (%)', 'Caps permitted power draw relative to the card’s power budget. A lower limit can reduce consumption, but also performance.'],
      ['VRAM (MHz)', 'Changes the graphics-memory clock offset. This is separate from the GPU curve. Check memory changes for errors and stability.']
    ],
    scenarioTitle: 'Already familiar with undervolting and want to fine-tune?',
    scenario: 'Tailor your UV curve to your card. Edit voltage points and clocks, adjust the power limit and VRAM offset, and save your own profiles. Use the Voltage Step Scanner for further tests and Expert voltage settings for additional experimental parameters.'
  },
  scanner: {
    purpose: 'The Voltage Step Scanner checks voltage points and clocks with a configurable GPU test load. Results and test history help you refine your settings.',
    benefit: 'Verify a chosen voltage point, search for suitable clocks or test graphics memory separately. The results help you work towards a profile for your card.',
    how: 'Open UV Curve → Scanner. Choose a starting profile, target voltage and test mode. Set the duration and step size, run the test and check the result in your games as well.',
    limit: 'A single NVIDIA GPU is currently required. Passing a run does not prove stability in all games. Test loads can crash an unstable candidate.',
    controls: [
      ['Configure the test', 'Selects the settings and scope to test. A brief test tells you less about long gaming sessions than a suitable, broader check.'],
      ['Start / Cancel', 'Start begins the test load; Cancel stops the current test. Save open work before running a real test in Play.'],
      ['Results / History', 'Shows saved results and previous runs. A passed run is a result under its particular conditions, not a general stability guarantee.'],
      ['NVIDIA Auto-UV', 'Uses the NVIDIA method to derive a starting point from your GPU’s factory curve. Save and activate it in a profile slot. Auto-UV itself does not run a stability test.'],
      ['UV Try', 'Opens community profiles with your GPU model preselected. Compare entries, import one into a slot, test it on your card and rate your experience. You do not need to draw a curve by hand.'],
      ['Verify point', 'Tests a chosen voltage point and clock under the configured load so you can check a specific candidate.'],
      ['Scan frequency', 'Searches step by step for a suitable frequency at the chosen target voltage. Test duration and step size control the search.'],
      ['VRAM-only · stock core', 'Tests graphics memory with the GPU core at stock settings. This helps separate memory changes from your custom core curve.'],
      ['Optimize point · voltage probes', 'Explores additional voltage points around your candidate. You can then verify a promising point separately.']
    ]
  },
  dcc: {
    purpose: 'DCC adjusts clock behavior during detected games. It offers Automatic and the separate NVIDIA Power Efficiency Mode.',
    benefit: 'When extra clock speed offers little benefit in a game, DCC can help reduce unnecessary power consumption. The actual benefit depends on the game and hardware.',
    how: 'Choose an algorithm in DCC settings. Turn Stabilizer off before enabling DCC. Configure NVIDIA Experimental before launching a game.',
    limit: 'DCC Automatic uses the GPU selected in Play, including on multi-GPU systems. The separate NVIDIA Experimental mode (Power Efficiency Mode) currently requires a single NVIDIA GPU. It is different from Expert voltage settings. DCC does not guarantee FPS or power savings; full multi-GPU hardware validation is still pending.',
    controls: [
      ['DCC Automatic', 'Gradually searches for a suitable GPU clock while the game is running, checking performance and utilization. Learning data is saved per game.'],
      ['NVIDIA Power Efficiency Mode', 'Requests an efficiency mode from the NVIDIA driver. Its target is separate from an FPS limiter. Restart the game after making changes.'],
      ['Set efficiency target manually', 'Replaces the automatic efficiency target with a value of your own. Useful for particular monitor or game setups. It is not a guaranteed frame rate.'],
      ['FPS limit and VSync', 'NVIDIA Max Frame Rate caps FPS. Global NVIDIA VSync controls driver VSync. These are additional settings; avoid unnecessarily duplicating existing game or driver settings.'],
      ['Diagnostics and learning data', 'Performance logging records performance data for troubleshooting. Learned games shows saved DCC learning data for each game.'],
      ['Reset selected learned profile', 'Once applied, discards only the selected learning data. Useful if you want this game to learn again.'],
      ['Apply changes', 'Apply accepts the settings draft. Cancel discards changes in the dialog.'],
      ['DCC and Stabilizer', 'Both features affect profile behavior and cannot be active together. Deliberately turn the other feature off.'],
      ['NVIDIA Max Frame Rate', 'Caps the frames rendered per second. A suitable cap can avoid unnecessarily high frame rates and extra load. The limiter is separate from the DCC algorithm.'],
      ['Global NVIDIA VSync', 'Uses the NVIDIA driver to synchronize frame output with the refresh rate, which can prevent tearing. If VSync is already configured in the game or driver, you do not need to enable it again here.'],
      ['Enable performance logging', 'Records frame rate, GPU clock and power draw locally. This helps explain DCC behavior or prepare a bug report.'],
      ['Learned games', 'Shows games for which DCC has saved learning data. Play can reuse it next time. The empty table in the screenshot means no learning data was present there.']
    ],
    scenarioTitle: 'FPS capped. The GPU still runs at a high clock.',
    scenario: 'A frame cap limits frames per second but does not automatically enforce the most efficient GPU clock. DCC Automatic checks which clock suits the actual game load. This can create room for lower power draw and heat when extra clock speed barely improves your frame rate.'
  },
  overlay: {
    purpose: 'The overlay shows selected performance and sensor readings on the desktop or over detected games.',
    benefit: 'See how a profile affects frame rate, power consumption and temperature while playing, without constantly switching windows.',
    how: 'Enable the overlay, choose where to show it under Display on, and enable the desired values in Readings. Adjust the presentation with Layout and Colors.',
    limit: 'Desktop, windowed and borderless modes are supported. Exclusive fullscreen has not been supported since v2.0.8. Some readings need compatible sensors or the optional PawnIO setup.',
    scenarioTitle: 'How can I tell whether my UV profile is working?',
    scenario: 'Watch GPU clock, voltage and power draw together with FPS. Compare the same game scene with identical settings and FPS cap, once at stock and once with the UV profile. Lower voltage at a comparable clock shows the effect of undervolting. Lower watts at similar FPS shows the efficiency gain. Low power draw alone can simply mean less load. HWiNFO or GPU-Z are alternatives to Play telemetry.',
    controls: [
      ['Enable overlay', 'Turns the display on or off. Opening its settings or preview is not the same as enabling the overlay.'],
      ['Display on: Desktop or Game', 'Desktop shows the overlay on the desktop. Game shows it over a detected foreground game. This determines when the readings are visible.'],
      ['Display, Readings, Layout, Colors, Profiles', 'Display controls position and appearance. Readings selects values, Layout arranges them, and Colors sets their colors. Profiles manages saved overlay layouts.'],
      ['Position and appearance', 'Position, Horizontal and Vertical set the location. Font size controls text size; Opacity controls background opacity. Keep the overlay readable without getting in the way.'],
      ['Live preview', 'Shows the arrangement while you edit. Select readings and move them in the actual designer. The original screenshot uses simulated test values.'],
      ['FPS / 1% Low / Frame time', 'FPS is the frame rate. 1% Low helps assess slower sections. Frame time shows the time per frame; spikes can indicate stutter.'],
      ['GPU power / Voltage / Clock', 'GPU power shows power draw in watts, Voltage shows voltage, and Clock shows GPU frequency in MHz. Check voltage units: 0.950 V equals 950 mV. Compare stock and UV in the same scene with identical settings and FPS cap. Lower voltage at a comparable clock shows undervolting; lower watts at similar FPS shows an efficiency gain. Low watts alone can also result from less load.'],
      ['Temperature / Hotspot', 'Shows available temperature sensors. Not every card reports every reading; hotspot and GPU temperature are different measurements.'],
      ['CPU / RAM / VRAM', 'Additional utilization and memory data helps identify bottlenecks. Availability depends on sensors and the system.'],
      ['Show / hide shortcut', 'Shows or hides an enabled overlay with a keyboard shortcut. Useful when you briefly want an unobstructed view.'],
      ['Sensor support', 'Sets up additional sensor support when needed. This may require internet access, administrator approval and possibly a restart.'],
      ['Display', 'Choose where the overlay appears and how large it is. This is the tab shown in the screenshot.'],
      ['Readings', 'Selects the displayed values. GPU clock, voltage, power draw and FPS help check your UV profile. Temperature and GPU utilization add context.'],
      ['Layout', 'Arranges selected readings. Keep the overlay compact and related values together.'],
      ['Colors', 'Changes text and element colors to keep the overlay readable against different game backgrounds.'],
      ['Profiles', 'Manages saved overlay layouts. These display profiles are separate from your GPU’s undervolting profiles.'],
      ['Font size', 'Changes overlay text size. Larger text helps at high resolutions; smaller text takes less screen space.'],
      ['Opacity', 'Changes the overlay background’s opacity. A stronger background often improves readability.'],
      ['Frame-time trend', 'Shows frame times over time. Consistent times indicate smooth delivery; clear spikes can reveal stutter.'],
      ['GPU usage', 'Shows reported GPU utilization. Together with FPS, clock and power draw, this helps explain the current load.'],
      ['Reset defaults', 'Resets overlay settings to their defaults. This affects the display, not the GPU’s UV profile. Play saves overlay changes automatically.']
    ]
  },
  "fan": {
    "purpose": "Fan control offers GPU automatic control, a fixed fan setting or a custom temperature curve for each supported channel.",
    "benefit": "Adjust cooling and noise to your needs. The feature is still being improved; Zero Fan does not work yet.",
    "how": "Open Fan curve in the Play v2.0.9 main window. Choose GPU automatic control, a fixed fan setting or a custom temperature curve. Apply & save applies and saves the settings.",
    "limit": "Fan control is still being improved. Zero Fan, meaning a complete fan stop, does not work yet. The driver and hardware must support control; hardware-write validation is still pending.",
    "scenarioTitle": "Adjust cooling and noise to your needs.",
    "scenario": "Want to adapt fan behavior to how you use your GPU? Fan curve offers GPU automatic control, fixed fan settings and custom temperature curves. This area is still being developed. Zero Fan is not available yet.",
    "controls": [
      [
        "GPU automatic",
        "Leaves fan control to the GPU. You do not need a custom curve."
      ],
      [
        "Fixed speed",
        "Holds a selected fan setting. Useful for comparisons, but it does not automatically adapt to temperature."
      ],
      [
        "Custom curve",
        "Assigns fan values to temperatures so the fan can provide more cooling at higher temperatures."
      ],
      [
        "Channels and profiles",
        "Configure supported fan channels separately. Saved profiles and optional activation at startup make recurring settings easier."
      ],
      [
        "Zero Fan · not available yet",
        "A dedicated Zero Fan mode for manual fan control is not supported yet. GPU automatic leaves behavior to the card, including any fan stop it supports."
      ],
      [
        "Apply & save",
        "Applies and saves the selected fan settings. Editing a curve or loading a profile alone does not activate those settings."
      ],
      [
        "Select a profile",
        "Loads a saved fan profile for editing. Loading alone does not change running fan control."
      ],
      [
        "Save",
        "Saves changes to the selected fan profile. Running fan control stays unchanged."
      ],
      [
        "Save as new…",
        "Saves these settings as a separate named fan profile."
      ],
      [
        "More…",
        "Opens actions to rename or delete the selected fan profile."
      ],
      [
        "Activate at Play start",
        "Activates the selected saved fan profile when Play next starts. Save pending edits first."
      ],
      [
        "Hysteresis",
        "Sets the temperature drop required since the last speed change before fans slow down. This reduces frequent speed changes. Higher speeds are requested immediately."
      ],
      [
        "Minimum hold",
        "Minimum time before reducing fan speed. A curve must meet both this time and the configured temperature hysteresis."
      ],
      [
        "Curve points",
        "Assigns fan settings to temperatures. Select a point, edit °C and percent, or drag it. Plus and minus add or remove points in the draft."
      ],
      [
        "GPU automatic · all",
        "Returns all detected fan channels to the GPU’s automatic control. Saved profiles are retained."
      ],
      [
        "Discard edits",
        "Discards unsaved changes and reloads the saved profile. Running fan control stays unchanged."
      ],
      [
        "RPM and Running",
        "Shows measured fan speed and the running mode. Modes selected below can still belong to an unapplied draft."
      ]
    ]
  },
  hz: {
    purpose: 'Smart Hz switches between a lower desktop refresh rate and the native rate for games.',
    benefit: 'When a high desktop refresh rate is unnecessary, lowering it can reduce power use on some systems. The appropriate high rate is available again in games.',
    how: 'Enable Smart Hz and set the idle rate. You can also access this setting from the main-window context menu.',
    limit: 'Use only modes supported by your monitor. Monitor refresh rate and rendered game FPS are not the same thing.',
    controls: [
      ['Idle refresh rate', 'The desktop rate when no game is detected. Choose a mode your monitor actually supports.'],
      ['Game refresh rate', 'Smart Hz uses the native refresh rate while gaming, allowing a high rate in games and a lower one on the desktop.']
    ]
  },
  stabilizer: {
    purpose: 'Stabilizer responds to detected driver crashes by adjusting the GPU curve or clock and voltage targets.',
    benefit: 'You do not have to make every correction manually after a detected driver crash. Play handles both game profiles and the global profile, saving adjustments in the appropriate context.',
    how: 'Enable Stabilizer while DCC is off. Choose a strategy, step sizes and limits. Review saved corrections under Stabilizer Adjustments in the Game Library.',
    limit: 'Not every crash is detected. Stabilizer cannot prevent all instability and does not guarantee protection against damage or data loss.',
    controls: [
      ['Correction strategy', 'Chooses whether to reduce clock speed, increase voltage or combine both. This determines how Play adjusts after a detected driver crash.'],
      ['Frequency step', 'Frequency step per crash sets how much the clock should be reduced for each detected event.'],
      ['Voltage step', 'Voltage step per crash sets the incremental voltage correction. Higher voltage can also increase consumption.'],
      ['Limits', 'Frequency floor and Voltage ceiling limit corrections. They do not guarantee a safe or stable operating range.'],
      ['Saved adjustments', 'Corrections are saved for the relevant game and profile or for the global profile. Review them in the Game Library. Clear all resets saved adjustments after confirmation.'],
      ['Save / Cancel', 'Save accepts the settings. Cancel discards the current draft.'],
      ['Frequency floor', 'Sets the minimum clock to which Stabilizer may reduce frequency, limiting the range of automatic correction.'],
      ['Voltage ceiling', 'Sets the upper limit for automatic voltage corrections. This is your chosen limit, not a voltage Play guarantees to be safe.']
    ],
    scenarioTitle: 'Less manual adjustment after a crash.',
    scenario: 'Undervolting often means trying settings, playing and adjusting again. When Play detects a driver crash, Stabilizer can gradually lower the clock, raise voltage or combine both. It helps you work towards a stable profile for individual games and the global profile. You choose the strategy and limits.'
  },
  "expert": {
    "purpose": "Expert voltage settings adds experimental clock and voltage parameters to your UV profile. Since Play v2.0.9, these values belong to the individual profile.",
    "benefit": "Experienced users gain finer control beyond the normal UV curve. This area is not needed for a quick start with community profiles.",
    "how": "After enabling access under Settings → Experimental features, open UV Curve → Expert voltage settings. Save profile stores the draft. Apply & save profile activates and saves the entire profile, including its curve, power limit, VRAM and Expert values.",
    "limit": "Can cause instability, data loss and permanent hardware damage. Hardware and driver support have not been validated everywhere. Restore does not guarantee recovery.",
    "controls": [
      [
        "XBAR / SYS",
        "Additional clock and voltage requests for specific GPU domains. A voltage request is not a fixed rail voltage."
      ],
      [
        "Video clock / Core / Fabric / Voltage Boost",
        "Further hardware-dependent expert parameters. Availability and effects vary by GPU and driver."
      ],
      [
        "Apply & save profile",
        "Applies and saves the entire selected profile with its curve, power limit, VRAM and Expert values. These values stay in effect while that profile is active, whether selected globally or through UV Pilot."
      ],
      [
        "Live readings / Remove from profile",
        "Live readings shows current measurements without overwriting your inputs. Remove from profile first removes Expert values from the draft; applying the profile releases the previous adjustments."
      ],
      [
        "Difference from DCC",
        "DCC NVIDIA Experimental is the Power Efficiency Mode. It is not this experimental voltage-settings area."
      ],
      [
        "Save profile",
        "Saves the profile with its Expert values without immediately changing GPU settings."
      ],
      [
        "Profile switching",
        "The newly active profile uses its own Expert values. A profile without Expert values releases the preceding adjustments to the values Play captured earlier. A zero offset is not a factory reset."
      ],
      [
        "More…",
        "Includes reloading the draft and copying previous global values into this profile. Copying alone does not apply anything."
      ],
      [
        "Clock offset · XBAR / SYS / Video",
        "Offsets the clock of that GPU domain relative to its baseline. The green reading shows the currently measured clock, not the offset you entered."
      ],
      [
        "Voltage demand · XBAR / SYS",
        "Offsets the voltage demand for that domain. It does not promise a fixed measured voltage."
      ],
      [
        "Minimum offset · Core / Fabric",
        "Offsets the reported minimum voltage limit for that domain. Available limits come from the GPU and driver."
      ],
      [
        "Reliability offset · Core / Fabric",
        "Offsets the reliability voltage limit reported by the driver. The name does not guarantee stability for your setting."
      ],
      [
        "Operating offset · Core / Fabric",
        "Offsets the reported operating voltage limit. Unavailable fields stay disabled; limits may vary with GPU, driver and operating state."
      ],
      [
        "Voltage Boost",
        "An additional driver-dependent Boost parameter in percent. Play reports it as unavailable in this capture."
      ],
      [
        "Remove from profile",
        "Removes Expert values from the profile draft. Apply & save profile activates the changed draft and releases the previous Expert adjustments."
      ],
      [
        "Live readings",
        "Green values show current measurements. They change with load without overwriting your inputs. Reported GPU voltage and individual rail sensors can show different readings."
      ],
      [
        "Enable a field",
        "The checkbox determines whether this profile should manage that Expert value. The selection first belongs to the draft; only applying it changes the GPU."
      ]
    ]
  },
  settings: {
    purpose: 'Settings brings together GPU selection, feature dialogs, display options and help.',
    benefit: 'Find general settings in one place and make sure Play controls the GPU you intended.',
    how: 'Open Settings in the main window and choose a section. Save a changed GPU selection and restart Play afterwards.',
    limit: 'Selection does not change the GPU used by a game or Lossless Scaling. Multi-GPU hardware validation is still pending.',
    controls: [
      ['Select NVIDIA GPU', 'Selects the GPU for profiles, readings and DCC Automatic. If a saved card is unavailable, Play asks for a new selection.'],
      ['Autostart', 'Starts Play when you sign in to Windows, normally in the tray. The option to start without minimizing is available through the context menu or Advanced options.'],
      ['UI scaling', 'Changes the size of Play windows and text. Useful for high resolutions or larger text.'],
      ['Advanced options', 'Groups extra settings that are not constantly needed when getting started, such as startup behavior.'],
      ['Experimental features', 'Unlocks experimental areas after explicit confirmation. Read the notices first; availability is not a general recommendation to enable them.'],
      ['Notifications', 'Controls application notifications. These settings are separate from tuning values.'],
      ['Patch notes / About', 'Patch notes explains changes in a version. About shows product and version information, also useful for bug reports.']
    ]
  },
  updates: {
    purpose: 'The built-in updater finds, downloads and installs verified Play updates.',
    benefit: 'Install improvements and fixes without manually preparing a new working folder for every update.',
    how: 'Updates → Check now → Download → Install & restart. Confirmation is required before installation.',
    limit: 'Application updates are separate from game-database updates. This website does not check for updates.',
    controls: [
      ['Check now', 'Checks whether a new Play version is available using the configured update source.'],
      ['Download', 'Downloads the offered update. Downloading alone does not mean the new version is installed.'],
      ['Install & restart', 'Installs after confirmation and restarts Play. Check the version and saved settings afterwards.'],
      ['Portable ZIP', 'The full download remains the manual alternative. Extract the entire archive together, not just the EXE.']
    ]
  },
  diagnostics: {
    purpose: 'Diagnostics and Report a problem help you report issues with information others can follow.',
    benefit: 'Version, hardware, steps and relevant logs make it easier to reproduce a problem and verify a fix.',
    how: 'Describe the issue as precisely as possible. View the diagnostic export or report in Play and review it before voluntarily sending it.',
    limit: 'This guide does not send reports. Sending a real report is a separate, deliberate action.',
    controls: [
      ['Diagnostic export', 'Creates a local diagnostic package in Play so you can review the information before sharing it.'],
      ['Report a problem', 'Opens the report preview and optional submission. Include the game, profile, GPU, driver, Play version and reproducible steps.'],
      ['DCC performance logging', 'Enable before launching the game and note the approximate test time. If no log file was created, mention that too.'],
      ['Missing game', 'For a library request, include the actual EXE and a store link. This is different from a crash report.']
    ]
  },
  community: {
    purpose: 'UV Try brings profiles from the NV-UV community directly into Play. Your detected GPU model is preselected.',
    benefit: 'Use other users’ experience as a starting point instead of copying individual values from forums or social media. Choose a profile, test it and rate your experience. You do not have to draw your own curve.',
    how: 'Open UV Curve → UV Try. Check the preselected GPU model and compare entries. Right-click a profile → Slot 1 to 6 to save it to a slot and activate it. Test it in your games, then leave a rating.',
    limit: 'Even two cards with the same GPU model can behave differently. Ratings reflect community experience, not guaranteed stability. Check GPU selection carefully if your model is not detected.',
    scenarioTitle: 'Found some settings. Time to follow a tutorial?',
    scenario: 'You find settings in a forum or on social media. Do you now need to work through a tutorial and enter everything by hand? Which card variant were those settings for? UV Try brings available details, profiles and ratings together. Import a profile, test it on your GPU and rate your experience without drawing a curve yourself.',
    controls: [
      ['GPU model', 'Play preselects the community-database model matching the detected GPU name. Check it and change it if needed. The GPU model is not necessarily the same manufacturer or board variant as your card.'],
      ['Compare profiles', 'Voltage is the voltage, Clock the GPU clock, PL the power limit and VRAM the memory-clock offset. See what an entry contains before applying it.'],
      ['Card variant and Source', 'The card variant, notes and source help you assess an entry. Source shows available origin information so you can understand which card or experience the settings refer to.'],
      ['Search', 'Searches card variants, notes, sources, voltage and clock values. Useful when looking for a manufacturer or a particular entry.'],
      ['Right-click → Slot 1 to 6', 'Saves the chosen community profile to a slot and activates it through normal profile selection. Play applies the values for you; you do not have to draw the voltage curve point by point.'],
      ['Test on your GPU', 'Use the profile in your own games and check frame rate, power consumption, temperature and stability. Other users’ experience helps with selection but does not replace testing your card.'],
      ['Rating', 'Rate your experience with one to five stars after testing on your system. Feedback helps others choose; a high rating does not guarantee stability.'],
      ['Load into editor', 'Where offered in the open editor, loads the values as an editable draft first. Apply curve then applies and saves it. This lets you fine-tune further if needed.'],
      ['Share values', 'Optionally shares your tested target values with the community. Card details and test notes make the entry more useful. Contributions appear after review; the full curve is not shared.'],
      ['Refresh', 'Updates community entries and ratings so you can consider new profiles and feedback.']
    ]
  },
  autouv: {
    purpose: 'NVIDIA Auto-UV uses the NVIDIA method to derive a starting point from your own GPU’s factory curve.',
    benefit: 'If you want to start with a conservative profile for your card, Auto-UV provides a starting point for your tests. You do not have to create a curve manually.',
    how: 'Open UV Curve → Auto-UV. Use Read GPU, review the displayed values and choose a slot under Save to. Save & activate saves and activates the profile.',
    limit: 'Auto-UV does not run a stability test. Check the result in your games or with the Voltage Step Scanner. A calculated starting point does not guarantee a stable setting.',
    scenarioTitle: 'A starting point from your own GPU.',
    scenario: 'You know undervolting but want to begin with a conservative profile. Auto-UV uses your GPU’s factory curve as its basis. Save the suggestion to a slot, test it and adjust it further if needed.',
    controls: [
      ['Read GPU', 'Reads the NVIDIA starting point and data for the suggestion. Reading does not yet change the GPU settings.'],
      ['NVIDIA starting point', 'Shows the derived starting point from the GPU curve, including voltage and clock, so you can see what the suggestion is based on.'],
      ['Auto-UV target', 'Shows the suggested Auto-UV target values. Review them before activating the profile.'],
      ['Save to', 'Chooses one of the six profile slots as the destination. Check whether the slot is already occupied.'],
      ['Save & activate', 'Saves the suggestion as a profile and activates it. Play asks before replacing an occupied slot.'],
      ['Power limit and VRAM', 'Auto-UV uses a 100 percent power limit within your GPU’s limits and a VRAM offset of 0 MHz. Memory overclocking is not part of this starting profile.'],
      ['Test afterwards', 'Check the profile in the games you actually play. Use the Voltage Step Scanner for targeted tests of individual voltage points.']
    ]
  },
  "advanced": {
    "purpose": "Advanced options controls how Play applies simple UV presets: Gradient Lock, Voltage Lock, optional Hard Lock and V-Step Compensation.",
    "benefit": "Understand and adjust how simple presets behave. Saved V-curves instead use their own points and dynamic clock scaling.",
    "how": "Open Settings → Advanced options. Read the explanation for the method you want to use. Save stores the selection; Cancel discards changes in the window.",
    "limit": "These methods and V-Step Compensation apply to simple presets. Hard Lock prevents normal idle downclocking and may increase idle power. Availability and effects depend on the GPU and driver.",
    "controls": [
      [
        "Autostart without minimizing",
        "Shows the main window when Play starts with Windows. Otherwise, Play starts in the tray. Manual launches still show the window."
      ],
      [
        "Gradient Lock",
        "Shapes the curve below the selected voltage and flattens points above it. Measured clocks still depend on load and driver limits."
      ],
      [
        "Voltage Lock",
        "Flattens the curve above the selected voltage. Lower points remain available for downclocking. The name does not mean the measured voltage is pinned."
      ],
      [
        "Hard Lock · experimental",
        "Requests the same minimum and maximum GPU clock at the preset target. Prevents normal idle downclocking and may increase consumption. Requires GPU and driver support and DCC to be off."
      ],
      [
        "V-Step Compensation",
        "Raises the voltage anchor by the selected number of VF steps. It can account for voltage droop under load, at the expense of efficiency, and does not guarantee a constant clock."
      ],
      [
        "Gradient Lock on Ampere",
        "Optional experimental access to Gradient Lock for RTX 30. Without it, Ampere uses Voltage Lock. It does not change other GPU families."
      ],
      [
        "Save / Cancel",
        "Save stores the selection. Preset changes can immediately reapply an active preset. Cancel closes the window without saving changes."
      ]
    ]
  }
};
