import { recipes } from '../data/recipes.js';

function Recipe({ r }) {
  return (
    <article className="recipe">
      <div className="rhead">
        <div className="tag">{r.tag}</div>
        <h2>{r.title}</h2>
        <div className="meta">{r.meta}</div>
      </div>
      <div className="rbody">
        <p className="sec">Ingredients</p>
        <ul className="ing">
          {r.ingredients.map((ing, i) => (
            <li key={i}>
              <span>{ing.name}</span>
              <span className="amt">{ing.amt}</span>
            </li>
          ))}
        </ul>
        {r.note && <p className="rnote">{r.note}</p>}

        <p className="sec">Method</p>
        <ol className="steps">
          {r.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>

        {r.renovation && (
          <div className="reno">
            <b>{r.renovation.label}</b>
            {r.renovation.text}
          </div>
        )}

        {r.mealPrepNote && (
          <div className="note">
            <b>Meal-prep notes</b>
            {r.mealPrepNote}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Recipes() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="eyebrow">Claxton Placement · Recipe Book</div>
        <h1>
          Recipes worth <em>cooking again.</em>
        </h1>
        <p className="sub">
          Full specs for dishes that earned a repeat — scaled to the meal-prep batch, with the cook's-call
          changes recorded as part of the recipe, not as deviations.
        </p>
      </header>

      {recipes.map((r) => (
        <Recipe key={r.id} r={r} />
      ))}

      <div className="foot2">
        To add a recipe: edit the recipes array in src/data/recipes.js. Companion to the Meal Log.
      </div>
    </div>
  );
}
