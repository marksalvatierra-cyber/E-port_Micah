import { Card, SectionHeader } from "@/components/Section";
import { appendices } from "@/data/portfolio";
import { FileText } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useMemo, useState } from "react";
import { PageNavigation } from "@/components/PageNavigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const appendixAEvaluationPhotos = [
  { src: "/appendices/evaluation1.jpg", alt: "Student internship evaluation form page 1" },
  { src: "/appendices/evaluation2.jpg", alt: "Student internship evaluation form page 2" },
  { src: "/appendices/evaluation3.jpg", alt: "Student internship evaluation form page 3" },
];

const appendixPhotoMap: Record<string, string[]> = {
  A: ["/appendices/evaluation1.jpg", "/appendices/evaluation2.jpg", "/appendices/evaluation3.jpg"],
  B: ["/appendices/Appendix-B.png"],
  C: ["/appendices/Appendix-C1.jpg", "/appendices/Appendix-C2.jpg"],
  D: ["/appendices/Appendix-D.jpg"],
  E: ["/appendices/Appendix-E1.jpg", "/appendices/Appendix-E2.jpg"],
  F: ["/appendices/Appendix-F.jpg"],
  G: ["/appendices/Appendix-G.jpg"],
  H: ["/appendices/Appendix-H.jpg"],
  I: ["/appendices/Appendix-I1.jpg", "/appendices/Appendix-I2.jpg"],
  K: ["/appendices/Appendix-K.jpg"],
  N: ["/appendices/Appendix-N1.jpg", "/appendices/Appendix-N2.jpg", "/appendices/Appendix-N3.jpg"],
  Q: ["/appendices/Appendix-Q.jpg"]
};

const getAppendixPhotos = (code: string, title: string) => {
  const files = appendixPhotoMap[code] ?? [];

  return files.map((src, index) => ({
    src,
    alt: `${title} image ${index + 1}`,
  }));
};

