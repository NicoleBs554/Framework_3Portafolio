import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    name: 'María López',
    role: 'Mentora en WYA',
    quote: 'Una visión de datos sólida y una comunicación clara en cada proyecto. Inspira confianza.',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Profesor de Data Science',
    quote: 'Nicole combina análisis riguroso con una presentación visual excelente.',
  },
  {
    name: 'Ana Suárez',
    role: 'Líder de proyecto',
    quote: 'Gran manejo de equipos y datos; los resultados hablan por sí solos.',
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="testimonial-shell">
      <div className="testimonial-header">
        <div>
          <span>Testimonios</span>
          <h3>Lo que dicen sobre mi trabajo</h3>
        </div>
        <div className="testimonial-controls">
          <button onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
            <ArrowLeft size={18} />
          </button>
          <button onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <article className="testimonial-card">
        <div className="testimonial-stars">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={14} />
          ))}
        </div>
        <p>{item.quote}</p>
        <div>
          <strong>{item.name}</strong>
          <p>{item.role}</p>
        </div>
      </article>
    </section>
  );
}
