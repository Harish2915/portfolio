import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import GlassCard from '../components/GlassCard';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Younder Bots (OPC) Pvt Ltd',
    period: 'Sep 2025 – Jan 2026',

    summary:
      'Worked on full stack web development using modern frontend and backend technologies, contributing to real-world application features and API development.',

    achievements: [
      'Developed responsive user interfaces using HTML, CSS, JavaScript, and React.',
      'Built backend services with FastAPI and implemented GraphQL APIs for efficient data fetching.',
      'Integrated databases using SQLAlchemy and handled data models and queries.',
      'Debugged application issues and improved performance across multiple modules.',
      'Collaborated with developers to implement new features and optimize workflows.',
    ],

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Python',
      'FastAPI',
      'GraphQL',
      'SQLAlchemy',
    ],

    impact:
      'Gained hands-on experience in building scalable full stack applications and working within a professional development environment.',
  },
];



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            My professional journey so far
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />
          {experiences.map((exp, i) => (
            <motion.div key={exp.company} variants={item} className="relative pl-16 pb-12">
              <motion.div
                className="absolute left-4 w-4 h-4 rounded-full border-2 border-primary bg-card z-10 shadow-soft glow-primary"
                whileInView={{ scale: [1, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <GlassCard className="h-full hover:glow-card p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text">
                      {exp.role}
                    </h3>
                    <p className="text-secondary font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {exp.period}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-text font-medium mb-2">Key Contributions</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((point, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-primary">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="text-xs text-primary font-medium">
                   {exp.impact}
                </div>

              </GlassCard>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
