import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Folder,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* Scroll Detect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "glass shadow-soft py-4 backdrop-blur-md"
            : "py-4 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-xl font-bold gradient-text">
            Harish
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 font-medium transition relative ${isActive
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                    }`}
                >
                  <Icon size={18} />
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex items-center justify-center 
                       rounded-xl bg-white/5 border border-white/10 
                       text-text hover:text-primary hover:border-primary/40 
                       transition backdrop-blur-md shadow-soft"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 9.5 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-16 bottom-0 
                       z-40 lg:hidden 
                       px-6 pb-20
                       glass backdrop-blur-xl 
                       overflow-y-auto"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = active === link.href.replace("#", "");

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 py-3 text-lg font-medium border-b border-white/10 ${isActive
                        ? "text-primary"
                        : "text-text hover:text-primary"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
