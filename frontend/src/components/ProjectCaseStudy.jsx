import { useEffect } from "react";
import {
  X,
  CheckCircle2,
  Database,
  Server,
  ShieldCheck,
  Code2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCaseStudy({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/90 px-4 py-6 backdrop-blur-md sm:px-6 lg:px-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-6 py-5 backdrop-blur-xl sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Project Case Study
                </p>

                <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Project Intro */}
              <div className="rounded-2xl border border-blue-500/10 bg-gradient-to-r from-blue-500/[0.06] to-purple-500/[0.06] p-6">
                <p className="text-sm font-medium text-blue-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Overview / Problem / Solution */}
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <CaseStudyCard
                  icon={Code2}
                  title="Project Overview"
                  text={project.overview}
                />

                <CaseStudyCard
                  icon={AlertTriangle}
                  title="Problem"
                  text={project.problem}
                />

                <CaseStudyCard
                  icon={Lightbulb}
                  title="Solution"
                  text={project.solution}
                />
              </div>

              {/* Key Features */}
              <CaseStudySection title="Key Features">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />

                      <span className="text-sm leading-6 text-slate-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              {/* My Role */}
              <CaseStudySection title="My Role">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <p className="text-sm leading-7 text-slate-400 sm:text-base">
                    {project.role}
                  </p>
                </div>
              </CaseStudySection>

              {/* Technical Architecture */}
              <CaseStudySection title="Technical Architecture">
                <div className="grid gap-5 md:grid-cols-3">
                  <ArchitectureCard
                    icon={ShieldCheck}
                    title="Authentication"
                    text={project.authentication}
                  />

                  <ArchitectureCard
                    icon={Server}
                    title="API Architecture"
                    text={project.apiArchitecture}
                  />

                  <ArchitectureCard
                    icon={Database}
                    title="Database Design"
                    text={project.databaseDesign}
                  />
                </div>
              </CaseStudySection>

              {/* Challenges */}
              <CaseStudySection title="Challenges & Solutions">
                <div className="space-y-4">
                  {project.challenges.map((item) => (
                    <div
                      key={item.challenge}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                    >
                      <h4 className="font-semibold text-white">
                        {item.challenge}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              {/* Technology Stack */}
              <CaseStudySection title="Technology Stack">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CaseStudySection>

              {/* Links */}
              <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-500"
                >
                  <span className="text-xs font-bold">GH</span>
                  GitHub — Coming Soon
                </button>

                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-500"
                >
                  <ExternalLink size={16} />
                  Live Demo — Coming Soon
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseStudyCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        <Icon size={19} />
      </div>

      <h3 className="mt-5 font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function ArchitectureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <Icon size={21} className="text-blue-400" />

      <h3 className="mt-4 font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function CaseStudySection({ title, children }) {
  return (
    <section className="mt-10">
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h3>

      {children}
    </section>
  );
}

export default ProjectCaseStudy;
