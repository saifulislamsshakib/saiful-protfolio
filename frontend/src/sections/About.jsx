import { Code2, Layers3, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building practical web applications across frontend, backend, APIs and databases.",
  },
  {
    icon: Layers3,
    title: "Modern MERN Stack",
    description:
      "Working with React.js, Node.js, Express.js, MongoDB and modern JavaScript.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Integrating AI-powered features into applications to create more useful experiences.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Turning real-world requirements into structured, maintainable application workflows.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-slate-950 py-24 sm:py-28 lg:py-32"
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
            About Me
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building practical solutions with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              modern technology.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I am a Computing graduate with a strong interest in full-stack web
            development. I enjoy building practical web applications that solve
            real-world problems, from learning management systems to rental
            management platforms.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — Introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8"
          >
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <Code2 size={22} />
            </div>

            <h3 className="text-xl font-bold text-white">
              My Development Journey
            </h3>

            <div className="mt-5 space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                My primary technology stack is MongoDB, Express.js, React.js and
                Node.js. I also have experience with JWT authentication, REST
                APIs, Redux Toolkit, RTK Query, Cloudinary and AI integration.
              </p>

              <p>
                Through my projects, I focus on creating complete application
                workflows rather than only building individual interfaces. This
                includes authentication, data management, API communication,
                database design and responsive user interfaces.
              </p>

              <p>
                I am looking for opportunities where I can contribute to
                real-world projects, improve my engineering skills and continue
                growing as a professional developer.
              </p>
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-blue-400 transition duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/10">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
