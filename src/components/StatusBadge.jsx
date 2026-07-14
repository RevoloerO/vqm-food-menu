export default function StatusBadge({ status }) {
  if (status === 'locked') return <span className="badge locked">● Locked</span>;
  if (status === 'provisional') return <span className="badge provisional">◌ Awaiting photo</span>;
  return <span className="badge tbd">○ Not planned</span>;
}
