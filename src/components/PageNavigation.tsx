import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pageOrder = [
  { path: "/title", label: "Title Page" },
  { path: "/introduction", label: "Introduction" },
  { path: "/company", label: "Company Profile" },
  { path: "/weekly", label: "Weekly Reports" },
  { path: "/daily", label: "Daily Time Record" },
  { path: "/progress", label: "Progress Report" },
  { path: "/analysis", label: "Analysis Report" },
  { path: "/assessment", label: "Assessment" },
  { path: "/reflections", label: "Reflections" },
  { path: "/appendices", label: "Appendices" },
];

interface PageNavigationProps {
  currentPath: string;
  previousOverride?: { path: string; label: string };
  nextOverride?: { path: string; label: string };
}

const buttonClassName =
  "inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted";

export const PageNavigation = ({ currentPath, previousOverride, nextOverride }: PageNavigationProps) => {
  const currentIndex = pageOrder.findIndex((page) => page.path === currentPath);

  if (currentIndex === -1) return null;

  const previous = previousOverride ?? pageOrder[currentIndex - 1];
  const next = nextOverride ?? pageOrder[currentIndex + 1];

  return (
    <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
      {previous ? (
        <Link to={previous.path} className={buttonClassName}>
          <ChevronLeft className="h-4 w-4" />
          {previous.label}
        </Link>
      ) : (
        <span className={`${buttonClassName} invisible`} aria-hidden="true">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </span>
      )}

      {next ? (
        <Link
          to={next.path}
          className="inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {next.label}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span
          className="inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground opacity-0"
          aria-hidden="true"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );
};