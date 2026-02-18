import { motion } from 'framer-motion';
import { DiMysql } from 'react-icons/di';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { FaJ, FaS } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';
import { SiBackendless, SiFastapi, SiGraphql, SiMysql, SiPostman, SiSqlalchemy } from 'react-icons/si';
import { TbApi, TbBrandJavascript } from 'react-icons/tb';

const skillGroups = [
  {
    title: 'Languages',
    icon: GrLanguage,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: TbBrandJavascript },
      { name: 'SQL', icon: DiMysql },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'React.js', icon: FaReact },
      { name: 'Bootstrap', icon: FaBootstrap },
    ],
  },
  {
    title: 'Backend',
    icon: SiBackendless,
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: TbApi },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'SQLAlchemy', icon: SiSqlalchemy },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [{ name: 'MySQL', icon: SiMysql }],
  },
  {
    title: 'Tools',
    icon: FaGitAlt,
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Workbench', icon: SiMysql },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Skills & <span className="gradient-text">Tech</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={item}>
              <motion.div
                className="bg-card rounded-2xl p-6 h-full border border-border shadow-soft hover:border-primary/50 hover:glow-card transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-secondary text-muted text-sm border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <skill.icon className="w-4 h-4" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
