import { useMemo, useState } from 'react';
import { weeks, PLACEMENT_TOTAL_WEEKS } from '../data/weeks.js';
import WeekCard from '../components/WeekCard.jsx';
import ProteinFilter from '../components/ProteinFilter.jsx';

const PROTEIN_ORDER = ['Chicken', 'Beef', 'Pork', 'Sausage', 'Egg'];

export default function Tracker() {
  const [selected, setSelected] = useState([]);

  const locked = weeks.filter((w) => w.status === 'locked').length;
  const pct = Math.round((locked / PLACEMENT_TOTAL_WEEKS) * 100);

  const options = useMemo(() => {
    const counts = new Map();
    for (const w of weeks) {
      for (const p of w.proteins ?? []) counts.set(p, (counts.get(p) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => {
        const ai = PROTEIN_ORDER.indexOf(a.name);
        const bi = PROTEIN_ORDER.indexOf(b.name);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi) || a.name.localeCompare(b.name);
      });
  }, []);

  const visible = useMemo(() => {
    if (selected.length === 0) return weeks;
    return weeks.filter((w) => selected.some((p) => (w.proteins ?? []).includes(p)));
  }, [selected]);

  const toggle = (name) =>
    setSelected((cur) => (cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name]));

  return (
    <div className="wrap">
      <header className="hero">
        <div className="eyebrow">Claxton Placement · Meal Log</div>
        <h1>
          One week,
          <br />
          one new <em>technique.</em>
        </h1>
        <p className="sub">
          A cooking log built to run the length of the placement. Each week keeps the skeleton — noodle,
          spinach, egg, protein — and adds one skill. Nothing counts until the photo proves it was cooked.
        </p>
        <div className="meterRow">
          <div className="meter">
            <div className="num">{locked}</div>
            <div className="lbl">Weeks Locked</div>
          </div>
          <div className="meter">
            <div className="num">{PLACEMENT_TOTAL_WEEKS}</div>
            <div className="lbl">Weeks In Placement</div>
          </div>
          <div className="meter">
            <div className="num">{pct}%</div>
            <div className="lbl">Logged</div>
          </div>
        </div>
        <div className="progress">
          <div className="fill" style={{ width: `${pct}%` }} />
          <div className="ghost" />
        </div>
      </header>

      <div className="rules">
        <div className="rule">
          <span className="k">METHOD</span>
          <span className="v">
            Noodle is mixed and sauced. Vegetables go in the same box but stay plain-boiled — they only
            marry the noodle at the microwave.
          </span>
        </div>
        <div className="rule">
          <span className="k">WHY</span>
          <span className="v">
            Pre-saucing the veg softens it and kills freshness by Friday. Keeping it dry holds it firm all
            week.
          </span>
        </div>
        <div className="rule">
          <span className="k">LOCK</span>
          <span className="v">
            A week is confirmed only after a photo of what was actually cooked. No photo, no lock.
          </span>
        </div>
        <div className="rule">
          <span className="k">PACE</span>
          <span className="v">
            One new protein or technique per week. Cheap, familiar base; the skill is what changes.
          </span>
        </div>
      </div>

      <div className="shead">
        <h2>The Log</h2>
        <span className="note">5 boxes / week · Mon–Fri lunch</span>
      </div>

      <div className="layout">
        <ProteinFilter
          options={options}
          selected={selected}
          onToggle={toggle}
          onClear={() => setSelected([])}
          shown={visible.length}
          total={weeks.length}
        />

        <div className="logmain">
          {visible.map((w) => (
            <WeekCard key={w.n} w={w} />
          ))}

          {visible.length === 0 && (
            <div className="empty">No weeks match that protein yet.</div>
          )}
        </div>
      </div>

      <div className="foot">
        NOODLE — Shirakiku Japanese-Style Udon · 1kg / 10 bundles · ~$0.55–0.83 per bundle (brought from
        home)
        <br />
        EGGS — 18-pack ~$2.43 (~$0.135 ea) · CARROT ~$1.32/pack · SPINACH ~$1.97/pack (half per week)
      </div>
    </div>
  );
}
