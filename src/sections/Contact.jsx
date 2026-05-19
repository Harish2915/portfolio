import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import GlassCard from "../components/GlassCard";

/* ================= EMAILJS CONFIG ================= */

const SERVICE_ID = "service_n0tj4zs";
const OWNER_ID = "template_38ea594"; // Owner template
const CLIENT_ID = "template_8lqq3h4"; // Client template
const PUBLIC_KEY = "phfJLHD8dVPna2ZRu";

/* ================= CONTACT DATA ================= */

const contacts = [
  //   {
  //   icon: HiPhone,
  //   label: "Phone",
  //   value: "+91 8148690290",
  //   href: "call:+918148690290",
  // },
  {
    icon: HiMail,
    label: "Email",
    value: "Send Email",
    href: "mailto:harish29012004@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "View Profile",
    href: "https://www.linkedin.com/in/harish2913",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/Harish2915",
  },
];


/* ================= COMPONENT ================= */

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      await emailjs.send(
        SERVICE_ID,
        CLIENT_ID,
        templateParams,
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        OWNER_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 hover:glow-card">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-text font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-text font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    placeholder="Type a Message..."
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text placeholder-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-soft hover:shadow-soft-lg transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <p className="text-2xl font-semibold gradient-text mb-2">
                  Message Sent
                </p>
                <p className="text-muted">
                  Thank you! I'll get back to you soon.
                </p>
              </motion.div>
            )}
          </GlassCard>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 gap-6"
        >
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? motion.a : motion.div;

            return (
              <Wrapper
                key={label}
                href={href || undefined}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-4 rounded-xl 
        bg-white/5 border border-white/10 
        transition-all duration-300
        hover:border-primary/50 
        hover:bg-primary/5 
        hover:shadow-[0_0_20px_rgba(79,70,229,0.25)]"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-primary/20 
        flex items-center justify-center text-primary
        transition-transform duration-300
        group-hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs text-muted">{label}</p>
                  <p className="text-text font-semibold break-words">
                    {value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
