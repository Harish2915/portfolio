import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const techIcons = [
  { Icon: FaReact, delay: 0, x: '20%', y: '10%' },
  { Icon: FaNode, delay: 0.2, x: '70%', y: '20%' },
  { Icon: FaPython, delay: 0.4, x: '15%', y: '60%' },
  { Icon: SiJavascript, delay: 0.6, x: '75%', y: '55%' },
  { Icon: SiTypescript, delay: 0.8, x: '45%', y: '80%' },
  { Icon: FaGitAlt, delay: 1, x: '50%', y: '15%' },
];

export default function HeroVisuals() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Animated gradient shapes */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating tech icons */}
      <div className="relative w-full h-full">
        {techIcons.map(({ Icon, delay, x, y }) => (
          <motion.div
            key={delay}
            className="absolute w-14 h-14 rounded-xl glass flex items-center justify-center text-primary border border-primary/30 glow-primary"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { delay: delay + 0.5 },
              scale: { delay: delay + 0.5, type: 'spring', stiffness: 200 },
              y: {
                delay: delay + 0.5,
                duration: 3 + delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <Icon className="w-7 h-7" />
          </motion.div>
        ))}
      </div>

      {/* Code editor style mockup */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="glass rounded-2xl p-6 border border-border shadow-soft-lg max-w-md w-full opacity-60">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex gap-2">
              <span className="text-muted">const</span>
              <span className="text-primary">developer</span>
              <span className="text-text">=</span>
              <span className="text-highlight">'Harish'</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted">function</span>
              <span className="text-secondary">buildApp</span>
              <span className="text-text">()</span>
            </div>
            <div className="pl-4 text-muted">{'{'}</div>
            <div className="pl-8 text-text">
              return <span className="text-highlight">'scalable'</span>
            </div>
            <div className="pl-4 text-muted">{'}'}</div>
          </div>
        </div>
      </motion.div>

      {/* Abstract glowing cards */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-2xl glass border border-primary/30 glow-primary"
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 rounded-xl glass border border-secondary/30 glow-secondary"
        animate={{
          rotate: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
