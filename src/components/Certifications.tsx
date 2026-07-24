import { BadgeCheck, ExternalLink } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="certifications" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-3">
        {resume.certifications.map((cert, i) => {
          const inner = (
            <>
              {cert.link && (
                <ExternalLink className="absolute right-4 top-4 h-4 w-4 text-slate-600 transition-colors group-hover:text-accent" />
              )}
              <div className="mb-5 grid h-32 w-32 place-items-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} badge`}
                    loading="lazy"
                    className="h-28 w-28 object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
                  />
                ) : (
                  <BadgeCheck className="h-14 w-14 text-accent" />
                )}
              </div>
              <h3 className="font-semibold leading-snug text-slate-100 transition-colors group-hover:text-accent">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
            </>
          );
          return (
            <Reveal key={cert.name} delay={i * 0.06}>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group relative flex h-full flex-col items-center p-6 text-center"
                >
                  {inner}
                </a>
              ) : (
                <div className="card card-hover relative flex h-full flex-col items-center p-6 text-center">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
