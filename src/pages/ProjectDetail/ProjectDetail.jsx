import { useParams, Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import './ProjectDetail.css';

const projects = [
  {
    id: 'tracking-analytics',
    title: 'Análisis de Commits',
    category: 'Data',
    description: 'Dashboard de actividad en GitHub y eficiencia de commits por mes que muestra mejoras en el flujo de trabajo.',
    code: 'https://github.com/NicoleBs554',
    media: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'],
  },
  {
    id: 'web-dashboard',
    title: 'Dashboard Web',
    category: 'Web',
    description: 'Interfaz de métricas con filtros, tarjetas y gráficos para seguimiento de KPI en tiempo real.',
    code: 'https://github.com/NicoleBs554',
    media: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'],
  },
  {
    id: 'mobile-insights',
    title: 'App Mobile Data',
    category: 'Mobile',
    description: 'Aplicación móvil para visualizar insights rápidos sobre ventas, conversiones y retención.',
    code: 'https://github.com/NicoleBs554',
    media: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'],
  },
  {
    id: 'data-pipeline',
    title: 'Pipeline DATA',
    category: 'Data',
    description: 'ETL para limpieza y análisis de datos empresariales, con reportes automáticos y seguimiento de calidad.',
    code: 'https://github.com/NicoleBs554',
    media: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80'],
  }
];

const tabs = ['Descripción', 'Código', 'Multimedia'];

export default function ProjectDetail() {
  const { id } = useParams();
  const [active, setActive] = useState('Descripción');
  const [mediaIndex, setMediaIndex] = useState(0);
  const project = useMemo(() => projects.find((item) => item.id === id) || projects[0], [id]);

  useEffect(() => {
    setMediaIndex(0);
  }, [id]);

  const currentMedia = project.media[mediaIndex] || project.media[0];

  const handlePrev = () => {
    setMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  const handleNext = () => {
    setMediaIndex((prev) => (prev + 1) % project.media.length);
  };

  return (
    <div className="project-detail-page">
      <SectionTitle title={project.title} subtitle={`Categoría ${project.category}`} />
      <div className="project-tabs">
        {tabs.map((tab) => (
          <button key={tab} className={active === tab ? 'tab active' : 'tab'} onClick={() => setActive(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <Card title={active} subtitle={project.code} accent="var(--accent)">
        {active === 'Descripción' && <p>{project.description}</p>}
        {active === 'Código' && (
          <p>Revisa el repositorio en GitHub para ver la implementación completa y ejemplos de pipeline.</p>
        )}
        {active === 'Multimedia' && (
          <>
            <div className="project-media-carousel">
              <button type="button" className="media-nav" onClick={handlePrev}>
                ←
              </button>
              <img src={currentMedia} alt={`${project.title} media ${mediaIndex + 1}`} />
              <button type="button" className="media-nav" onClick={handleNext}>
                →
              </button>
            </div>
            <div className="project-media-thumbs">
              {project.media.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={mediaIndex === index ? 'thumb active' : 'thumb'}
                  onClick={() => setMediaIndex(index)}
                >
                  <img src={src} alt={`Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className="project-video-placeholder">Espacio reservado para video online</div>
          </>
        )}
      </Card>
      <Link className="back-link" to="/portfolio">← Volver al portafolio</Link>
    </div>
  );
}
