import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function CertificationCard({ certification, index }) {
  const hasCertificate = Boolean(certification.certificateUrl);
  const hasImage = Boolean(certification.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.03]"
    >
      {/* Certificate Preview */}
      <div className="relative h-60 overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        {hasImage ? (
          <a
            href={hasCertificate ? certification.certificateUrl : "#"}
            target={hasCertificate ? "_blank" : undefined}
            rel={hasCertificate ? "noopener noreferrer" : undefined}
            className={`block h-full w-full ${
              hasCertificate ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <img
              src={certification.image}
              alt={`${certification.title} certificate`}
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />

            {/* Image Overlay */}
            {hasCertificate && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/50">
                <div className="flex translate-y-3 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 opacity-0 shadow-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink size={16} />
                  View Certificate
                </div>
              </div>
            )}
          </a>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40">
              <Award size={42} strokeWidth={1.3} className="text-blue-400" />

              <span className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Certificate
              </span>
            </div>
          </div>
        )}

        {/* Number */}
        <span className="absolute left-6 top-6 z-10 font-mono text-sm font-semibold text-slate-500">
          {String(certification.number).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
          {certification.category}
        </p>

        {/* Title */}
        <h3 className="mt-4 min-h-[3.5rem] text-xl font-bold leading-7 text-white">
          {certification.title}
        </h3>

        {/* Issuer */}
        <p className="mt-4 text-sm font-medium text-slate-400">
          {certification.issuer}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Action */}
        {hasCertificate ? (
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
          >
            <ExternalLink size={16} />
            View Certificate
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-600">
            <Award size={16} />
            Certificate Pending
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default CertificationCard;
