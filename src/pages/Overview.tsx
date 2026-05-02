import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Clock, MapPin, Plane, Sparkles } from "lucide-react";
import { Card } from "@/components/Section";
import { profile, weeklyReports, dailyLogs, appendices } from "@/data/portfolio";
import { navItems } from "@/components/Sidebar";
import { CountUp } from "@/components/CountUp";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

const Overview = () => {
  const stats = [
    { label: "Total Hours", value: profile.totalHours, icon: Clock, suffix: "" },
    { label: "Weeks Logged", value: weeklyReports.length, icon: Award, suffix: "" },
    { label: "Daily Entries", value: dailyLogs.length, icon: Plane, suffix: "+" },
    { label: "Appendices", value: appendices.length, icon: MapPin, suffix: "" },
  ];

  const quickLinks = navItems.filter((n) => n.to !== "/");

  return (
    <>
      {/* HERO */}
      <section className="relative mb-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3" />
              <span className="uppercase tracking-[0.14em]">OJT E-Portfolio · 2026</span>
            </div>

            <h1 className="mt-5 font-serif text-display text-4xl sm:text-5xl lg:text-6xl leading-normal tracking-tight">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {profile.course}, {profile.yearSection}. A documented internship at the{" "}
              <span className="text-foreground font-medium">{profile.unit}</span> — from {profile.period}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/title"
                className="group inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Begin reading
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/weekly"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/70 backdrop-blur px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-colors"
              >
                View weekly reports
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="hidden lg:block"
          >
            <AnimatedCode />
          </motion.div>
        </div>
      </section>

      {/* HERO META */}
      <Reveal>
        <div className="surface-card-elevated p-6 sm:p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-dots opacity-40 mask-fade-b pointer-events-none" />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            <Meta label="Student ID" value={profile.studentId} />
            <Meta label="Period" value={profile.period} />
            <Meta label="Host Company" value={profile.company} />
            <Meta label="OJT Coordinator" value={profile.coordinator} />
          </div>
        </div>
      </Reveal>

      {/* STATS */}
      <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <Card className="!p-5 group relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-foreground/[0.025] group-hover:bg-foreground/[0.05] transition-colors" />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1.5 font-serif text-4xl text-foreground tabular-nums leading-none">
                    <CountUp to={s.value} />
                    {s.suffix}
                  </div>
                </div>
                <div className="h-9 w-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                  <s.icon className="h-4 w-4" />
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* QUICK NAV */}
      <Reveal>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="section-label mb-2">Browse</div>
            <h3 className="font-serif text-2xl text-foreground">Portfolio sections</h3>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:block">
            {quickLinks.length} sections
          </span>
        </div>
      </Reveal>

      <StaggerGroup className="grid sm:grid-cols-2 gap-4">
        {quickLinks.map((q) => (
          <StaggerItem key={q.to}>
            <Link to={q.to} className="group block">
              <Card className="!p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-11 w-11 rounded-lg bg-muted flex items-center justify-center text-foreground/70 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105">
                      <q.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {q.group}
                      </div>
                      <div className="font-semibold text-sm text-foreground truncate">{q.label}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </>
  );
};

const AnimatedCode = () => {
  const codeLines = [
    "// OJT Portfolio 2026",
    "const intern = {",
    "  name: \"Your Name\",",
    "  period: \"Jan - May 2026\",",
    "  company: \"CAAP\",",
    "  status: \"Learning\",",
    "  skills: [\"Communication\", \"ATC\"]",
    "};"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    const currentLine = codeLines[lineIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setDisplayedText((prev) => {
          const lines = prev.split("\n");
          lines[lineIndex] = currentLine.substring(0, charIndex);
          return lines.join("\n");
        });
        charIndex++;
      } else {
        clearInterval(interval);
        setLineIndex((prev) => prev + 1);
        setDisplayedText((prev) => prev + "\n");
      }
    }, 60);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 rounded-2xl bg-primary/10 blur-xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-2xl backdrop-blur-sm font-mono text-xs flex items-center gap-6">
        <div className="absolute top-0 left-0 right-0 flex gap-2 p-3 border-b border-border bg-muted/30">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>

        <pre className="pt-8 pb-4 text-foreground/85 whitespace-pre-wrap break-words min-h-48 flex-1">
          <code>{displayedText}</code>
          {lineIndex < codeLines.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-primary"
            >
              |
            </motion.span>
          )}
        </pre>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
            <img
              src="/appendices/pic12.jpg"
              alt="Profile"
              loading="lazy"
              className="relative h-28 w-28 rounded-full border-2 border-primary object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
      {label}
    </div>
    <div className="mt-1.5 text-sm font-medium text-foreground leading-snug">{value}</div>
  </div>
);

export default Overview;
