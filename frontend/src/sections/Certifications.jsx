import { ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import CertificationCard from "../components/CertificationCard";
import certifications from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/5 bg-slate-900/20 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Certifications & Credentials
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Continuous{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                learning.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              Certifications and professional credentials demonstrating
              continuous learning across web development, programming and
              related technologies.
            </p>
          </div>

          {/* Count */}
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Award size={20} />
            </div>

            <div>
              <p className="text-lg font-bold text-white">
                {certifications.length}
              </p>

              <p className="text-xs text-slate-500">Credentials listed</p>
            </div>
          </div>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.number}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Future Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.015] p-6 text-center sm:p-8"
        >
          <p className="text-sm text-slate-500">
            More verified certifications can be added here as they become
            available.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1zS7xvegFj1W9PZ42X8mPeXpNIyX_yL9Q?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View All Certifications
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
