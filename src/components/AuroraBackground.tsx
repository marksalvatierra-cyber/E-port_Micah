import { motion } from "framer-motion";

/**
 * Soft, slowly drifting gradient mesh — adds depth without flashiness.
 * Sits behind the particle layer.
 */
export const AuroraBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
    {/* Static base mesh */}
    <div className="absolute inset-0 gradient-mesh opacity-90" />

    {/* Drifting blobs */}
    <motion.div
      className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(215 50% 80% / 0.35), transparent 60%)" }}
      animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -top-20 right-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(28 45% 85% / 0.30), transparent 60%)" }}
      animate={{ x: [0, -30, 20, 0], y: [0, 20, -20, 0] }}
      transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-10%] left-[20%] h-[36rem] w-[36rem] rounded-full blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(200 45% 82% / 0.28), transparent 60%)" }}
      animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Dotted overlay for subtle texture */}
    <div className="absolute inset-0 grid-dots mask-radial opacity-60" />
  </div>
);
