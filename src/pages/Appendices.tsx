import { Card, SectionHeader } from "@/components/Section";
import { appendices } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const Appendices = () => (
  <>
    <SectionHeader
      eyebrow="Supporting Documents"
      title="Appendices"
      description="Additional documentation, certificates, forms, and attachments compiled as part of the OJT portfolio."
    />

    <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {appendices.map((a) => (
        <StaggerItem key={a.code}>
          <Card className="!p-5 group">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-foreground/70 shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground">
                  Appendix {a.code}
                </div>
                <div className="font-semibold text-sm text-foreground leading-snug mt-0.5">
                  {a.title}
                </div>
              </div>
            </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>
  </>
);

export default Appendices;
