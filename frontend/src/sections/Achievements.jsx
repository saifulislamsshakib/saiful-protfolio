import { Trophy, GraduationCap, Medal, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "First Class Honours",
    subtitle: "BSc Computing",
    description:
      "Achieved First Class Honours in Bachelor of Science in Computing at the University of Greenwich.",
    icon: GraduationCap,
    number: "01",
  },
  {
    title: "Best Performance",
    subtitle: "AIH",
    description:
      "Recognised for strong academic and technical performance during my studies.",
    icon: Trophy,
    number: "02",
  },
  {
    title: "Top Student",
    subtitle: "Web Development",
    description:
      "Recognised for strong performance and practical skills in web development.",
    icon: Star,
    number: "03",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-white/5 bg-slate-900/20 py-24 sm:py-28 lg:py-32"
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
            Achievements
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Milestones that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              matter.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Academic and professional milestones that reflect my commitment to
            learning, development and continuous improvement.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.04]"
              >
                {/* Background Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/10" />

                {/* Number */}
                <span className="absolute right-6 top-6 font-mono text-xs font-semibold text-slate-700">
                  {achievement.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:border-purple-500/20 group-hover:bg-purple-500/10 group-hover:text-purple-400">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                    {achievement.subtitle}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {achievement.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-7 flex items-center gap-2 border-t border-white/10 pt-5">
                  <Medal size={16} className="text-slate-600" />

                  <span className="text-xs font-medium text-slate-600">
                    Achievement
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
