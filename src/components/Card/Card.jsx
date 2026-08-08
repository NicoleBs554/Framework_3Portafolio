import './Card.css';

export default function Card({ title, subtitle, children, accent }) {
  return (
    <article className="card-shell" style={accent ? { borderColor: accent } : undefined}>
      <div className="card-header">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="card-body">{children}</div>
    </article>
  );
}
