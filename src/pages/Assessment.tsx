import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { assessment, profile } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

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
      <Card className="mb-6">
        <CardTitle eyebrow="Student Internship Evaluation Form">Student Internship Performance Evaluation</CardTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="text-sm text-foreground/85">
            <div><strong>Student Name:</strong> {profile.name}</div>
            <div><strong>Student ID:</strong> {profile.studentId}</div>
            <div><strong>Program/Course:</strong> {profile.course}</div>
            <div><strong>Internship Period:</strong> {profile.period}</div>
            <div><strong>Company:</strong> {profile.company}</div>
            <div><strong>Department:</strong> Air Traffic Service</div>
            <div><strong>Supervisor:</strong> Delmer M. Palara</div>
          </div>
          <div className="text-sm text-foreground/85">
            <div className="mb-2"><strong>Ratings Overview</strong></div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-muted-foreground">SR</div>
              <div className="font-semibold text-lg"><CountUp to={assessment.numericRatings.SR} /></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-muted-foreground">PR</div>
              <div className="font-semibold text-lg"><CountUp to={assessment.numericRatings.PR} /></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-muted-foreground">SICR</div>
              <div className="font-semibold text-lg"><CountUp to={assessment.numericRatings.SICR} /></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-muted-foreground">ASR</div>
              <div className="font-semibold text-lg"><CountUp to={assessment.numericRatings.ASR} /></div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-8">
        <CardTitle eyebrow="Overall Rating">Computed Overall Rating</CardTitle>
        <div className="text-3xl font-semibold text-foreground flex items-center gap-4">
          <CountUp to={Math.round((Object.values(assessment.numericRatings).filter((v) => v > 0).reduce((a, b) => a + b, 0) / Math.max(1, Object.values(assessment.numericRatings).filter((v) => v > 0).length))) } />
          <div className="text-sm text-muted-foreground">(average of non-zero ratings)</div>
        </div>
        <p className="mt-4 text-sm text-foreground/85">{assessment.remarks}</p>
        <div className="mt-4 text-sm">
          <div><strong>Rated by:</strong></div>
          <div>Student Intern: {assessment.signatories.student.name} — {assessment.signatories.student.date}</div>
          <div>Peer: {assessment.signatories.peer.name} — {assessment.signatories.peer.date}</div>
          <div>Student Internship Coordinator: {assessment.signatories.coordinator.name} — {assessment.signatories.coordinator.date}</div>
          <div>Agency Supervisor: {assessment.signatories.supervisor.name} — {assessment.signatories.supervisor.date}</div>
        </div>
      </Card>
    </Reveal>
  </>
);

export default Assessment;
