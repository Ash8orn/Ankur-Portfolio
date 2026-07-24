import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resume } from "../data/resume";
import TerminalCard from "./TerminalCard";
import SocialLinks from "./SocialLinks";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-b" />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {resume.available && (
            <motion.div variants={item} className="chip chip-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for Security Opportunities
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {resume.name.split(" ")[0]}{" "}
            <span className="gradient-text">{resume.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-base text-accent-soft sm:text-lg"
          >
            {resume.title}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <SocialLinks />
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3"
          >
            {resume.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-bold gradient-text sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-slate-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:animate-float"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
