import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { company } from "@/data/portfolio";
import caapLogo from "@/assets/caap-logo.jpg";
import { Calendar, MapPin, Target } from "lucide-react";

const Company = () => (
  <>
    <SectionHeader
      eyebrow="Chapter II"
      title="Company Profile"
      description="Overview and insights of the host organization — the Civil Aviation Authority of the Philippines, San Jose Airport Air Traffic Service."
    />

    {/* Header card */}
    <Card className="mb-8">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={caapLogo}
          alt="CAAP Philippines logo"
          className="h-24 w-24 rounded-lg object-contain bg-white border border-border p-2 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="section-label mb-1">A. Company Overview</div>
          <h3 className="font-serif text-2xl text-foreground leading-tight">
            {company.name}
          </h3>
          <div className="text-sm text-muted-foreground mt-0.5">{company.unit}</div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/85">{company.overview}</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-5">
            <Meta icon={MapPin} label="Location" value={company.location} />
            <Meta icon={Calendar} label="Established" value={company.established} />
            <Meta icon={Target} label="Role" value={company.role} />
          </div>
        </div>
      </div>
    </Card>

    {/* Nature */}
    <Card className="mb-8">
      <CardTitle eyebrow="B. Nature of the Agency">A government, service-oriented unit</CardTitle>
      <p className="text-sm text-foreground/85 leading-relaxed mb-6">{company.nature.intro}</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {company.nature.cards.map((c) => (
          <div key={c.title} className="rounded-lg border border-border bg-surface/60 p-5">
            <div className="font-semibold text-sm text-foreground mb-1.5">{c.title}</div>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Card>

    {/* Vision Mission */}
    <div className="grid lg:grid-cols-2 gap-5 mb-8">
      <Card>
        <CardTitle eyebrow="C. Vision">Our vision</CardTitle>
        <p className="font-serif text-xl leading-snug text-foreground">{company.vision}</p>
      </Card>
      <Card>
        <CardTitle eyebrow="C. Mission">Our mission</CardTitle>
        <p className="text-sm text-foreground/85 leading-relaxed">{company.mission}</p>
      </Card>
    </div>

    {/* History */}
    <Card className="mb-8">
      <CardTitle eyebrow="D. History & Background">From McGuire Field to RPUH</CardTitle>
      <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
        {company.history.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Card>

    {/* Org chart */}
    <Card>
      <CardTitle eyebrow="E. Organizational Structure">Air Traffic Service · San Jose Airport</CardTitle>
      <div className="flex flex-col items-center gap-6">
        <OrgNode {...company.org.head} highlight logo={caapLogo} />
        <div className="h-6 w-px bg-border" />
        <div className="grid sm:grid-cols-3 gap-4 w-full">
          {company.org.team.map((m) => (
            <OrgNode key={m.name} {...m} />
          ))}
        </div>
      </div>
    </Card>
  </>
);

const Meta = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) => (
  <div className="flex items-start gap-2.5">
    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground shrink-0">
      <Icon className="h-4 w-4" />
    </div>
    <div className="min-w-0">
      <div className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-foreground leading-snug">{value}</div>
    </div>
  </div>
);

const OrgNode = ({
  name,
  role,
  title,
  highlight,
  logo,
}: {
  name: string;
  role: string;
  title: string;
  highlight?: boolean;
  logo?: string;
}) => (
  <div
    className={
      "rounded-lg border p-4 text-center " +
      (highlight
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-surface border-border")
    }
  >
    {logo && (
      <img src={logo} alt="CAAP logo" className="mx-auto mb-3 h-12 w-12 object-contain bg-white rounded-md p-1" />
    )}
    <div className={"text-[11px] uppercase tracking-wider mb-1 " + (highlight ? "opacity-75" : "text-muted-foreground")}>
      {title}
    </div>
    <div className={"font-semibold text-sm " + (highlight ? "" : "text-foreground")}>{name}</div>
    <div className={"text-xs mt-0.5 " + (highlight ? "opacity-80" : "text-muted-foreground")}>{role}</div>
  </div>
);

export default Company;
