import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Reveal } from "@/lib/animations";
import { Search, Target, Rocket, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Diagnostic",
    description: "Analyse approfondie de votre contexte, vos enjeux et vos contraintes. Nous identifions les leviers de succès.",
    duration: "1-2 semaines",
  },
  {
    icon: Target,
    number: "02", 
    title: "Cadrage",
    description: "Définition du périmètre, des objectifs SMART et du plan d'action. Gouvernance et KPIs clairs.",
    duration: "2-3 semaines",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Exécution",
    description: "Pilotage rigoureux avec reporting régulier. Gestion proactive des risques et des dépendances.",
    duration: "Variable",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Transfert",
    description: "Documentation complète et transfert de compétences. Vos équipes sont autonomes pour la suite.",
    duration: "1-2 semaines",
  },
];

function TimelineStep({ step, index, progress }: { step: typeof STEPS[0]; index: number; progress: number }) {
  const Icon = step.icon;
  const isActive = progress > (index / STEPS.length);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div 
      className="relative flex gap-8 md:gap-12"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      data-testid={`timeline-step-${index}`}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
            isActive 
              ? "bg-primary/20 border-2 border-primary" 
              : "bg-white/5 border border-white/10"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          <Icon className={`w-7 h-7 transition-colors duration-500 ${
            isActive ? "text-primary" : "text-white/60"
          }`} />
          
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={isActive ? { scale: 1.5, opacity: 0 } : {}}
            transition={{ duration: 1, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
          />
        </motion.div>
        
        {index < STEPS.length - 1 && (
          <div className="w-px flex-1 min-h-[120px] bg-gradient-to-b from-white/10 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/0"
              style={{ 
                height: isActive ? "100%" : "0%",
                transition: "height 0.8s ease-out"
              }}
            />
          </div>
        )}
      </div>
      
      <div className="flex-1 pb-16">
        <div className="flex items-baseline gap-4 mb-3">
          <span className={`text-4xl font-light transition-colors duration-500 ${
            isActive ? "text-primary" : "text-white/20"
          }`} data-testid={`text-step-number-${index}`}>
            {step.number}
          </span>
          <h3 className="text-2xl font-medium text-white" data-testid={`text-step-title-${index}`}>
            {step.title}
          </h3>
        </div>
        
        <p className="text-white/50 leading-relaxed mb-4 max-w-md" data-testid={`text-step-description-${index}`}>
          {step.description}
        </p>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
          <span className="text-xs text-white/60">Durée :</span>
          <span className="text-xs text-white/70" data-testid={`text-step-duration-${index}`}>{step.duration}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function MethodologyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  
  useMotionValueEvent(progress, "change", (latest) => {
    setCurrentProgress(latest);
  });

  return (
    <section id="methodologie" className="py-32 md:py-40 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-primary/10 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-methodology-label">
                Notre méthodologie
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-6" data-testid="text-methodology-title">
                Un processus éprouvé.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/50 font-light mb-8" data-testid="text-methodology-description">
                Chaque mission suit une méthodologie structurée qui garantit 
                transparence, prévisibilité et résultats mesurables.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-900/10 border border-primary/20 rounded-sm">
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-primary font-medium">Engagement qualité :</span> Points d'étape 
                  hebdomadaires, reporting transparent, et satisfaction client mesurée à chaque phase.
                </p>
              </div>
            </Reveal>
          </div>
          
          <motion.div className="relative">
            {STEPS.map((step, i) => (
              <TimelineStep 
                key={i} 
                step={step} 
                index={i} 
                progress={currentProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
