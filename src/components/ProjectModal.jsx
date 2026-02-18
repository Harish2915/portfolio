import { motion } from "framer-motion";
import { HiX, HiCheckCircle } from "react-icons/hi";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    // Lock scroll completely
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        const esc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", esc);

        return () => {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", esc);
        };
    }, [onClose]);

    const modalContent = (
        <motion.div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <motion.div
                className="w-full max-w-4xl rounded-2xl shadow-2xl bg-bg-secondary border border-white/10 flex flex-col max-h-[90vh]"
                initial={{ scale: 0.96, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 30 }}
                transition={{ duration: 0.25 }}
            >

                {/* Header */}
                <div className="bg-primary/10 border-b border-white/10 p-6 relative">

                    <h2 className="text-xl md:text-2xl font-bold text-text mb-3">
                        {project.title}
                    </h2>

                    <div className="flex gap-2 flex-wrap">
                        {project.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-text hover:bg-primary/20"
                        onClick={onClose}
                    >
                        <HiX size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto flex-1">

                    <div className="mb-6">
                        <img
                            src={
                                project.image ||
                                "https://via.placeholder.com/800x450"
                            }
                            alt={project.title}
                            className="w-full rounded-xl border border-white/10"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div>
                            <h3 className="text-lg font-semibold text-text mb-2">
                                Project Description
                            </h3>
                            <p className="text-muted">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-text mb-2">
                                Key Features
                            </h3>

                            <ul className="space-y-2">
                                {project.features?.map((feat, i) => (
                                    <li key={i} className="flex gap-2 text-muted">
                                        <HiCheckCircle className="text-primary mt-1" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {project.tech?.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-text mb-3">
                                Technologies Used
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="bg-primary/10 border-t border-white/10 p-4 flex justify-end">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30"
                        >
                            View Code
                        </a>
                    )}
                </div>

            </motion.div>
        </motion.div>
    );

    return createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
}
