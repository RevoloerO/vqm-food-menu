import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge.jsx';

export default function WeekCard({ w }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="weekno">
          {w.n}
          <small>WEEK</small>
        </div>
        <div className="card-body">
          <div className="card-head">
            <span className="dates">{w.dates}</span>
            <StatusBadge status={w.status} />
          </div>

          {w.components.length > 0 && (
            <div className="components">
              {w.components.map((c, i) => (
                <span className="chip" key={i}>
                  <span className="dot" style={{ background: c.color }} />
                  {c.label}
                </span>
              ))}
            </div>
          )}

          {w.technique && (
            <div className="tech">
              <b>Technique</b>
              {w.technique}
              {w.recipe && (
                <Link className="recipelink" to={w.recipe}>
                  View full recipe →
                </Link>
              )}
            </div>
          )}

          {(w.breakdown || w.total) && (
            <div className="cost">
              {w.breakdown && <div className="breakdown">{w.breakdown}</div>}
              {w.total && (
                <div className="total">
                  {w.total} <small>{w.perBox}</small>
                </div>
              )}
            </div>
          )}

          {w.photo === true && <div className="photo yes">✓ Photo confirmed — 5 containers</div>}
          {w.photo === false && <div className="photo no">✗ No photo yet — provisional until cooked</div>}

          {w.img && (
            <img className="mealphoto" src={w.img} alt={`Week ${w.n} meal prep`} loading="lazy" />
          )}
        </div>
      </div>
    </div>
  );
}
