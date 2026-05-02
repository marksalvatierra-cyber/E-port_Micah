import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const SectionHeader = ({ eyebrow, title, description, actions }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="mb-10 flex flex-wrap items-end justify-between gap-4"
  >
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-1 w-1 rounded-full bg-foreground/50" />
          <span className="section-label">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-serif text-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
    {actions && <div className="flex items-center gap-2">{actions}</div>}
  </motion.div>
);

export const Card = ({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) => (
  <div
    className={`surface-card p-6 sm:p-7 ${
      interactive ? "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-border-strong" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) => (
  <div className="mb-3">
    {eyebrow && <div className="section-label mb-1.5">{eyebrow}</div>}
    <h3 className="font-semibold text-base sm:text-lg text-foreground">{children}</h3>
  </div>
);
