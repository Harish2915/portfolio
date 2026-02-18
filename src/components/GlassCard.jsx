import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={
        'bg-card rounded-2xl p-6 border border-border shadow-soft ' +
        (hover ? 'hover:border-primary/50 hover:glow-card transition-all duration-300 ' : '') +
        className
      }
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
