import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { assessment } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

const Assessment = () => (
  <>
    <SectionHeader
      eyebrow="Chapter IV"
      title="Assessment of the Practicum Program"
      description={assessment.intro}
    />

    <StaggerGroup className="grid sm:grid-cols-2 gap-4 mb-8">
      {assessment.ratings.map((r) => (
        <StaggerItem key={r.criterion}>
          <Card className="!p-5">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-md bg-muted flex items-center justify-center text-foreground/70 shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm text-foreground">{r.criterion}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.note}</div>
              </div>
            </div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>

    <Reveal>
      <Card>
        <CardTitle eyebrow="Supervisor Remarks">Overall evaluation</CardTitle>
        <p className="text-sm text-foreground/85 leading-relaxed">{assessment.remarks}</p>
      </Card>
    </Reveal>
  </>
);

export default Assessment;
