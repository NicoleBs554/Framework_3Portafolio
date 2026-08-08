import './Footer.css';

const social = [
  { href: 'https://github.com/NicoleBs554', label: 'GitHub' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'Twitter' }
];

export default function Footer() {
  return (
    <footer className="footer-card">
      <p>© 2026 Nicole B. Portfolio enfocado en DATA, visualizaciones y habilidades.</p>
      <div className="footer-links">
        {social.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
