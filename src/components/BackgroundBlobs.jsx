import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
          bottom: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          marginLeft: -200,
          marginTop: -200,
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
