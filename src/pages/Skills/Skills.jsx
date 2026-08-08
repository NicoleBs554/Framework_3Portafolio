import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import './Skills.css';

const radarData = [
  { subject: 'Español', A: 100 },
  { subject: 'Inglés', A: 85 },
  { subject: 'Italiano', A: 65 },
  { subject: 'Portugués', A: 40 },
  { subject: 'Francés', A: 35 }
];

const barData = [
  { skill: 'Python', level: 95 },
  { skill: 'SQL', level: 90 },
  { skill: 'Power BI', level: 88 },
  { skill: 'Pandas', level: 92 },
  { skill: 'Git', level: 82 }
];

const pieData = [
  { name: 'Data Wrangling', value: 35 },
  { name: 'Visualización', value: 30 },
  { name: 'Modelado', value: 20 },
  { name: 'Reportes', value: 15 }
];

const COLORS = ['#7ee787', '#4bd7ff', '#ff9f43', '#b75cff'];

export default function Skills() {
  const [activeItem, setActiveItem] = useState('Data & Cloud');
  const certifications = [
    {
      title: 'Data & Cloud',
      items: ['Google Data Analytics', 'IBM Cloud and Application Development Foundations']
    },
    {
      title: 'Ciencias de la Computación',
      items: ['CS50 de Harvard']
    },
    {
      title: 'Liderazgo',
      items: ['Academia de Incidencia WYA', 'Aumento de la Productividad de Google']
    }
  ];

  return (
    <div className="skills-page">
      <SectionTitle
        title="Habilidades y eficiencia"
        subtitle="Gráficos comparativos basados en datos de productividad, idiomas y distribución de esfuerzos." 
      />

      <div className="skills-grid">
        <Card title="Distribución de trabajo" subtitle="Comparativa de enfoque en Data">
          <div className="chart-card">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={100} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.06)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Nivel de habilidades" subtitle="Productividad y herramientas clave">
          <div className="chart-card">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData} margin={{ top: 12, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="skill" tick={{ fill: '#aaa', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#aaa', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.06)' }} />
                <Bar dataKey="level" fill="#7ee787" radius={[16, 16, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Idiomas" subtitle="Certificaciones y niveles">
          <div className="chart-card polar">
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData} outerRadius={120}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#ddd" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar dataKey="A" stroke="#7ee787" fill="#7ee787" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card title="Certificaciones" subtitle="Formación actualizable por categoría">
        <div className="accordion-list">
          {certifications.map((section) => (
            <div key={section.title} className="accordion-item">
              <button
                type="button"
                className={activeItem === section.title ? 'accordion-title active' : 'accordion-title'}
                onClick={() => setActiveItem(section.title)}
              >
                {section.title}
              </button>
              {activeItem === section.title && (
                <div className="accordion-body">
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
