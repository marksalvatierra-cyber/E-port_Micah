import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
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
  { to: "/title", label: "Title Page", icon: Book, group: "Portfolio" },
  { to: "/introduction", label: "Introduction", icon: BookOpen, group: "Portfolio" },
  { to: "/company", label: "Company Profile", icon: Building2, group: "Portfolio" },

  { to: "/weekly", label: "Weekly Reports", icon: CalendarRange, group: "Work Experiences" },
  { to: "/daily", label: "Daily Time Record", icon: ListChecks, group: "Work Experiences" },
  { to: "/progress", label: "Progress Report", icon: Files, group: "Work Experiences" },
  { to: "/analysis", label: "Analysis Report", icon: ClipboardCheck, group: "Work Experiences" },

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
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3 px-6 py-6 border-b border-sidebar-border">
        <div className="w-full flex justify-end lg:hidden mb-2">
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-sidebar-foreground hover:bg-sidebar-hover"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <img
          src="/appendices/seminar-1.jpeg"
          alt={profile.name}
          className="h-20 w-20 rounded-full object-cover border-2 border-primary"
        />
        <div className="text-center">
          <div className="text-sm font-semibold text-sidebar-active leading-snug">
            {profile.name}
          </div>
          <div className="text-xs text-sidebar-foreground-muted mt-1">
            {profile.studentId}
          </div>
        </div>
      </div>

      {/* Brand */}
      <button
        type="button"
        onClick={onClose}
        className="lg:hidden ml-auto mr-3 mt-3 p-1.5 rounded-md text-sidebar-foreground hover:bg-sidebar-hover hidden"
        aria-label="Close menu"
      >
        <X className="h-4 w-4" />
      </button>

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
