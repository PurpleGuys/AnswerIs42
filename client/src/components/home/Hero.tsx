import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROTATING_WORDS } from "@/lib/constants";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
          <span className="block">Answer is</span>
          <div className="h-[1.1em] overflow-hidden relative text-primary">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[index]}
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="block absolute top-0 left-0 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
              >
                {ROTATING_WORDS[index]}
              </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to keep height */}
            <span className="opacity-0">{ROTATING_WORDS[0]}</span>
          </div>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-12">
          Nous pilotons vos projets IT avec une exécution précise, une gouvernance nette, et des résultats mesurables.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link href="/contact">
            <a className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-sm text-sm font-medium transition-colors">
              Parler à un consultant
            </a>
          </Link>
          <button 
            onClick={scrollToServices}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Notre approche
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
