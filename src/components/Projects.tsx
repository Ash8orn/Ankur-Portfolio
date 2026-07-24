import { ArrowUpRight, Briefcase } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Selected engagements"
      subtitle="Client work delivered end to end — from testing through remediation and closure."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resume.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <article className="card card-hover group flex h-full flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Briefcase className="h-5 w-5" />
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="text-slate-500 transition-colors hover:text-accent"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-100 transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-500">{project.period}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
