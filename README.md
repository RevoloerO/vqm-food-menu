# EB3 Meal Log & Recipes

A React + Vite site tracking the weekly meal-prep cooking log for the Claxton placement, plus a recipe
book for dishes worth repeating.

- **Meal Log** (`/`) — week-by-week log: components, technique notes, cost breakdown, and photo status.
- **Recipes** (`/recipes`) — full recipe specs for dishes that earned a repeat.

Data lives in [`src/data/weeks.js`](src/data/weeks.js) and [`src/data/recipes.js`](src/data/recipes.js) —
edit those to add a new week or recipe.

## Development

```
npm install
npm run dev
```

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repo's **Settings → Pages**, set
"Build and deployment" source to **GitHub Actions** (one-time setup).
