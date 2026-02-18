import { motion } from 'framer-motion';
import {
  HiLightBulb,
  HiAcademicCap,
  HiUserGroup,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

const highlights = [
  {
    icon: HiLightBulb,
    title: 'Problem Solver',
    description: 'I break down complex problems into elegant solutions.',
  },
  {
    icon: HiAcademicCap,
    title: 'Fast Learner',
    description: 'Quick to adapt to new technologies and best practices.',
  },
  {
    icon: HiUserGroup,
    title: 'Team Player',
    description: 'Collaborative mindset with strong communication skills.',
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

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A passionate developer crafting digital solutions with modern technologies
          </p>
        </motion.div>

        {/* Profile + Quick Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Left Side */}
          <motion.div variants={item} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text mb-2">
                Personal Profile
              </h3>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
                I'm a passionate <span className="text-primary font-semibold">Full Stack Developer </span>
                who enjoys building scalable web applications and solving real-world problems through technology.
                A continuous learner with strong collaboration skills, always exploring modern development practices.
              </p>

            </div>

            <div>
              <h3 className="text-lg font-semibold text-text mb-2">
                Career Objectives
              </h3>
              <p className="text-muted leading-relaxed">
                Seeking an opportunity to leverage my technical skills in building innovative solutions
                while continuously learning and growing as a software professional.
              </p>

            </div>
          </motion.div>

          {/* Right Side Quick Info Cards */}
          <motion.div variants={item}>
            <GlassCard className="p-6 md:p-8 hover:glow-card">

              <h3 className="text-xl font-semibold text-text mb-6">
                Quick Info
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                {/* Email */}
                <div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4
                      transition-all duration-300 hover:border-primary/50 
                      hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)] 
                      hover:-translate-y-1 overflow-hidden">

                  <HiOutlineMail className="text-primary w-6 h-6 mt-1 flex-shrink-0
                                  transition-transform duration-300 group-hover:scale-110" />

                  <div className="min-w-0">
                    <p className="text-muted text-sm">Email</p>
                    <a
                      href="mailto:harish29012004@gmail.com"
                      className="text-primary font-medium hover:underline break-all"
                    >
                      Send a Mail
                    </a>
                  </div>

                </div>

                {/* Phone */}
                <div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4
                      transition-all duration-300 hover:border-primary/50 
                      hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)] 
                      hover:-translate-y-1">

                  <HiOutlinePhone className="text-primary w-6 h-6 mt-1
                                   transition-transform duration-300 group-hover:scale-110" />

                  <div>
                    <p className="text-muted text-sm">Phone</p>
                    <a
                      href="tel:+918148690290"
                      className="text-primary font-medium hover:underline"
                    >
                      +91 8148690290
                    </a>
                  </div>

                </div>

                {/* WhatsApp */}
                <div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4
                      transition-all duration-300 hover:border-primary/50 
                      hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)] 
                      hover:-translate-y-1">

                  <FaWhatsapp className="text-primary w-6 h-6 mt-1
                               transition-transform duration-300 group-hover:scale-110" />

                  <div>
                    <p className="text-muted text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/918148690290"
                      target="_blank"
                      className="text-primary font-medium hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                </div>

                {/* LinkedIn */}
                <div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4
                      transition-all duration-300 hover:border-primary/50 
                      hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(79,70,229,0.25)] 
                      hover:-translate-y-1">

                  <FaLinkedin className="text-primary w-6 h-6 mt-1
                               transition-transform duration-300 group-hover:scale-110" />

                  <div>
                    <p className="text-muted text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/harish-m-6506352bb"
                      target="_blank"
                      className="text-primary font-medium hover:underline"
                    >
                      harish-m-6506352bb
                    </a>
                  </div>

                </div>

              </div>
            </GlassCard>
          </motion.div>

        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={item}>
              <GlassCard className="h-full text-center hover:glow-card">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary glow-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-semibold text-text mb-2">
                  {title}
                </h4>
                <p className="text-muted text-sm">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
