import { Award, ExternalLink, Trophy } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

export default function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="honors"
      title="Awards & Honors"
      subtitle="Recognition from Microsoft, past employers, and program organizers."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {resume.awards.map((award, i) => {
          const Icon = award.highlight ? Trophy : Award;
          return (
            <Reveal key={award.title} delay={i * 0.05}>
              <div
                className={`card flex h-full flex-col p-6 ${
                  award.highlight ? "border-accent/30 shadow-glow" : "card-hover"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                      award.highlight
                        ? "bg-accent-gradient text-base-950"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                      <h3 className="font-semibold text-slate-100">{award.title}</h3>
                      {award.date && (
                        <span className="chip whitespace-nowrap font-mono text-[11px]">
                          {award.date}
                        </span>
                      )}
                    </div>
                    {award.org && <p className="mt-0.5 text-sm text-accent-soft">{award.org}</p>}
                  </div>
                </div>
                {award.note && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{award.note}</p>
                )}
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    View <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
