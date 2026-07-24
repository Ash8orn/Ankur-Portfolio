import { useEffect, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";
import { resume } from "../data/resume";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-base-950/95 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-lg">
      <nav className="container-x flex h-16 items-center gap-6">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient font-mono text-sm font-bold text-base-950">
            AB
          </span>
          <span className="hidden text-sm font-semibold text-slate-200 sm:block">
            {resume.name}
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors ${
                  active === item.id
                    ? "text-accent"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={resume.resumeFile}
            download
            className="btn-ghost hidden px-4 py-2 text-xs sm:inline-flex"
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-base-950/95 backdrop-blur-md lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    active === item.id ? "text-accent" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resume.resumeFile}
                download
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-accent"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
