import { Bug, Globe, Mail, MapPin, Phone, Radar, ShieldCheck } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { resume } from "../data/resume";

const highlights = [
  {
    Icon: ShieldCheck,
    title: "Offensive Security",
    body: "Web, API, thick client & Active Directory VAPT.",
  },
  {
    Icon: Bug,
    title: "Vulnerability Research",
    body: "6 CVEs plus multiple Hall of Fame acknowledgements.",
  },
  {
    Icon: Radar,
    title: "Responsible Disclosure",
    body: "Recognized by MSRC, NCIIPC (Govt. of India) and private programs.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Who I am">
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="card flex h-full flex-col p-7 sm:p-9">
            <p className="text-lg leading-relaxed text-slate-300">{resume.about}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-white/[0.06] bg-base-900/50 p-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card flex h-full flex-col p-7">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-gradient font-mono text-xl font-bold text-base-950">
                AB
              </span>
              <div>
                <p className="font-semibold text-slate-100">{resume.name}</p>
                <p className="text-sm text-slate-500">{resume.title}</p>
              </div>
            </div>

            <div className="my-6 h-px bg-white/[0.06]" />

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                {resume.location}
              </li>
              <li>
                <a
                  href={`mailto:${resume.email}`}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {resume.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resume.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {resume.phone}
                </a>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
                <Globe className="h-3.5 w-3.5" />
                Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {resume.languages.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
