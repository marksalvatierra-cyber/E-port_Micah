import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  CalendarRange,
  ClipboardCheck,
  Files,
  LayoutDashboard,
  ListChecks,
  Sparkles,
  X,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export type NavItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  group?: string;
};

export const navItems: NavItem[] = [
  { to: "/", label: "Overview", icon: LayoutDashboard, group: "Portfolio" },
  { to: "/introduction", label: "Introduction", icon: BookOpen, group: "Portfolio" },
  { to: "/company", label: "Company Profile", icon: Building2, group: "Portfolio" },
  { to: "/weekly", label: "Weekly Reports", icon: CalendarRange, group: "Work" },
  { to: "/daily", label: "Daily Logs", icon: ListChecks, group: "Work" },
  { to: "/assessment", label: "Assessments", icon: ClipboardCheck, group: "Evaluation" },
  { to: "/reflections", label: "Reflections", icon: Sparkles, group: "Evaluation" },
  { to: "/appendices", label: "Appendices", icon: Files, group: "Evaluation" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const grouped = navItems.reduce<Record<string, NavItem[]>>((acc, item) => {
    const g = item.group || "Menu";
    (acc[g] ||= []).push(item);
    return acc;
  }, {});

  const content = (
    <div className="flex h-full flex-col bg-sidebar border-r border-sidebar-border">
      {/* Brand */}
      <div className="flex items-center justify-between gap-3 px-6 h-16 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-9 w-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg shrink-0">
            e
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-sidebar-active leading-tight truncate">
              E-Portfolio
            </div>
            <div className="text-[11px] text-sidebar-foreground-muted truncate">
              OJT · CAST
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="lg:hidden -mr-1 p-1.5 rounded-md text-sidebar-foreground hover:bg-sidebar-hover"
          aria-label="Close menu"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-5 space-y-6">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <div className="section-label px-3 mb-2">{group}</div>
            <ul className="space-y-0.5">
              {items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        "group relative flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-active text-sidebar-active-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-sidebar-active"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-0 rounded-md bg-sidebar-active -z-0"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <item.icon className="h-4 w-4 relative z-10 shrink-0" />
                        <span className="relative z-10 truncate">{item.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer card */}
      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg border border-sidebar-border bg-background/60 p-3">
          <div className="text-[11px] uppercase tracking-wider text-sidebar-foreground-muted mb-1">
            Trainee
          </div>
          <div className="text-sm font-semibold text-sidebar-active leading-snug">
            {profile.name}
          </div>
          <div className="text-xs text-sidebar-foreground-muted mt-0.5">
            {profile.studentId}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[17rem] transform transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {content}
      </aside>

      {/* Desktop fixed */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[17rem] z-30">
        {content}
      </aside>
    </>
  );
};
