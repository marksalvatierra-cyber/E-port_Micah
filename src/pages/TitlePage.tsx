import { motion } from "framer-motion";
import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { PageNavigation } from "@/components/PageNavigation";
import { acknowledgment, careerPlan, introduction, personalPhilosophy, profile, tableOfContents, type TOCItem } from "@/data/portfolio";

const TitlePage = () => {
  return (
    <>
      {/* Title Page Header */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            {profile.course}
          </h1>
          <p className="text-lg text-muted-foreground">On-the-Job Training Final Report</p>
        </motion.div>

        {/* Student Information Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Card className="border-2 bg-gradient-to-br from-muted/50 to-muted/20">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-4">Student Information</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <StudentInfoField label="Student Name" value={profile.name} />
                  <StudentInfoField label="Student ID" value={profile.studentId} />
                  <StudentInfoField label="Course & Year" value={`${profile.course}, ${profile.yearSection}`} />
                  <StudentInfoField label="Institution" value={profile.college} />
                  <StudentInfoField label="Host Company" value={`${profile.company} — ${profile.unit}`} />
                  <StudentInfoField label="OJT Coordinator" value={profile.coordinator} />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <StudentInfoField label="OJT Period" value={profile.period} />
                  <StudentInfoField label="Total Hours" value={`${profile.totalHours} hours`} />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="space-y-10">
        {/* Table of Contents */}
        <Card className="border-2">
          <CardTitle eyebrow="START HERE">Table of Contents</CardTitle>
          <nav className="space-y-2">
            {tableOfContents.map((item, index) => (
              <TOCEntry key={index} item={item} index={index} level={0} />
            ))}
          </nav>
        </Card>

        {/* Acknowledgment, Prayer & Philosophy */}
        <SectionHeader title="Reflective Pieces" />
        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          <Card>
            <CardTitle>Acknowledgment</CardTitle>
            <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
              {acknowledgment.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>

          <Card>
            <CardTitle>Student Trainee Prayer</CardTitle>
            <div className="space-y-2.5 text-sm text-foreground/80 italic leading-relaxed font-serif text-[15px]">
              {introduction.prayer.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <CardTitle>Personal Philosophy</CardTitle>
          <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
            {personalPhilosophy.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Card>

        {/* Career Plan */}
        <SectionHeader title="Career Plan" />
        <div className="grid sm:grid-cols-2 gap-5">
          <PlanCard title="Immediate Goals" items={careerPlan.immediate} />
          <PlanCard title="Skill Development Focus" items={careerPlan.skills} />
          <PlanCard title="Long-term Vision" items={careerPlan.longTerm} />
          <PlanCard title="Personal Commitment" items={careerPlan.commitment} />
        </div>

        <PageNavigation
          currentPath="/title"
          previousOverride={{ path: "/", label: "Overview" }}
        />
      </div>
    </>
  );
};

const PlanCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <ul className="space-y-2 text-sm text-foreground/85">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2.5 leading-relaxed">
          <span className="shrink-0 mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const StudentInfoField = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-2">
    <p className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{label}</p>
    <p className="text-sm font-medium text-foreground leading-relaxed">{value}</p>
  </div>
);

const TOCEntry = ({ item, index, level }: { item: TOCItem; index: number; level: number }) => {
  const isChapter = item.level === "chapter";
  const isSection = item.level === "section";
  const paddingLeft = isSection ? "pl-8" : isChapter ? "pl-4" : "pl-0";

  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.02 }} className={`${paddingLeft}`}>
      <div
        className={`py-1.5 text-sm leading-relaxed ${
          isChapter
            ? "font-semibold text-foreground mb-1.5"
            : isSection
            ? "text-foreground/75 text-[13px]"
            : "font-medium text-foreground/85"
        }`}
      >
        {item.title}
      </div>
      {item.items && item.items.length > 0 && (
        <div className="space-y-0.5">
          {item.items.map((subitem, subindex) => (
            <TOCEntry key={subindex} item={subitem} index={subindex} level={level + 1} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TitlePage;
