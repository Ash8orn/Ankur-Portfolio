import { Mail } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { resume } from "../data/resume";

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="card relative overflow-hidden p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -inset-x-20 -top-24 -z-10 h-48 bg-accent/20 blur-3xl" />

          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-accent/60" />
            contact
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
            Open to new security opportunities — feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${resume.email}`} className="btn-primary">
              <Mail className="h-4 w-4" />
              {resume.email}
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <SocialLinks includeEmail={false} />
          </div>

          <p className="mt-8 font-mono text-xs text-slate-500">
            {resume.location} · {resume.phone}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
