import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ParticleBackground } from "./ParticleBackground";
import { AuroraBackground } from "./AuroraBackground";

export const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AuroraBackground />
      <ParticleBackground />
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="lg:pl-[17rem] flex flex-col min-h-screen">
        <Header onMenuClick={() => setOpen(true)} />

        {/* Scroll progress bar */}
        <motion.div
          aria-hidden
          className="sticky top-16 z-20 h-px origin-left bg-foreground/40"
          style={{ scaleX: progress }}
        />

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(2px)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-6xl"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>

          <footer className="mx-auto w-full max-w-6xl mt-16 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} OJT E-Portfolio · Civil Aviation Authority of the Philippines</span>
            <span>Crafted with React + Vite</span>
          </footer>
        </main>
      </div>
    </div>
  );
};
