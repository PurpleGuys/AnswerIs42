import { motion, useReducedMotion } from "framer-motion";
import { useReducedAnimations } from "@/hooks/useIsMobile";

export function FloatingShapes() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceAnimations = useReducedAnimations();

  if (prefersReducedMotion || shouldReduceAnimations) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] right-[10%] w-64 h-64 border border-primary/10 rounded-full" />
        <div className="absolute top-[60%] left-[5%] w-48 h-48 border border-white/5 rotate-45" />
        <div className="absolute top-[30%] left-[20%] w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] right-[10%] w-64 h-64 border border-primary/10 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] left-[5%] w-48 h-48 border border-white/5 rotate-45"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[20%] w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[20%] w-20 h-20 border border-primary/15 rotate-12"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      />
      
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[45%] right-[30%] w-40 h-40 border border-white/5 rounded-full"
        style={{
          borderStyle: "dashed",
          borderWidth: "1px",
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[40%] left-[35%] w-6 h-6 bg-primary/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[70%] right-[45%] w-24 h-24 border border-purple-500/10 rounded-lg rotate-45"
      />
    </div>
  );
}
