import { ArrowUp, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        {/* Top Footer */}

        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}

          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-white"
            >
              SAIFUL
              <span className="text-blue-500">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              MERN Stack Developer focused on building modern, scalable and
              user-focused web applications.
            </p>

            {/* Social */}

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/saifulislamsshakib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/saiful-islam-shakib-0ba803293/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition hover:border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="#home"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#certifications"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Certifications
              </a>

              <a
                href="#education"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Education
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-500 transition hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:saifulislamsshakib@gmail.com"
                className="flex items-start gap-3 text-sm text-slate-500 transition hover:text-blue-400"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />

                <span>saifulislamsshakib@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin size={17} className="mt-0.5 shrink-0" />

                <span>Dhaka, Kallyanpur, road no: 14, house: 74/c</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {currentYear} Saiful Islam. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-blue-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition group-hover:border-blue-500/20 group-hover:bg-blue-500/10">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
