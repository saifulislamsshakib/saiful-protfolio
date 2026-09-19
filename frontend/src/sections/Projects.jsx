import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCaseStudy from "../components/ProjectCaseStudy";

const projects = [
  {
    id: 1,
    number: "01",
    title: "AI-Powered Learning Management System",
    subtitle: "MERN Stack + Gemini AI",

    description:
      "A full-stack Learning Management System designed to manage courses, enrollment, lectures and learner progress, enhanced with AI-powered quiz and interview question generation.",

    icon: BrainCircuit,
    gradient: "from-blue-500/20 to-purple-500/20",

    // GitHub Repository
    github: "https://github.com/saifulislamsshakib/LMS-AQ-IP",

    // Live demo will be added after deployment
    liveDemo: null,

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "RTK Query",
      "JWT",
      "Cloudinary",
      "Gemini API",
    ],

    features: [
      "JWT & Cookie Authentication",
      "Course Creation & Management",
      "Student Enrollment",
      "Lecture Management",
      "Progress Tracking",
      "AI Quiz Generation",
      "AI Interview Questions",
    ],

    overview:
      "A complete learning management platform built with the MERN stack. The application provides workflows for learners and instructors while integrating Gemini AI for personalized learning features.",

    problem:
      "Learners need a centralized platform to access courses, track progress and practice assessments, while instructors need tools to manage learning content.",

    solution:
      "Developed a full-stack platform with authentication, course management, enrollment, lecture workflows, progress tracking and AI-powered quiz and interview question generation.",

    role: "Designed and developed the full-stack application including React frontend, Express APIs, MongoDB data management, authentication, state management and Gemini AI integration.",

    authentication:
      "JWT and cookie-based authentication are used to protect application resources and manage authenticated users.",

    apiArchitecture:
      "RESTful APIs built with Node.js and Express.js handle authentication, courses, enrollment, lectures, progress and AI-related operations.",

    databaseDesign:
      "MongoDB with Mongoose is used to manage users, courses, lectures, enrollments and learner progress.",

    challenges: [
      {
        challenge: "Managing authenticated application workflows",
        solution:
          "Implemented JWT and cookie-based authentication and structured protected application workflows around authenticated users.",
      },
      {
        challenge: "Connecting AI functionality with application workflows",
        solution:
          "Integrated the Google Gemini API to dynamically generate quizzes and interview questions based on the learning context.",
      },
      {
        challenge: "Managing frontend API communication",
        solution:
          "Used Redux Toolkit and RTK Query to organize global state and API communication in a maintainable way.",
      },
    ],
  },

  {
    id: 2,
    number: "02",
    title: "RentEase",
    subtitle: "Full-Stack Rental Management Platform",

    description:
      "A full-stack rental management platform designed to connect tenants, property owners and administrators through a centralized rental workflow.",

    icon: Building2,
    gradient: "from-purple-500/20 to-blue-500/20",

    // GitHub Repository
    github: "https://github.com/saifulislamsshakib/RentEase",

    // Live demo will be added after deployment
    liveDemo: null,

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "Cloudinary",
    ],

    features: [
      "Tenant Management",
      "Property Management",
      "Rental Applications",
      "Booking Approval",
      "Contract Management",
      "Payment Tracking",
      "Maintenance Requests",
      "Complaint Management",
      "Role-Based Access Control",
    ],

    overview:
      "A centralized rental management platform designed around separate workflows for tenants, property owners and administrators.",

    problem:
      "Rental processes involve multiple participants and require coordinated management of properties, applications, contracts, payments, maintenance and complaints.",

    solution:
      "Built a MERN-based platform that centralizes property lifecycle management, rental applications, booking approval, contracts, payments, maintenance and complaint handling.",

    role: "Designed and developed the full-stack platform, including React interfaces, REST APIs, MongoDB data models, authentication, authorization and rental management workflows.",

    authentication:
      "JWT authentication with role-based access control protects resources according to tenant, property owner and administrator responsibilities.",

    apiArchitecture:
      "Express.js REST APIs manage users, properties, rental applications, contracts, payments, maintenance requests and complaints.",

    databaseDesign:
      "MongoDB and Mongoose manage users, properties, applications, contracts, payments, maintenance records and complaint information.",

    challenges: [
      {
        challenge: "Managing multiple user roles",
        solution:
          "Implemented JWT authentication and role-based access control to separate tenant, owner and administrator workflows.",
      },
      {
        challenge: "Managing the property lifecycle",
        solution:
          "Structured workflows covering listing creation, rental applications, booking approval, contract generation and availability management.",
      },
      {
        challenge: "Connecting rental-related processes",
        solution:
          "Designed backend APIs and database relationships to support payments, contracts, maintenance requests and complaints.",
      },
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
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
              Featured Projects
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Things I have{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                built.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              Real-world full-stack applications focused on solving practical
              problems through modern web technologies.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-blue-500/20"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Visual */}
                    <div
                      className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${project.gradient} p-7 sm:p-10`}
                    >
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                      <div className="relative flex h-full flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-semibold text-slate-500">
                            PROJECT_{project.number}
                          </span>

                          <span className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-slate-400">
                            Featured
                          </span>
                        </div>

                        <div className="my-10 flex items-center justify-center">
                          <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-105">
                            <div className="absolute inset-5 rounded-2xl border border-blue-500/10" />

                            <Icon
                              size={58}
                              strokeWidth={1.2}
                              className="text-blue-400"
                            />

                            <Sparkles
                              size={18}
                              className="absolute right-8 top-8 text-purple-400"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Technology Stack
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Information */}
                    <div className="p-7 sm:p-10 lg:p-12">
                      <p className="text-sm font-medium text-blue-400">
                        {project.subtitle}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mt-8">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Key Features
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 text-sm text-slate-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-9 flex flex-wrap gap-3 border-t border-white/10 pt-7">
                        {/* Case Study */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
                        >
                          <Layers3 size={17} />
                          View Case Study
                        </button>

                        {/* GitHub */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} GitHub repository`}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
                        >
                          <span className="text-xs font-bold">GH</span>
                          GitHub
                        </a>

                        {/* Live Demo */}
                        {project.liveDemo ? (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-white"
                          >
                            <ArrowUpRight size={17} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-600">
                            <ArrowUpRight size={17} />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectCaseStudy
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;
