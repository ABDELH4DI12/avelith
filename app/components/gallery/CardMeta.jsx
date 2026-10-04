export default function CardMeta({
  index,
  total,
  badge = "Visual Exploration",
}) {
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  return (
    <>
      <div className="reference-index">
        {number} / {count}
      </div>
      <div className="study-badge">{badge}</div>
    </>
  );
}
