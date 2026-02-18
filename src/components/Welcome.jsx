import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Welcome({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500); // duration before entering site

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-bg text-text">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl right-10 bottom-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Welcome Text */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome
        </motion.h1>

        {/* Name */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          I'm Harish
        </motion.h2>

        {/* Loading Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 1, duration: 2 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-muted"
        >
          Welcome to My Portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}
