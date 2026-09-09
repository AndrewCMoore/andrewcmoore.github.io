#!/usr/bin/env node
// Regenerates home.render.html from home.md via the wiremd CLI, then
// patches the Panel/Map grid to the real app.css proportions (404px
// fixed panel | flexible map) — wiremd's grid-N columns are always
// equal-fraction (repeat(N, 1fr)) with no span/width override and no
// raw-HTML passthrough, so a small CSS patch on top of its own output
// is the only way to show this accurately. Rerun after editing home.md:
//   node render-home.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const file = 'home.render.html';
execSync(`npx --yes wiremd home.md -o ${file} --style wireframe`, { stdio: 'inherit' });

const override = '<style>.wmd-grid-2{grid-template-columns:404px 1fr !important;}</style>';
const html = readFileSync(file, 'utf8').replace('</head>', `${override}\n</head>`);
writeFileSync(file, html);
console.log(`Patched Panel/Map grid proportions (404px | 1fr) in ${file}`);
