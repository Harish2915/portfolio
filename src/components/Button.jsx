import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary hover:bg-[#4338CA] text-white shadow-soft hover:glow-primary',
  secondary: 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:glow-secondary',
  outline: 'bg-transparent border border-border text-text hover:border-primary hover:text-primary hover:glow-primary',
  gradient: 'bg-gradient-to-r from-primary to-secondary border-0 text-white shadow-soft hover:shadow-soft-lg hover:opacity-90',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ' +
    variants[variant] +
    ' ' +
    className;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={baseClass}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
