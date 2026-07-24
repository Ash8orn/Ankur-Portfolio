import { ArrowUpRight } from "lucide-react";
import { resume } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {resume.name}. All rights reserved.
        </p>
        <a href="#top" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
          Back to top
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
