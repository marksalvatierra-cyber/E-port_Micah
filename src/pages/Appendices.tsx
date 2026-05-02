import { Card, SectionHeader } from "@/components/Section";
import { appendices } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useMemo } from "react";

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

    {/* Highlighted gallery sections for N / O / P / R */}
    <div className="mt-8 space-y-6">
      {/* Appendix N: Pre-Service Seminar Pictures */}
      <section id="appendix-n">
        <div className="section-label">Appendix N</div>
        <h3 className="font-semibold text-lg">Pre-Service Seminar Pictures</h3>
        <Card className="mt-3 border-primary">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {useMemo(() => [1, 2, 3, 4].map((i) => (
              <img key={i} src={`/appendices/seminar-${i}.jpeg`} loading="lazy" alt={`Seminar ${i}`} className="w-full h-40 object-cover rounded" />
            )), [])}
          </div>
        </Card>
      </section>

      {/* Appendix O: Office Works Pictures */}
      <section id="appendix-o">
        <div className="section-label">Appendix O</div>
        <h3 className="font-semibold text-lg">Office Works Pictures</h3>
        <Card className="mt-3 border-primary">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {useMemo(() => Array.from({ length: 42 }, (_, i) => i + 1).map((i) => (
              <img key={i} src={`/appendices/office-${i}.jpeg`} loading="lazy" alt={`Office ${i}`} className="w-full h-36 object-cover rounded" />
            )), [])}
          </div>
        </Card>
      </section>

      {/* Appendix P: Code of Ethics (image section placeholder) */}
      <section id="appendix-p">
        <div className="section-label">Appendix P</div>
        <h3 className="font-semibold text-lg">Code of Ethics for CAST Student Internship</h3>
        <Card className="mt-3">
          <div className="text-sm text-foreground/85">Add images for Appendix P to <code>/public/appendices/p-1.jpeg</code>, <code>/public/appendices/p-2.jpeg</code>, ... to display here.</div>
        </Card>
      </section>

      {/* Appendix R: OJT Portfolio Evaluation Form (image section placeholder) */}
      <section id="appendix-r">
        <div className="section-label">Appendix R</div>
        <h3 className="font-semibold text-lg">OJT Portfolio Evaluation Form</h3>
        <Card className="mt-3">
          <div className="text-sm text-foreground/85">Add images for Appendix R to <code>/public/appendices/r-1.jpeg</code>, <code>/public/appendices/r-2.jpeg</code>, ... to display here.</div>
        </Card>
      </section>
    </div>
  </>
);

export default Appendices;
