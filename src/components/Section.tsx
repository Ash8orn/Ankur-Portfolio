import { type ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 sm:py-16 ${className ?? ""}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent/60" />
                {eyebrow}
              </span>
            )}
            {title && <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 leading-relaxed text-slate-400">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
