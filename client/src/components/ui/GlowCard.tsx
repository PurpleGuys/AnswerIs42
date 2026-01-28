import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative group overflow-hidden rounded-lg",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(400px circle at ${position.x}% ${position.y}%, rgba(124, 58, 237, 0.15), transparent 40%)`,
        }}
      />
      
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)`,
          backgroundSize: "200% 100%",
          animation: isHovered && !prefersReducedMotion ? "shimmer 2s infinite" : "none",
        }}
      />
      
      <div className="absolute inset-px rounded-lg bg-background/95 z-10" />
      
      <div 
        className="absolute inset-0 rounded-lg transition-all duration-500 pointer-events-none"
        style={{
          boxShadow: isHovered 
            ? "0 0 30px rgba(124, 58, 237, 0.3), inset 0 0 20px rgba(124, 58, 237, 0.05)"
            : "none",
        }}
      />
      
      <div className="relative z-20 h-full">
        {children}
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </motion.div>
  );
}
