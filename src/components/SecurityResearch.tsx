import { type ComponentType } from "react";
import { BadgeCheck, Bug, ExternalLink, Landmark, ShieldCheck, Trophy } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";
import { nvdUrl } from "../lib/cve";

const RECOGNITION_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "MSRC Researcher — Special Mentions": Trophy,
  "NCIIPC Acknowledgement": Landmark,
};

function SubHeading({
  Icon,
  title,
  count,
}: {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  count?: number;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <Icon className="h-5 w-5 text-accent" />
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      {count !== undefined && <span className="chip chip-accent font-mono">{count}</span>}
    </div>
  );
}

export default function SecurityResearch() {
  return (
    <Section
      id="research"
      eyebrow="research"
      title="Security research & disclosures"
      subtitle="Vulnerabilities I've discovered, reported, and had acknowledged by vendors and programs worldwide."
    >
      <Reveal>
        <SubHeading Icon={Bug} title="Published CVEs" count={resume.cves.length} />
        <div className="grid gap-4 md:grid-cols-2">
          {resume.cves.map((cve) => (
            <a
              key={cve.id}
              href={cve.link ?? nvdUrl(cve.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Bug className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold text-slate-100 transition-colors group-hover:text-accent">
                    {cve.id}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-0.5 truncate text-sm text-slate-400">
                  {cve.title}
                  {cve.product && <span className="text-slate-500"> — {cve.product}</span>}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-12">
        <SubHeading Icon={BadgeCheck} title="Recognition" />
        <div className="grid gap-4 md:grid-cols-2">
          {resume.recognitions.map((r) => {
            const Icon = RECOGNITION_ICONS[r.title] ?? BadgeCheck;
            const inner = (
              <>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-100 transition-colors group-hover:text-accent">
                        {r.title}
                      </h4>
                      {r.link && (
                        <ExternalLink className="h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-accent" />
                      )}
                    </div>
                    <p className="text-xs text-accent-soft">{r.org}</p>
                  </div>
                </div>
                {r.note && <p className="mt-4 text-sm leading-relaxed text-slate-400">{r.note}</p>}
              </>
            );
            return r.link ? (
              <a
                key={r.title}
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group p-6"
              >
                {inner}
              </a>
            ) : (
              <div key={r.title} className="card p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <SubHeading Icon={ShieldCheck} title="Hall of Fame" count={resume.hallOfFame.length} />
        <div className="card p-6">
          <div className="flex flex-wrap gap-2.5">
            {resume.hallOfFame.map((h) =>
              h.link ? (
                <a
                  key={h.org}
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip-accent hover:-translate-y-0.5"
                >
                  {h.org}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span key={h.org} className="chip">
                  {h.org}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Acknowledged for responsible vulnerability disclosures, including rewarded submissions.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
