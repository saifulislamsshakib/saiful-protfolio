import { ArrowRight, Download, Mail } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 bg-slate-950"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[150px] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Availability */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

              <span className="text-xs font-semibold text-blue-400 sm:text-sm">
                Available for opportunities
              </span>
            </div>

            {/* Name */}

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Saiful
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Islam
              </span>
            </h1>

            {/* Role */}

            <h2 className="mt-7 text-xl font-bold text-slate-200 sm:text-2xl">
              MERN Stack Developer
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, scalable and user-focused full-stack web
              applications using React, Node.js, Express.js and MongoDB, with a
              growing focus on AI-powered solutions.
            </p>

            {/* CTA Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/20"
              >
                View Projects
                <ArrowRight size={18} />
              </button>

              <a
                href="/resume.pdf"
                download="Saiful-Islam-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-white/[0.05]"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/saifulislamsshakib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/saiful-islam-shakib-0ba803293/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:saifulislamsshakib@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition duration-300 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
          >
            {/* Outer Glow */}

            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />

            {/* Image Frame */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-blue-950/20">
              {/* Image */}

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src={profileImage}
                  alt="Saiful Islam"
                  className="h-full w-full object-cover object-center"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </div>

              {/* Bottom Profile Info */}

              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
                <div>
                  <p className="text-sm font-bold text-white">Saiful Islam</p>

                  <p className="mt-1 text-xs text-slate-500">
                    MERN Stack Developer
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                  <span className="text-[11px] font-medium text-green-400">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tech Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-400">
                  {"</>"}
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">Full-Stack</p>

                  <p className="text-[11px] text-slate-500">
                    React • Node • MongoDB
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating AI Card */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-12 hidden rounded-2xl border border-purple-500/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-[11px] uppercase tracking-wider text-purple-400">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                AI Solutions
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-16 hidden flex-col items-center justify-center text-center sm:flex"
        >
          <span className="text-xs text-slate-600">Scroll to explore</span>

          <div className="mt-3 h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
