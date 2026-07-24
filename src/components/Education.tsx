import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" eyebrow="education" title="Education">
      <div className="grid gap-5">
        {resume.education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.05}>
            <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-100">{edu.degree}</h3>
                <p className="mt-0.5 text-sm text-accent-soft">{edu.school}</p>
                {edu.university && <p className="text-sm text-slate-500">{edu.university}</p>}
                {edu.note && <p className="mt-1 text-sm text-slate-400">{edu.note}</p>}
              </div>
              {edu.period && <span className="chip font-mono">{edu.period}</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
