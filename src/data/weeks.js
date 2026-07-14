export const PLACEMENT_TOTAL_WEEKS = 56;

export const weeks = [
  {
    n: 1,
    dates: 'Jun 22 – 26, 2026',
    status: 'locked',
    components: [
      { label: 'Soy-sauce mixed noodle', color: 'var(--soy)' },
      { label: 'Teriyaki drumstick', color: 'var(--chili)' },
      { label: 'Fried egg', color: 'var(--yolk)' },
      { label: 'Baby carrot', color: '#d8742a' },
      { label: 'Spinach', color: 'var(--scallion)' },
    ],
    technique: 'Baseline week — teriyaki glaze, plain-boiled veg method established.',
    breakdown: 'carrot $1.32 · spinach $0.99 · eggs $1.35 (10/18) · drumsticks $3.92 · noodle ~$3.45 (5 bundles)',
    total: '$11.03',
    perBox: '$2.21 / box',
    photo: true,
    img: 'images/week1.jpg',
  },
  {
    n: 2,
    dates: 'Jun 29 – Jul 3, 2026',
    status: 'locked',
    components: [
      { label: 'White rice', color: '#d8c9a8' },
      { label: 'Char siu pork chop', color: 'var(--chili)' },
      { label: 'Japanese scramble', color: 'var(--yolk)' },
      { label: 'Mushroom', color: 'var(--soy)' },
      { label: 'Spinach stir-fry', color: 'var(--scallion)' },
    ],
    technique:
      'Char siu marinade, Japanese soft scramble, mushroom + spinach stir-fry. Rice bowl — sauced pork over rice, not the noodle pattern.',
    breakdown: 'pork $5.80 (5/6) · eggs $1.38 (10/12) · mushroom $1.94 · spinach $0.98 (2nd half) · rice bulk/unpriced',
    total: '$10.10',
    perBox: '$2.02 / box',
    photo: true,
    img: 'images/week2.jpg',
  },
  {
    n: 3,
    dates: 'Jul 6 – 10, 2026',
    status: 'locked',
    components: [
      { label: 'White rice ×3 / noodle ×2', color: '#d8c9a8' },
      { label: 'Vietnamese beef sauce (bò băm)', color: 'var(--chili)' },
      { label: 'Soy-marinated egg ×2', color: 'var(--yolk)' },
      { label: 'Shredded iceberg bag', color: 'var(--scallion)' },
    ],
    technique:
      "Mì Ý xào bò băm — Roma tomatoes collapsed into 80/20 beef as the sauce; Hunt's ketchup (no HFCS, cane sugar) + cornstarch by cook's call. Hybrid carb week: 3 rice + 2 noodle boxes + half-size day-of extra = 5.5 portions. Iceberg shredded in two batches (Sat / Tue) to hold crunch. Eggs: 10 marinated, 6 boiled post-workout, 2 reserve.",
    recipe: '/recipes',
    breakdown:
      "beef $15.73 · roma $1.65 · iceberg $2.28 · eggs $1.35 (10/18) · ketchup $0.12 (2 tbsp) · rice/noodle/spaghetti + aromatics ~$2.25",
    total: '~$23.40',
    perBox: '$4.25 / portion × 5.5',
    photo: true,
    img: 'images/week3.png',
  },
  {
    n: 4,
    dates: 'Jul 13 – 17, 2026',
    status: 'locked',
    components: [
      { label: 'White rice', color: '#d8c9a8' },
      { label: 'Honey garlic chicken', color: 'var(--chili)' },
      { label: 'Sautéed red bell pepper', color: '#d8742a' },
      { label: 'Broiled broccoli', color: 'var(--scallion)' },
      { label: 'Soy-marinated egg ×3/day', color: 'var(--yolk)' },
    ],
    technique:
      "Honey garlic chicken (breast) — pan-braised glaze: honey + Hunt's ketchup + soy + garlic, reduced to coat. Converted from an Instant Pot recipe to stovetop by cook's call — sear chicken, build glaze in the same pan, return chicken to finish. Veg pairing chosen for color/crunch contrast against the dark glaze: bell pepper sautéed, broccoli broiled (new technique — prior weeks used plain-boiled veg). 6 full-size boxes, no half portion.",
    recipe: '/recipes',
    breakdown:
      'chicken breast $10.97 (Aldi) · red bell pepper $1.52 · broccoli florets $2.47 · eggs $2.43 (18/18, no reserve)',
    total: '$19.06',
    perBox: '$3.18 / box',
    photo: true,
    img: null,
  },
  {
    n: 5,
    dates: 'Jul 20 – 24, 2026',
    status: 'tbd',
    components: [],
    technique:
      'Candidates on deck: cà ri gà (southern-style chicken curry, ginger-free — reduced-liquid + browned-not-fried renovation planned) · velveted beef · xíu mại.',
    breakdown: null,
    total: null,
    perBox: null,
    photo: null,
  },
];
