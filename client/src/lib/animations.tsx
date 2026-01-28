import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const getInitial = () => {
    if (prefersReducedMotion) return { opacity: 0 };
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
      case "none": return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, delay: prefersReducedMotion ? 0 : delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.21, 0.47, 0.32, 0.98] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const target = parseInt(numericMatch[1]);
    const suffix = value.slice(numericMatch[1].length);
    
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }
    
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      
      setDisplayValue(`${current}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, prefersReducedMotion]);
  
  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
