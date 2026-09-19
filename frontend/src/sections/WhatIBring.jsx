import { Code2, BrainCircuit, Rocket, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Full-Stack Capability",
    description:
      "Ability to build complete web applications using React, Node.js, Express.js and MongoDB with modern development practices.",
    icon: Code2,
  },
  {
    title: "Real Project Experience",
    description:
      "Hands-on experience developing practical applications including LMS and rental management solutions.",
    icon: Rocket,
  },
  {
    title: "AI Integration",
    description:
      "Experience integrating AI-powered features using APIs such as Google Gemini to enhance application functionality.",
    icon: BrainCircuit,
  },
  {
    title: "Continuous Learner",
    description:
      "Always improving technical skills through projects, certifications and exploring modern technologies.",
    icon: BookOpen,
  },
];

function WhatIBring() {
  return (
    <section
      id="what-i-bring"
      className="border-t border-white/5 bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I Bring
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Value beyond{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              code.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Combining technical skills, practical project experience and
            continuous learning to build reliable and user-focused solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:border-purple-500/20 group-hover:bg-purple-500/10 group-hover:text-purple-400">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 rounded-3xl border border-blue-500/10 bg-gradient-to-r from-blue-500/[0.08] to-purple-500/[0.08] p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Ready to contribute, learn and grow with a development team.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Focused on creating scalable applications, solving problems and
            delivering meaningful user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIBring;
