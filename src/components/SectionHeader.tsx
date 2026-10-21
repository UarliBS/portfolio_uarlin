export function SectionHeader({
  id,
  eyebrow,
  title,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="section-header" id={id} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </div>
  );
}
