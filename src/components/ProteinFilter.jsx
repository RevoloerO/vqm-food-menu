export default function ProteinFilter({ options, selected, onToggle, onClear, shown, total }) {
  return (
    <aside className="sidebar">
      <div className="filter">
        <div className="filter-head">
          <span className="filter-title">Protein</span>
          {selected.length > 0 && (
            <button type="button" className="filter-clear" onClick={onClear}>
              Clear
            </button>
          )}
        </div>

        <div className="filter-list">
          {options.map(({ name, count }) => {
            const on = selected.includes(name);
            return (
              <button
                type="button"
                key={name}
                className={`filter-opt${on ? ' on' : ''}`}
                onClick={() => onToggle(name)}
                aria-pressed={on}
              >
                <span className="filter-box" aria-hidden="true" />
                <span className="filter-name">{name}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="filter-foot">
          {selected.length === 0
            ? `Showing all ${total} weeks`
            : `Showing ${shown} of ${total} weeks`}
        </div>
      </div>
    </aside>
  );
}
