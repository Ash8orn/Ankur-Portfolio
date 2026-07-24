import { Briefcase } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="Professional experience">
      <div className="relative">
        {resume.experience.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.06}>
            <div
              className={`relative pl-9 sm:pl-11 ${
                i === resume.experience.length - 1 ? "pb-0" : "pb-10"
              }`}
            >
              {i !== resume.experience.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-2 top-3 h-[calc(100%+0.5rem)] w-px -translate-x-1/2 bg-white/10"
                />
              )}
              <span className="absolute left-2 top-3 z-10 -translate-x-1/2">
                {exp.period.includes("Present") && (
                  <span
                    aria-hidden
                    className="absolute -inset-2 animate-ping rounded-full bg-accent/70"
                  />
                )}
                <span
                  className={`relative grid h-4 w-4 place-items-center rounded-full bg-base-950 ring-2 ring-accent ${
                    exp.period.includes("Present") ? "animate-heartbeat" : ""
                  }`}
                >
                  <span
                    className={`rounded-full bg-accent ${
                      exp.period.includes("Present") ? "h-2 w-2" : "h-1.5 w-1.5"
                    }`}
                  />
                </span>
              </span>
              <div className="card card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{exp.role}</h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-accent-soft">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="chip font-mono">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
