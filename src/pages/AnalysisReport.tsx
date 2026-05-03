import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { PageNavigation } from "@/components/PageNavigation";

const AnalysisReport = () => (
  <>
    <SectionHeader
      eyebrow="Work Experiences"
      title="Internship Analysis Report"
      description="Analytical overview and interpretation of internship activities and outcomes."
    />

    <Card className="mb-6">
      <CardTitle eyebrow="Setting">Setting</CardTitle>
      <div className="text-sm text-foreground/85 space-y-2">
        <p>
          The setting provided a real and professional aviation environment where I was able to perform actual tasks in Air Traffic Service such as encoding METAR/weather updates, Flight plans, Aircraft Operations Data, and Arrival and Departure data using CADAS. Access was limited for safety reasons — interns were not allowed to handle live communication with pilots or operate control systems.
        </p>
        <p>
          My initial analysis is that CAAP Air Traffic Service is a highly disciplined organization prioritizing accuracy, safety, and compliance in aviation operations.
        </p>
      </div>
    </Card>

    <Card className="mb-6">
      <CardTitle eyebrow="Supervisor">Supervisor</CardTitle>
      <div className="text-sm text-foreground/85">
        <p>
          The site supervisor provided clear guidance, proper instructions, and continuous support in performing assigned tasks, especially in data encoding, filing, and operational procedures. Supervision was appropriate and professional. I would have benefited from more detailed demonstrations of advanced air traffic operations.
        </p>
      </div>
    </Card>

    <Card className="mb-6">
      <CardTitle eyebrow="Environmental Conditions">Environmental Conditions or Events</CardTitle>
      <div className="text-sm text-foreground/85 space-y-2">
        <p>
          Working with real-time aviation data required accuracy and timely action in daily operations. A key issue was the constant requirement for precise and error-free data encoding since minor mistakes can affect flight operations and safety. Diversity of co-workers improved communication, teamwork, and coordination with Admin, Maintenance, and Management.
        </p>
      </div>
    </Card>

    <Card className="mb-6">
      <CardTitle eyebrow="Self-assessment">Self-assessment</CardTitle>
      <div className="text-sm text-foreground/85 space-y-2">
        <p>
          The most important lesson was handling responsibilities to perform assigned tasks in Air Traffic Service. I contributed by accurately encoding Weather Updates from PAGASA, Flight Plans, and Aircraft Operations Data and assisting in filing and administrative tasks. I still need more experience to communicate with pilots using radio equipment. If repeated, I would be more proactive in asking questions and maximizing learning opportunities.
        </p>
      </div>
    </Card>

    <Card>
      <CardTitle eyebrow="General">General Recommendations</CardTitle>
      <div className="text-sm text-foreground/85">
        <p>
          The internship experience can be strengthened by providing more structured training, such as demonstrations or simulations of actual air traffic operations. Future interns should be responsible, observant, and willing to learn; take initiative, ask questions, and pay attention to details.
        </p>
      </div>
    </Card>

    <PageNavigation currentPath="/analysis" />
  </>
);

export default AnalysisReport;
