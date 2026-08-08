import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel.jsx';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <SectionTitle
        title="Acerca de mí"
        subtitle="Profesional en análisis de datos con experiencia en equipos colaborativos, liderazgo y proyectos basados en Data." 
      />

      <div className="about-grid">
        <Card title="Mi perfil" subtitle="Experiencia en Data y liderazgo">
          <p>Soy una especialista en análisis de datos con antecedentes en proyectos de investigación, visualización y dirección de equipos. Mi enfoque es convertir información bruta en decisiones estratégicas.</p>
          <ul>
            <li>Experiencia en Universidad Rafael Urdaneta.</li>
            <li>Trabajo en WYA Venezuela con liderazgo de voluntariado.</li>
            <li>Certificaciones de Data Analytics, Cloud y liderazgo.</li>
          </ul>
        </Card>
        <Card title="Objetivos" subtitle="Proyectos data-driven">
          <p>Busco desarrollar soluciones que integren visualizaciones efectivas, gestión de datos y métricas de eficiencia dentro de proyectos de análisis y consultoría.</p>
        </Card>
      </div>

      <TestimonialCarousel />
    </div>
  );
}
