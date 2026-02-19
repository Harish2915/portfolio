import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiOutlineMail } from 'react-icons/hi';
import Button from '../components/Button';
import HeroVisuals from '../components/HeroVisuals';

const roles = ['Full Stack Developer', 'React Developer', 'Backend Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-20 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2 text-xl md:text-2xl"
            >
              Hi, I'm Harish
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight"
            >
              Full Stack Developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-8 mb-4 text-xl sm:text-2xl text-secondary font-mono flex items-center"
            >
              <span>{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg mb-8 max-w-lg leading-relaxed"
            >
              I build scalable web applications and APIs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4"
            >

              <Button
                href="#projects"
                variant="gradient"
                className="w-full sm:w-auto sm:min-w-[160px]"
              >
                View Projects
              </Button>

              <Button
                href="/Resume/Harish_Resume.pdf"
                download
                variant="outline"
                icon={HiDownload}
                className="w-full sm:w-auto sm:min-w-[160px]"
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                icon={HiOutlineMail}
                className="w-full sm:w-auto sm:min-w-[160px]"
              >
                Contact Me
              </Button>

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <HeroVisuals />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
