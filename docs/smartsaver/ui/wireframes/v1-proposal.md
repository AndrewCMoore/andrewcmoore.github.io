# SmartSaver — front-end structure proposal (v1)

Today `App.tsx` stacks every panel section into one long scroll, and two
screens that are already built — `GroceryListEditor.tsx` and
`SettingsScreen.tsx` — aren't wired to anything (no button opens them). This
is a v1 proposal for the structure: a small header nav, panel sections
grouped instead of flat-stacked, and those two screens reached as overlays —
no router needed, the same `ge-overlay` pattern the code already uses (fixed,
404px panel column on desktop ≥861px; full screen on mobile, per `app.css`).

Wireframes below are [wiremd](https://wiremd.dev) — plain markdown, degrades
to a readable spec even unrendered; open with the wiremd CLI/VS Code
extension for a rendered mockup.

## Structure

Planner stays home. A list icon and a gear icon in the header open the
Grocery List and Settings overlays; the overlay's own `‹` back returns to
the Planner. Nothing here is new UI — both overlays exist in the codebase
today, just unreachable.

```
Planner (home)
  ├─ list icon tap ──▶ Grocery List overlay ──▶ ‹ back ──▶ Planner
  └─ gear icon tap ──▶ Settings overlay      ──▶ ‹ back ──▶ Planner
```

Responsive (already in `app.css`, unchanged by this proposal):
- **≥861px** — overlay = 404px panel column, map stays visible.
- **<861px** — overlay = full screen, panel becomes a bottom sheet.

## Planner

::: grid-2 card

### Panel (404px)
SmartSaver &nbsp;&nbsp;&nbsp; [≡]{.icon} [⚙]{.icon}

**Trip · origin & stops**
[Use my location]{.primary} [Search a place___________]
- [ ] Stop 1
- [ ] Stop 2

**Staples & deals**
[Milk]{.chip} [Eggs]{.chip} [Bread]{.chip}

**Worth-it · route**
Net benefit +$0.00
[Open in Maps]{.primary}

### Map
Full-bleed map, route line + stop pins. No panel content here.

:::

## Grocery List overlay

```
[‹]  Weekly list                              [Edit]
[Filter items________________________________]

PRODUCE
[ ] Bananas                              [-15%]
[x] Spinach
[ ] Avocado                               [-20%]

DAIRY & EGGS
[x] Milk
[ ] Eggs
```

## Settings overlay

```
[‹]  Settings

VEHICLE
[Compact]{.primary} [Sedan] [Truck]

REGION FUEL PRICE
[US avg] [Custom]

MANUAL OVERRIDES
Fuel price      [____]
Efficiency      [____]
Value of time   [____]

REWARDS
[+ Add a rewards program]
```

## Screens

- **Planner** — map + panel, panel sections grouped instead of one flat
  stack:
  - Trip · origin & stops
  - Staples & deals
  - Worth-it · route
  - Handoff
- **Grocery List** (`GroceryListEditor.tsx`) — Shop/Edit modes, categories,
  per-item deal chips. Already built.
- **Settings** (`SettingsScreen.tsx`) — vehicle/fuel presets, rewards editor.
  Already built.

## Status

Static structural proposal, not a clickable prototype. Open questions for
v2: where the two header icons actually sit in the brand row, and whether
panel sections collapse by default or start expanded.
