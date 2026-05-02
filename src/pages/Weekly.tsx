import { useState } from "react";
import { motion } from "framer-motion";
import { Card, SectionHeader } from "@/components/Section";
import { weeklyReports } from "@/data/portfolio";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const Weekly = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  return (
    <>
      <SectionHeader
        eyebrow="Chapter III · A"
        title="Weekly Accomplishment Report"
        description="A week-by-week record of duties performed, skills learned, and outputs produced during the OJT at CAAP Air Traffic Service."
      />

      <StaggerGroup className="space-y-3">
        {weeklyReports.map((w) => {
          const isOpen = openWeek === w.week;
          return (
            <StaggerItem key={w.week}>
              <Card className="!p-0 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenWeek(isOpen ? null : w.week)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-surface/60 transition-colors"
                >
                  <div className="h-10 w-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shrink-0 font-serif">
                    W{w.week}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {w.period}
                    </div>
                    <div className="font-semibold text-sm sm:text-base text-foreground truncate">
                      {w.title}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform shrink-0",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="border-t border-border overflow-hidden"
                  >
                    <div className="px-6 py-6 grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <SubLabel>Key Accomplishments</SubLabel>
                        <ul className="mt-2 space-y-2">
                          {w.accomplishments.map((a, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                              <CheckCircle2 className="h-4 w-4 text-foreground/50 mt-0.5 shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>

                        {w.skills && (
                          <>
                            <SubLabel className="mt-6">Skills Learned</SubLabel>
                            <ul className="mt-2 space-y-1.5">
                              {w.skills.map((s, i) => (
                                <li key={i} className="text-sm text-foreground/85 leading-relaxed pl-3 border-l-2 border-border">
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <div className="space-y-4">
                        <Field label="Period" value={w.period} />
                        <Field label="Problems Met" value={w.problems} />
                        <Field label="Remarks" value={w.remarks} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </>
  );
};

const SubLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-[11px] font-semibold uppercase tracking-wider text-muted-foreground ${className}`}>
    {children}
  </div>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-md bg-surface/60 border border-border p-3">
    <div className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground">{label}</div>
    <div className="mt-1 text-sm text-foreground/90 leading-snug">{value}</div>
  </div>
);

export default Weekly;
