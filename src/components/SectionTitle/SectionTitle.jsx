import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <div>
        <span>Sección destacada</span>
        <h2>{title}</h2>
      </div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
