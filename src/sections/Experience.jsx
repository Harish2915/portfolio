import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import GlassCard from '../components/GlassCard';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Younder Bots (OPC) Pvt Ltd',
    period: 'Sep 2025 – Jan 2026',
    description: 'Worked on full stack development, building scalable web applications and APIs.',
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
              <GlassCard className="h-full hover:glow-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <HiBriefcase className="text-primary w-5 h-5" />
                  <span className="text-muted text-sm font-medium">{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-1">{exp.role}</h3>
                <p className="text-secondary font-medium mb-2">{exp.company}</p>
                <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
