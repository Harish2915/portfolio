import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Harish2915",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/harish-m-6506352bb",
  },
  {
    icon: HiMail,
    href: "mailto:harish29012004@gmail.com",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

        {/* Name */}
        <h3 className="text-xl font-bold gradient-text mb-2">
          Harish M
        </h3>

        {/* Tagline */}
        <p className="text-muted text-sm mb-6 max-w-xl mx-auto">
          Passionate Full Stack Developer building modern and scalable
          applications with clean user experiences.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-lg bg-bg-secondary border border-white/10 hover:border-primary/50 hover:text-primary transition"
            >
              <item.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

        {/* <div className="border-t border-white/10 my-6"></div> */}

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Harish M. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary text-muted hover:text-primary border border-white/10 hover:border-primary/50 transition text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>

        </div>
      </div>
      
    </footer>
  );
}
