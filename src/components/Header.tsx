import { Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navItems } from "./Sidebar";
import { profile } from "@/data/portfolio";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const { pathname } = useLocation();
  const current = navItems.find((n) =>
    n.to === "/" ? pathname === "/" : pathname.startsWith(n.to)
  );

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden -ml-1 p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {current?.group ?? "Portfolio"}
          </div>
          <h1 className="text-base sm:text-[15px] font-semibold truncate text-foreground">
            {current?.label ?? "Overview"}
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border text-xs text-muted-foreground min-w-[260px]">
          <Search className="h-3.5 w-3.5" />
          <span className="truncate">{profile.unit}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2.5">
          <div className="text-right leading-tight">
            <div className="text-xs font-semibold text-foreground">{profile.name.split(" ")[0]} {profile.name.split(" ").slice(-1)}</div>
            <div className="text-[11px] text-muted-foreground">{profile.yearSection} · BSIT</div>
          </div>
          <img
            src="/appendices/pic12.jpg"
            alt={profile.name}
            loading="lazy"
            className="h-9 w-9 rounded-full object-cover border border-primary"
          />
        </div>
      </div>
    </header>
  );
};
