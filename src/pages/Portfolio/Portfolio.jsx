import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import './Portfolio.css';

const projects = [
  {
    id: 'tracking-analytics',
    title: 'Análisis de Commits',
    category: 'Data',
    description: 'Dashboard de actividad y eficiencia por mes para seguimiento de productividad y mejoras.',
  },
  {
    id: 'web-dashboard',
    title: 'Dashboard Web',
    category: 'Web',
    description: 'Interfaz de usuario para métricas de clientes y visualización de KPI en tiempo real.',
  },
  {
    id: 'mobile-insights',
    title: 'App Mobile Data',
    category: 'Mobile',
    description: 'Aplicación móvil para consultar análisis de datos y tendencias desde dispositivos.',
  },
  {
    id: 'data-pipeline',
    title: 'Pipeline DATA',
    category: 'Data',
    description: 'Implementación de flujo ETL para limpieza y análisis de datos empresariales.',
  }
];

const categories = ['Todos', 'Data', 'Web', 'Mobile'];

export default function Portfolio() {
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="portfolio-page">
      <SectionTitle title="Portafolio" subtitle="Pestañas dinámicas por categoría para priorizar proyectos Data y digitales." />
      <div className="portfolio-tabs">
        {categories.map((category) => (
          <button key={category} className={category === active ? 'tab active' : 'tab'} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filtered.map((project) => (
          <Card key={project.id} title={project.title} subtitle={project.category} accent="var(--accent)">
            <p>{project.description}</p>
            <Link className="project-link" to={`/project/${project.id}`}>
              Ver detalles
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
