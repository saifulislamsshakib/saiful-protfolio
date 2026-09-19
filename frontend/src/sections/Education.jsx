import { GraduationCap, Award, School } from "lucide-react";

import { motion } from "framer-motion";

const education = [
  {
    level: "UNDERGRADUATE",

    title: "Bachelor of Science in Computing",

    institution: "University of Greenwich, UK",

    year: "2026",

    result: "1st Class",

    description:
      "Completed undergraduate studies in computing with a focus on software development, web technologies, databases and practical application development.",

    icon: GraduationCap,
  },

  {
    level: "HIGHER SECONDARY",

    title: "Higher Secondary Certificate (HSC)",

    institution: "Ali Ahmed Mia Bohumukhi Mohabidyaloy",

    year: "2021",

    result: "GPA: 5.00",

    description:
      "Completed Higher Secondary education with an excellent academic result.",

    icon: Award,
  },

  {
    level: "SECONDARY",

    title: "Secondary School Certificate (SSC)",

    institution: "Dashani Mohonpur High School",

    year: "2019",

    result: "GPA: 4.67",

    description:
      "Completed Secondary School education with a strong academic result.",

    icon: School,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/5 bg-slate-950 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
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
            duration: 0.6,
          }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Education
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My academic background and educational journey.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[24px] top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:block" />

          <div className="space-y-7">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
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
                  className="relative flex gap-6"
                >
                  {/* Timeline Icon */}

                  <div className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-slate-950 text-blue-400 md:flex">
                    <Icon size={21} />
                  </div>

                  {/* Card */}

                  <div className="w-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-blue-500/20 hover:bg-white/[0.03] sm:p-8">
                    {/* Top */}

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                          {item.level}
                        </p>

                        <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-base text-slate-400">
                          {item.institution}
                        </p>
                      </div>

                      {/* Result */}

                      <div className="flex w-fit items-center gap-3">
                        <span className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-300">
                          {item.year}
                        </span>

                        <span className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm font-semibold text-blue-400">
                          {item.result}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}

                    <div className="my-6 h-px bg-white/10" />

                    {/* Description */}

                    <p className="text-sm leading-7 text-slate-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
