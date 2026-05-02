import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { reflections } from "@/data/portfolio";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const Reflections = () => (
  <>
    <SectionHeader
      eyebrow="Personal Insights"
      title="Reflections"
      description={reflections.intro}
    />

    <StaggerGroup className="grid lg:grid-cols-2 gap-5">
      {reflections.sections.map((s, i) => (
        <StaggerItem key={s.title}>
          <Card className="relative overflow-hidden h-full">
            <div className="absolute -right-8 -top-8 font-serif text-[8rem] leading-none text-foreground/[0.04] select-none pointer-events-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <CardTitle>{s.title}</CardTitle>
            <p className="text-sm text-foreground/85 leading-relaxed">{s.body}</p>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>
  </>
);

export default Reflections;
