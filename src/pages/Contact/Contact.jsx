import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <SectionTitle title="Contacto" subtitle="Deja un mensaje y te respondo en breve." />
      <div className="contact-grid">
        <Card title="Formulario de contacto" subtitle="Mensaje para colaboradores o solicitudes">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Nombre
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
            </label>
            <label>
              Email
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@correo.com" />
            </label>
            <label>
              Mensaje
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Escribe tu mensaje" rows="5" />
            </label>
            <button type="submit">Enviar mensaje</button>
            {sent && <p className="contact-success">Mensaje enviado. Gracias por escribir.</p>}
          </form>
        </Card>
        <Card title="Datos rápidos" subtitle="Conecta conmigo">
          <p>Email: nicole@example.com</p>
          <p>Ubicación: Venezuela</p>
          <p>Disponibilidad: Proyectos Data y consultoría.</p>
        </Card>
      </div>
    </div>
  );
}
