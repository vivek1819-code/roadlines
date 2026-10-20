export function SectionHeading({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="eyebrow"><span className="eyebrow-rule" />{kicker}</p>
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
