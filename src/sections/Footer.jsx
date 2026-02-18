import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Harish2915",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/harish-m-6506352bb",
    label: "LinkedIn",
  },
  {
    icon: HiMail,
    href: "mailto:harish29012004@gmail.com",
    label: "Email",
  },
];

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-card">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">
              Harish M
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Full Stack Developer passionate about building modern web
              applications and solving real-world problems with technology.
            </p>

          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text font-semibold mb-4">
              Location
            </h4>
            <div className="space-y-2 text-sm text-muted">

              <p className="flex items-center justify-center md:justify-start gap-2">
                <HiLocationMarker className="text-primary" />
                Tamil Nadu, India
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

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
