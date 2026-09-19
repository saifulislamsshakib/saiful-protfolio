import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Braces,
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Postman", "JWT Authentication", "Cloudinary"],
  },
  {
    title: "AI",
    icon: Sparkles,
    skills: ["Google Gemini API", "AI Integration"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-slate-900/20 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technical Skills
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            A practical toolkit focused on building modern, scalable and
            user-focused full-stack applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-slate-900/70"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:border-purple-500/20 group-hover:bg-purple-500/10 group-hover:text-purple-400">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{category.title}</h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-blue-500/20 hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl border border-blue-500/10 bg-gradient-to-r from-blue-500/[0.05] to-purple-500/[0.05] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                Primary Stack
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                MongoDB + Express.js + React.js + Node.js
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
