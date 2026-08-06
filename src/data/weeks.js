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
    img: 'images/week4.png',
  },
  {
    n: 5,
    dates: 'Jul 20 – 24, 2026',
    status: 'locked',
    components: [
      { label: 'Omachi instant noodle', color: '#d8c9a8' },
      { label: 'Cheddar bratwurst + hủ tiếu khô sauce', color: 'var(--chili)' },
      { label: 'Raw cucumber', color: 'var(--scallion)' },
      { label: 'Soy-marinated egg ×3/meal', color: 'var(--yolk)' },
    ],
    technique:
      "Cheddar bratwurst boiled then sauced with hủ tiếu khô (dry noodle sauce) recipe, cook's version without carrot or wood ear mushroom. Omachi instant noodle at 1.5 packs/meal — first packaged-instant-noodle week, distinct from prior fresh-noodle weeks. Eaten with raw cucumber instead of a cooked/boiled vegetable.",
    recipe: '/recipes',
    breakdown:
      'bratwurst $2.97 · eggs $2.43 (18ct) · cucumber $0.76 · Omachi noodle ~$7.50 (9 packs from a ~$20/24-pack box, per cook\'s recollection, not a verified receipt)',
    total: '$13.66',
    perBox: '$2.28 / portion',
    photo: true,
    img: 'images/week5.png',
  },
  {
    n: 6,
    dates: 'Jul 27 – 31, 2026',
    status: 'locked',
    components: [
      { label: 'Rotini pasta (for color)', color: '#d8c9a8' },
      { label: 'Beef + onion stir-fry', color: 'var(--chili)' },
      { label: 'Soy-marinated egg ×3/meal', color: 'var(--yolk)' },
    ],
    technique:
      'Nữi xào bò xào hành tây — rotini swapped in for color contrast against the beef, not traditional to the dish. Cooked in 2 batches (pan-size constraint): each batch = 1 pasta box, 1 onion, half the beef. Pork fat + garlic stir-fried until golden, sliced onion added, then soy sauce, salt, sugar, white wine (first use in rotation), fish sauce — beef stir-fried in, then pre-boiled pasta folded through at the end. Protein splurge week: overtime pay funded a full London Broil roast instead of the usual budget cut.',
    recipe: '/recipes',
    breakdown:
      'London Broil Roast, Choice Angus $18.70 · Great Value Garden Rotini ×2 $2.48 · onion $1.68 · eggs $3.68 (2×12ct, 18/24 used, 6 reserved as snack)',
    total: '$26.54',
    perBox: '$4.42 / portion',
    photo: true,
    img: 'images/week6.jpg',
  },
  {
    n: 7,
    dates: 'Aug 3 – 7, 2026',
    status: 'tbd',
    components: [],
    technique:
      "Candidates on deck: cà ri gà (southern-style chicken curry, ginger-free — reduced-liquid + browned-not-fried renovation planned) · xíu mại (protein variety, ground-pork based). Velveted beef technique effectively covered by Week 6's bare stir-fry, though not a true velveting marinade.",
    breakdown: null,
    total: null,
    perBox: null,
    photo: null,
  },
];
