import {
  Code2,
  Database,
  BrainCircuit,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    value: "2+",
    label: "Full-Stack Projects",
  },
  {
    icon: Code2,
    value: "MERN",
    label: "Stack Developer",
  },
  {
    icon: BrainCircuit,
    value: "AI",
    label: "Integration",
  },
  {
    icon: Database,
    value: "REST",
    label: "APIs",
  },
  {
    icon: ShieldCheck,
    value: "JWT",
    label: "Authentication",
  },
  {
    icon: GraduationCap,
    value: "1st Class",
    label: "Graduate",
  },
];

function RecruiterQuickView() {
  return (
    <section className="border-y border-white/10 bg-slate-900/30 py-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group flex items-center gap-3 px-4 py-5 transition duration-300 hover:bg-white/[0.03] sm:px-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-400">
                  <Icon size={18} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">
                    {item.value}
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-slate-500">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default RecruiterQuickView;
