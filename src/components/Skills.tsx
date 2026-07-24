import { type ComponentType } from "react";
import {
  BadgeCheck,
  Code,
  Cpu,
  Network,
  Radar,
  ShieldCheck,
  Star,
  Terminal,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "Penetration Testing": ShieldCheck,
  "Offensive & Red Team": Radar,
  Methodologies: BadgeCheck,
  "Core Tools": Terminal,
  "Active Directory": Network,
  "Mobile & BAS (Breach & Attack Simulation)": Cpu,
  "SIEM / Monitoring": Star,
};

export default function Skills() {
  const entries = Object.entries(resume.skills);
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Skills & tooling"
      subtitle="The stack I reach for across offensive security engagements."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {entries.map(([category, list], i) => {
          const Icon = ICONS[category] ?? Code;
          return (
            <Reveal key={category} delay={i * 0.05}>
              <div className="card card-hover h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="font-semibold text-slate-100">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
