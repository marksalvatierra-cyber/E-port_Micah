import { Card, SectionHeader } from "@/components/Section";
import { dailyLogs } from "@/data/portfolio";
import { Clock } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const Daily = () => (
  <>
    <SectionHeader
      eyebrow="Chapter III · B"
      title="Daily Time Record"
      description="Day-by-day record of internship activities, time-in and time-out, hours rendered, and tasks completed."
    />

    <StaggerGroup className="space-y-3">
      {dailyLogs.map((d) => (
        <StaggerItem key={d.day}>
          <Card className="!p-5">
          <div className="flex flex-col lg:flex-row lg:items-start gap-5">
            {/* Day badge */}
            <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1 lg:w-32 shrink-0">
              <div className="h-12 w-12 rounded-md bg-primary text-primary-foreground flex flex-col items-center justify-center font-semibold leading-none">
                <span className="text-[10px] uppercase opacity-80">Day</span>
                <span className="text-base">{d.day}</span>
              </div>
              <div className="lg:mt-2">
                <div className="text-sm font-semibold text-foreground">{d.date}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{d.weekday}</div>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 min-w-0">
              <ul className="space-y-1.5">
                {d.description.map((line, i) => (
                  <li key={i} className="text-sm text-foreground/85 leading-relaxed flex gap-2.5">
                    <span className="mt-2 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>{d.type}</Tag>
              </div>
            </div>

            {/* Time block */}
            <div className="lg:w-56 shrink-0 rounded-md bg-surface/70 border border-border p-3 text-xs space-y-1.5">
              <Row label="Schedule" value={d.schedule} />
              <Row label="Time In" value={d.timeIn} />
              <Row label="Time Out" value={d.timeOut} />
              <div className="pt-1.5 border-t border-border flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3 w-3" /> Total
                </span>
                <span className="font-semibold text-foreground tabular-nums">{d.hours}</span>
              </div>
            </div>
          </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>

    <p className="mt-6 text-xs text-muted-foreground">
      Note: Daily entries shown reflect the records captured in the e-portfolio source. Subsequent days continue the same routine of METAR encoding and ATS support.
    </p>
  </>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center text-[11px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-muted text-foreground/70">
    {children}
  </span>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium text-foreground tabular-nums">{value}</span>
  </div>
);

export default Daily;
