# SmartSaver — front-end structure proposal (v1)

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
[Use my location]{.primary}

[Search a place__________]

- [ ] Stop 1
- [ ] Stop 2

**Staples & deals**
[Milk]{.chip} [Eggs]{.chip} [Bread]{.chip}

**Worth-it · route**
Net benefit +$0.00
[Open in Maps]{.primary}

### Map & navigator
Saving $12.40 on this trip

(full-bleed map behind this — route polyline, origin + stop markers, grocer candidate pins)

- [x] Round trip — include the drive back home

**12.4 km** Distance
**18 min** Est. time
**$1.85** Fuel

[Open in Google Maps]{.primary}

[Apple Maps] [Waze]

:::

## Grocery List overlay

[‹]{.icon} Weekly list [Edit]{.primary}
[Filter items_________________________]

### Produce
- [ ] Bananas [-15%]{.chip}
- [x] Spinach
- [ ] Avocado [-20%]{.chip}

### Dairy & eggs
- [x] Milk
- [ ] Eggs

## Settings overlay

[‹]{.icon} Settings

### Vehicle
[Compact]{.primary} [Sedan] [Truck]

### Region fuel price
[US avg] [Custom]

### Manual overrides
Fuel price

[____]{type:number}

Efficiency

[____]{type:number}

Value of time

[____]{type:number}

### Rewards
[+ Add a rewards program]

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
