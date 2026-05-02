import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { acknowledgment, careerPlan, introduction, personalPhilosophy, profile } from "@/data/portfolio";

const Introduction = () => (
  <>
    <SectionHeader
      eyebrow="Chapter I"
      title="Introduction"
      description="Foundation and framework of the internship program — the importance, objectives, and setting of the OJT experience."
    />

    <div className="grid lg:grid-cols-2 gap-5 mb-10">
      <Card>
        <CardTitle eyebrow="A. Importance">{introduction.importance.heading}</CardTitle>
        <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
          {introduction.importance.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Card>

      <Card>
        <CardTitle eyebrow="B. Objectives">Specific objectives of the internship</CardTitle>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {introduction.objectives.intro}
        </p>
        <ol className="space-y-2.5 text-sm text-foreground/85">
          {introduction.objectives.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="shrink-0 mt-0.5 h-5 w-5 rounded-md bg-muted text-[11px] font-semibold flex items-center justify-center text-foreground/70 tabular-nums">
                {i + 1}
              </span>
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ol>
      </Card>
    </div>

    <Card className="mb-10">
      <CardTitle eyebrow="C. Time and Place">Internship period & setting</CardTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Field label="Period" value={introduction.timePlace.period} />
        <Field label="Role" value={introduction.timePlace.role} />
        <Field label="Working Hours" value={introduction.timePlace.hours} />
        <Field label="Total Hours" value={introduction.timePlace.total} />
      </div>
      <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
        {introduction.timePlace.setting}
      </p>
    </Card>

    <SectionHeader eyebrow="Reflective Pieces" title="Acknowledgment, prayer & philosophy" />

    <div className="grid lg:grid-cols-2 gap-5 mb-10">
      <Card>
        <CardTitle>Acknowledgment</CardTitle>
        <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
          {acknowledgment.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Card>

      <Card>
        <CardTitle>Student Trainee Prayer</CardTitle>
        <div className="space-y-2.5 text-sm text-foreground/80 italic leading-relaxed font-serif text-[15px]">
          {introduction.prayer.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Card>
    </div>

    <Card className="mb-10">
      <CardTitle>Personal Philosophy</CardTitle>
      <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
        {personalPhilosophy.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Card>

    <SectionHeader title="Career Plan" />
    <div className="grid sm:grid-cols-2 gap-5">
      <PlanCard title="Immediate Goals" items={careerPlan.immediate} />
      <PlanCard title="Skill Development Focus" items={careerPlan.skills} />
      <PlanCard title="Long-term Vision" items={careerPlan.longTerm} />
      <PlanCard title="Personal Commitment" items={careerPlan.commitment} />
    </div>
  </>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground">
      {label}
    </div>
    <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
  </div>
);

const PlanCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <ul className="space-y-2 text-sm text-foreground/85">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 leading-relaxed">
          <span className="mt-2 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  </Card>
);

export default Introduction;
