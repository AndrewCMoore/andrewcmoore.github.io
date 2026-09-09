Panel/Map proportions below match the real layout (`.app {
grid-template-columns: 404px 1fr }` in `app.css`) — wiremd's grid is
equal-width by default, so `render-home.mjs` patches that in after
generating. Regenerate with `node render-home.mjs`, not the plain
`wiremd` CLI (which would drop the patch).

## Layout {.grid-2}

### Panel
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