const Appendices = () => {
  const [activeAppendixCode, setActiveAppendixCode] = useState<string | null>(null);
  const [imageModalSrc, setImageModalSrc] = useState<string | null>(null);
  const [imageModalAlt, setImageModalAlt] = useState<string | null>(null);

  const activeAppendix = appendices.find((a) => a.code === activeAppendixCode) ?? null;
  const activePhotos = activeAppendix ? getAppendixPhotos(activeAppendix.code, activeAppendix.title) : [];
  const mainAppendices = appendices.filter((a) => !["N", "O", "P", "R"].includes(a.code));

  return (
    <>
    <SectionHeader
      eyebrow="Supporting Documents"
      title="Appendices"
      description="Additional documentation, certificates, forms, and attachments compiled as part of the OJT portfolio."
    />

    <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mainAppendices.map((a) => (
        <StaggerItem key={a.code}>
          <button
            type="button"
            onClick={() => setActiveAppendixCode(a.code)}
            className="w-full text-left"
            aria-label={`Open Appendix ${a.code}`}
          >
            <Card className="!p-5 group cursor-pointer hover:border-primary transition-colors">
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
          </button>
        </StaggerItem>
      ))}
    </StaggerGroup>

    <Dialog open={Boolean(activeAppendix)} onOpenChange={(open) => !open && setActiveAppendixCode(null)}>
      <DialogContent className="max-w-5xl w-[95vw]">
        <DialogHeader>
          <DialogTitle>
            {activeAppendix ? `Appendix ${activeAppendix.code} - ${activeAppendix.title}` : "Appendix"}
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[75vh] overflow-y-auto pr-1">
          <div
            className={
              activePhotos.length <= 2
                ? "grid gap-4 max-w-3xl mx-auto"
                : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {activePhotos.map((photo, index) => (
              <figure key={photo.src} className="rounded-lg border border-border bg-card/40 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    const figure = event.currentTarget.closest("figure");
                    if (figure) figure.setAttribute("style", "display:none");
                  }}
                />
                <figcaption className="px-3 py-2 text-xs text-muted-foreground">
                  Image {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <Dialog open={Boolean(imageModalSrc)} onOpenChange={(open) => !open && (setImageModalSrc(null), setImageModalAlt(null))}>
      <DialogContent className="max-w-3xl w-[95vw]">
        <div className="w-full flex flex-col items-center">
          {imageModalSrc ? (
            <img src={imageModalSrc} alt={imageModalAlt ?? ""} className="w-full max-h-[80vh] object-contain rounded" />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>

    <div className="mt-8 space-y-6">
      <section id="appendix-n">
        <div className="section-label">Appendix N</div>
        <h3 className="font-semibold text-lg">Pre-Service Seminar Pictures</h3>
        <Card className="mt-3 border-primary">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "/appendices/Appendix-N1.jpg",
              "/appendices/Appendix-N2.jpg",
              "/appendices/Appendix-N3.jpg",
            ].map((src, index) => (
              <img
                key={src}
                src={src}
                loading="lazy"
                alt={`Appendix N ${index + 1}`}
                className="w-full h-40 object-cover rounded cursor-pointer"
                onClick={() => {
                  setImageModalSrc(src);
                  setImageModalAlt(`Appendix N ${index + 1}`);
                }}
              />
            ))}
          </div>
        </Card>
      </section>

      <section id="appendix-o">
        <div className="section-label">Appendix O</div>
        <h3 className="font-semibold text-lg">Office Works Pictures</h3>
        <Card className="mt-3 border-primary">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {useMemo(() => Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
              <img
                key={i}
                src={`/appendices/Appendix-O${i}.jpg`}
                loading="lazy"
                alt={`Appendix O ${i}`}
                className="w-full h-36 object-cover rounded cursor-pointer"
                onClick={() => {
                  setImageModalSrc(`/appendices/Appendix-O${i}.jpg`);
                  setImageModalAlt(`Appendix O ${i}`);
                }}
              />
            )), [])}
          </div>
        </Card>
      </section>

      <section id="appendix-p">
        <div className="section-label">Appendix P</div>
        <h3 className="font-semibold text-lg">Code of Ethics for CAST Student Internship</h3>
        <Card className="mt-3 border-primary p-5">
          <div className="text-sm text-foreground/85 leading-relaxed space-y-4">
            <p className="text-muted-foreground">Official code of ethics that governed student conduct during the internship.</p>
            <div>
              <div className="font-semibold">College of Arts, Sciences, and Technology</div>
              <div className="font-semibold">Student Internship Code of Ethics</div>
            </div>
            <div>
              <div className="font-medium mb-2">Preamble:</div>
              <p>
                I will serve employees to perform my duties with integrity, to follow all established rules and procedures, respect employees and maintain confidentiality, and contribute to the safety, security, and efficiency of aviation operations at all times. I will do my responsibilities and I will follow the rules by these means:
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>I will do my tasks carefully and give my best effort at all times.</li>
              <li>I will follow the rules and policies of the company or office.</li>
              <li>I will show respect to my supervisor, co-workers, and everyone I work with.</li>
              <li>I will be honest and act with integrity in everything I do.</li>
              <li>I will accept feedback and learn from corrections to improve myself.</li>
              <li>I will avoid any behavior that may cause problems, such as being irresponsible or absent without reason.</li>
              <li>I will work well with others and help maintain a positive working environment.</li>
              <li>I will communicate clearly and politely to my supervisor and employees I work with.</li>
              <li>I will continue learning and improving my skills throughout the internship.</li>
            </ul>
          </div>
        </Card>
      </section>

      <section id="appendix-r">
        <div className="section-label">Appendix R</div>
        <h3 className="font-semibold text-lg">OJT Portfolio Evaluation Form</h3>
        <Card className="mt-3 border-primary p-5">
          <div className="text-sm text-foreground/85">
            <span className="font-medium"></span><span className="font-medium"></span>
          </div>
        </Card>
      </section>
    </div>

    <PageNavigation
      currentPath="/appendices"
      nextOverride={{ path: "/", label: "Overview" }}
    />

    </>
  );
};

export default Appendices;
