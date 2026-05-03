import { Card, CardTitle, SectionHeader } from "@/components/Section";
import { assessment, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { PageNavigation } from "@/components/PageNavigation";

const EVALUATION_ITEMS = 58;
const SICR_PER_ITEM = 5;
const sicrComputedTotal = EVALUATION_ITEMS * SICR_PER_ITEM;

const getEquivalentRating = (total: number) => {
  const percentage = (total / (EVALUATION_ITEMS * 5)) * 100;

  if (percentage >= 96) return 5;
  if (percentage >= 91) return 4;
  if (percentage >= 86) return 3;
  if (percentage >= 81) return 2;
  if (percentage >= 75) return 1;

  return 1;
};

const ratingsOverview = [
  { code: "SR", label: "Student Self-Rating", total: assessment.numericRatings.SR },
  { code: "PR", label: "Peer Rating", total: assessment.numericRatings.PR },
  { code: "SICR", label: "Student Internship Coordinator Rating", total: sicrComputedTotal },
  { code: "ASR", label: "Agency Supervisor Rating", total: assessment.numericRatings.ASR },
];

const evaluationPhotos = [
  { src: "/appendices/evaluation1.jpg", alt: "Student internship evaluation form page 1" },
  { src: "/appendices/evaluation2.jpg", alt: "Student internship evaluation form page 2" },
  { src: "/appendices/evaluation3.jpg", alt: "Student internship evaluation form page 3" },
];

const overallScore =
  (assessment.numericRatings.SR +
    assessment.numericRatings.PR +
    sicrComputedTotal +
    assessment.numericRatings.ASR) /
  4;

const overallAveragePerItem = overallScore / EVALUATION_ITEMS;

const Assessment = () => (
  <>
    <SectionHeader
      eyebrow="CHAPTER IV"
      title="Assessment of the Practicum Program"
      description="Evaluation and Performance Review"
    />

    <Card className="mb-6">
      <CardTitle eyebrow="A. Student Internship Evaluation Form">Student Internship Performance Evaluation</CardTitle>
      <div className="text-sm text-muted-foreground mb-4">
        Official evaluation documentation from CAAP Air Traffic Service and Occidental Mindoro State College.
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/85">
        <div>
          <div><strong>Student Name:</strong> {profile.name}</div>
          <div><strong>Student ID:</strong> {profile.studentId}</div>
          <div><strong>Program/Course:</strong> BS Information Technology</div>
          <div><strong>Academic Year:</strong> 2025-2026</div>
          <div><strong>Internship Start Date:</strong> January 29, 2026</div>
        </div>
        <div>
          <div><strong>Internship End Date:</strong> April 21, 2026</div>
          <div><strong>Company:</strong> {profile.company}</div>
          <div><strong>Department:</strong> Air Traffic Service</div>
          <div><strong>Supervisor:</strong> Delmer M. Palara</div>
          <div><strong>Position:</strong> Intern</div>
        </div>
      </div>
    </Card>

    <Card className="mb-8">
      <CardTitle eyebrow="Evaluation Form">Official Student Internship Evaluation</CardTitle>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {evaluationPhotos.map((photo, index) => (
          <figure key={photo.src} className="rounded-lg border border-border bg-card/40 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-muted-foreground">
              Evaluation Form Page {index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </Card>

    <Reveal>
      <Card className="mb-6">
        <CardTitle eyebrow="Performance Evaluation Summary">Ratings Overview</CardTitle>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/85">
          <div className="space-y-2">
            {ratingsOverview.map((rating) => (
              <div key={rating.code} className="flex items-center justify-between gap-3 rounded-md border border-border/60 bg-card/40 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground min-w-16">{rating.code}</div>
                  <div className="font-semibold text-lg"><CountUp to={rating.total} /></div>
                </div>
                <div className="text-xs font-medium text-foreground/80">Equivalent: {getEquivalentRating(rating.total)}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>SR — Student Self-Rating</p>
            <p>PR — Peer Rating</p>
            <p>SICR — Student Internship Coordinator Rating (computed as 5 x 58 = 290)</p>
            <p>ASR — Agency Supervisor Rating</p>
            <p className="mt-2">Equivalent scale used: 5 (96-100), 4 (91-95), 3 (86-90), 2 (81-85), 1 (75-80).</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8">
        <CardTitle eyebrow="Overall Rating">Computed Overall Rating</CardTitle>
        <div className="text-3xl font-semibold text-foreground flex items-center gap-4">
          <CountUp to={Number(overallAveragePerItem.toFixed(2))} />
          <div className="text-sm text-muted-foreground">out of 5.00</div>
        </div>
        <div className="mt-3 text-sm text-muted-foreground">
          Total average across raters: {Math.round(overallScore)} points ({assessment.numericRatings.SR} + {assessment.numericRatings.PR} + {sicrComputedTotal} + {assessment.numericRatings.ASR}) / 4.
        </div>
        <div className="mt-5 text-sm text-foreground/85">
          <div className="font-semibold mb-1">General Comments on Student's Overall Performance</div>
          <p>"{assessment.remarks}"</p>
        </div>
        <div className="mt-4 text-sm">
          <div><strong>Rated by:</strong></div>
          <div>Student Intern: {assessment.signatories.student.name} — {assessment.signatories.student.date}</div>
          <div>Peer: {assessment.signatories.peer.name} — {assessment.signatories.peer.date}</div>
          <div>Student Internship Coordinator: {assessment.signatories.coordinator.name} — {assessment.signatories.coordinator.date}</div>
          <div>Agency Supervisor: {assessment.signatories.supervisor.name} — {assessment.signatories.supervisor.date}</div>
        </div>
      </Card>

      <PageNavigation currentPath="/assessment" />

    </Reveal>
  </>
);

export default Assessment;
