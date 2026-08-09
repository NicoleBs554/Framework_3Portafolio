import { useContext, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel.jsx';
import { ProfileContext } from '../../context/ProfileContext.jsx';
import './About.css';

export default function About() {
  const { profile, saveProfile, uploadAvatar } = useContext(ProfileContext);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: profile.name,
    location: profile.location,
    phone: profile.phone,
    email: profile.email,
    paragraphs: profile.profileParagraphs.join('\n\n')
  });

  const startEdit = () => {
    setForm({
      name: profile.name,
      location: profile.location,
      phone: profile.phone,
      email: profile.email,
      paragraphs: profile.profileParagraphs.join('\n\n')
    });
    setEditing(true);
  };

  const cancelEdit = () => setEditing(false);

  const handleSave = () => {
    const paragraphs = form.paragraphs.split('\n\n').map((p) => p.trim()).filter(Boolean);
    saveProfile({
      name: form.name,
      location: form.location,
      phone: form.phone,
      email: form.email,
      profileParagraphs: paragraphs
    });
    setEditing(false);
  };

  const handleAvatar = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) uploadAvatar(file).catch(() => {});
  };

  return (
    <div className="about-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SectionTitle title="Acerca de mí" subtitle="Perfil profesional y proyectos destacados" />
        <div>
          {editing ? (
            <>
              <button className="btn" onClick={handleSave}>Guardar</button>
              <button className="btn" onClick={cancelEdit} style={{ marginLeft: '0.5rem' }}>Cancelar</button>
            </>
          ) : (
            <>
              <button className="btn" onClick={startEdit}>Editar perfil</button>
            </>
          )}
        </div>
      </div>

      <div className="about-grid">
        <Card title="Perfil" subtitle={`${profile.location} • ${profile.phone}`}>
          {editing ? (
            <div>
              <label>Nombre</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <label>Ubicación</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              <label>Teléfono</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <label>Email</label>
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <label>Bio</label>
              <textarea rows={6} value={form.paragraphs} onChange={(e) => setForm({ ...form, paragraphs: e.target.value })} />
              <label>Avatar</label>
              <input type="file" accept="image/*" onChange={handleAvatar} />
            </div>
          ) : (
            <>
              {profile.profileParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                <strong>Contacto:</strong> {profile.email} · <a href={profile.github}>{profile.githubLabel}</a> · <a href={profile.linkedin}>{profile.linkedinLabel}</a>
              </p>
            </>
          )}
        </Card>

        <Card title="Experiencia y proyectos" subtitle="Puestos y trabajos relevantes">
          {profile.experiences.map((exp, i) => (
            <div key={i} style={{ marginBottom: '0.8rem' }}>
              <h4 style={{ margin: 0 }}>{exp.org} — <small>{exp.role}</small></h4>
              <small style={{ color: 'var(--muted)' }}>{exp.dates}</small>
              <ul>
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              {exp.repo && (
                <p><a href={exp.repo} target="_blank" rel="noreferrer">Repositorio</a></p>
              )}
            </div>
          ))}
        </Card>
      </div>

      <TestimonialCarousel />
    </div>
  );
}
