import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ROTATING_WORDS } from "@/lib/constants";
import { Link } from "wouter";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/animations";
import { ParticleConstellation } from "@/components/ui/ParticleConstellation";
import { SpotlightEffect } from "@/components/ui/SpotlightEffect";

export function Hero() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <SpotlightEffect className="min-h-screen">
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <ParticleConstellation />
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={prefersReducedMotion ? {} : { y: backgroundY }}
      >
        <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/4 left-20 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/30" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-white/20" />
      </motion.div>

      <motion.div 
        className="max-w-5xl z-10"
        style={prefersReducedMotion ? {} : { y: contentY, opacity }}
      >
        <Reveal delay={0.1}>
          <p className="text-primary/80 text-sm font-medium tracking-[0.3em] uppercase mb-8" data-testid="text-hero-subtitle">
            Consulting IT Premium
          </p>
        </Reveal>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter text-white mb-8 md:mb-12">
          <Reveal delay={0.2}>
            <span className="block leading-tight">Answer is</span>
          </Reveal>
          <div className="relative py-2 -my-2" data-testid="text-rotating-word">
            {prefersReducedMotion ? (
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent leading-tight">
                42
              </span>
            ) : (
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[index]}
                    initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -60, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent leading-tight"
                  >
                    {ROTATING_WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}
          </div>
        </h1>

        <Reveal delay={0.4}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed mb-10 md:mb-16 font-light tracking-wide" data-testid="text-hero-description">
            Nous pilotons vos projets IT avec une exécution précise, une gouvernance nette, et des résultats mesurables.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-start w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="group relative bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-sm text-sm sm:text-base font-medium transition-all flex items-center justify-center gap-3 sm:gap-4 overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              data-testid="button-hero-contact"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Parler à un consultant</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Link>
            <button 
              onClick={scrollToServices}
              className="group relative flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 rounded-sm text-sm sm:text-base font-medium text-white/50 hover:text-white border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/10"
              data-testid="button-hero-approach"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Notre approche</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform relative" />
            </button>
          </div>
        </Reveal>
      </motion.div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
    </SpotlightEffect>
  );
}
