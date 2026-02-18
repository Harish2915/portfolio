import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import ProjectModal from '../components/ProjectModal';

const defaultImage = 'https://via.placeholder.com/600x400?text=No+Image';

const projects = [
  {
    title: 'Smart Task Management System',
    description:
      'A full-featured task management application with real-time updates, categories, and team collaboration.',
    features: [
      'Real-time updates via WebSockets',
      'User authentication and roles',
      'Drag-and-drop interface',
    ],
    tech: ['React', 'FastAPI', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200',
  },
  {
    title: 'Job Portal System',
    description:
      'Job portal with GraphQL API for job listings, applications, and employer dashboards.',
    features: [
      'GraphQL-based backend',
      'Advanced search and filters',
      'Employer dashboard with analytics',
    ],
    tech: ['React', 'GraphQL', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200',
  },
  {
    title: 'Crime Analysis Project',
    description:
      'Data analysis and visualization platform for crime statistics and pattern recognition.',
    features: [
      'Interactive charts and maps',
      'Data import/export capabilities',
      'Predictive trend analysis',
    ],
    tech: ['Python', 'Pandas', 'Visualization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
  },
  {
    title: 'Marine Plastic Classification',
    description:
      'ML-based classification system for identifying and categorizing marine plastic waste from images.',
    features: [
      'Image preprocessing pipeline',
      'TensorFlow CNN model',
      'Web interface for uploads',
    ],
    tech: ['Python', 'TensorFlow', 'CNN'],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A selection of projects I've built and contributed to
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item} className="h-full">
              <motion.div
                className="group cursor-pointer h-full"
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
              >
                <GlassCard
                  hover={false}
                  className="p-6 h-full flex flex-col hover:glow-card"
                >
                  {/* Image */}
                  <img
                    src={project.image || defaultImage}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />

                  {/* Content */}
                  <div className="flex flex-col flex-1">

                    <h3 className="text-xl font-semibold text-text mb-2">
                      {project.title}
                    </h3>

                    <p className="text-muted text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags — pinned bottom */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium
                  bg-primary/20 text-primary border border-primary/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
}
