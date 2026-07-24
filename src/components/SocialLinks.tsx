import { type ComponentType } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { resume } from "../data/resume";

type IconType = ComponentType<{ className?: string }>;
type Item = { label: string; href: string; Icon: IconType };

const items: Item[] = [
  resume.socials.github && {
    label: "GitHub",
    href: resume.socials.github,
    Icon: GithubIcon,
  },
  resume.socials.linkedin && {
    label: "LinkedIn",
    href: resume.socials.linkedin,
    Icon: LinkedinIcon,
  },
  resume.socials.twitter && {
    label: "X / Twitter",
    href: resume.socials.twitter,
    Icon: XIcon,
  },
  { label: "Email", href: `mailto:${resume.email}`, Icon: Mail },
].filter(Boolean) as Item[];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
