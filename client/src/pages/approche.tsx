import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { TechGrid } from "@/components/ui/TechGrid";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { PageTransition } from "@/components/ui/PageTransition";
import { GlowCard } from "@/components/ui/GlowCard";
import { SpotlightEffect } from "@/components/ui/SpotlightEffect";
import { 
  Search, 
  Target, 
  Rocket, 
  CheckCircle,
  Users,
  MessageSquare,
  Lightbulb,
  Gauge,
  Shield,
  Heart,
  ArrowRight,
  Quote
} from "lucide-react";

const METHODOLOGY_STEPS = [
  {
    phase: "01",
    icon: Search,
    title: "Découverte & Diagnostic",
    duration: "1-2 semaines",
    description: "Immersion complète dans votre contexte métier. Nous analysons vos processus actuels, identifions les points de friction et cartographions les opportunités d'amélioration.",
    deliverables: [
      "Audit de l'existant",
      "Cartographie des processus",
      "Identification des quick wins",
      "Rapport de diagnostic détaillé"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    phase: "02",
    icon: Target,
    title: "Stratégie & Cadrage",
    duration: "1-2 semaines",
    description: "Définition collaborative de la vision cible et de la feuille de route. Priorisation des chantiers selon leur impact business et leur faisabilité technique.",
    deliverables: [
      "Vision cible documentée",
      "Feuille de route priorisée",
      "Estimation budgétaire",
      "Plan de gouvernance projet"
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    phase: "03",
    icon: Rocket,
    title: "Implémentation Agile",
    duration: "Variable",
    description: "Développement itératif avec des livraisons régulières. Chaque sprint apporte de la valeur mesurable tout en maintenant la flexibilité pour s'adapter aux besoins émergents.",
    deliverables: [
      "Sprints de 2 semaines",
      "Démonstrations régulières",
      "Documentation technique",
      "Tests et validation continue"
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    phase: "04",
    icon: CheckCircle,
    title: "Déploiement & Transfert",
    duration: "2-4 semaines",
    description: "Mise en production sécurisée avec accompagnement au changement. Formation des équipes et transfert de compétences pour garantir l'autonomie.",
    deliverables: [
      "Déploiement progressif",
      "Formation utilisateurs",
      "Documentation complète",
      "Support post-déploiement"
    ],
    color: "from-emerald-500 to-green-500"
  }
];

const VALUES = [
  {
    icon: MessageSquare,
    title: "Transparence totale",
    description: "Communication ouverte et honnête à chaque étape. Pas de jargon inutile, pas de surprises."
  },
  {
    icon: Users,
    title: "Partenariat durable",
    description: "Nous nous investissons dans votre réussite à long terme, pas seulement dans la livraison du projet."
  },
  {
    icon: Lightbulb,
    title: "Innovation pragmatique",
    description: "Technologies modernes au service de vos objectifs concrets, jamais pour le plaisir de la nouveauté."
  },
  {
    icon: Gauge,
    title: "Résultats mesurables",
    description: "KPIs définis dès le départ, suivi régulier et démonstration de la valeur créée."
  },
  {
    icon: Shield,
    title: "Qualité sans compromis",
    description: "Code propre, tests rigoureux, documentation complète. Nous construisons pour durer."
  },
  {
    icon: Heart,
    title: "Engagement humain",
    description: "Derrière chaque projet, des personnes passionnées qui se soucient vraiment de votre succès."
  }
];

const COMMITMENTS = [
  { number: "48h", label: "Délai de réponse garanti" },
  { number: "100%", label: "Transparence sur les coûts" },
  { number: "15+", label: "Années d'expérience cumulée" },
  { number: "0", label: "Surprise en fin de projet" }
];

function MethodologyCard({ step, index }: { step: typeof METHODOLOGY_STEPS[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = step.icon;

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative"
      data-testid={`card-methodology-${step.phase}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-1 flex lg:flex-col items-center gap-4">
          <span className={`text-4xl lg:text-5xl font-light bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
            {step.phase}
          </span>
          <div className="hidden lg:block w-px h-full bg-gradient-to-b from-white/10 to-transparent min-h-[200px]" />
        </div>
        
        <div className="lg:col-span-11 p-8 md:p-10 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 rounded-sm transition-all">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className={`p-4 rounded-sm bg-gradient-to-br ${step.color} bg-opacity-10 flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {step.title}
                </h3>
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  {step.duration}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Livrables</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.deliverables.map((deliverable, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color}`} />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Approche() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Helmet>
        <title>Notre Approche | Méthodologie Agile & Consulting IT Premium | Answer is 42</title>
        <meta name="description" content="Découvrez notre méthodologie de consulting IT : diagnostic approfondi, stratégie sur mesure, implémentation agile et accompagnement au changement. Transparence et résultats garantis." />
        <meta name="keywords" content="méthodologie agile, consulting IT, gestion de projet, accompagnement digital, transformation numérique, Paris" />
        <link rel="canonical" href="https://answeris42.fr/approche" />
        
        <meta property="og:title" content="Notre Approche | Answer is 42" />
        <meta property="og:description" content="Méthodologie de consulting IT : diagnostic, stratégie, implémentation agile et accompagnement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/approche" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notre Approche | Answer is 42" />
        <meta name="twitter:description" content="Consulting IT premium : méthodologie agile, transparence et résultats." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Notre méthodologie de consulting IT",
            "description": "Approche en 4 phases pour transformer vos défis IT en succès",
            "step": METHODOLOGY_STEPS.map((step, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": step.title,
              "text": step.description
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#07070A]">
        <TechGrid />
        <FloatingShapes />
        <GrainTexture />
        <Navbar />
        
        <PageTransition>
        <main>
          <SpotlightEffect>
          <section ref={heroRef} className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              style={prefersReducedMotion ? {} : { y: backgroundY }}
            >
              <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/30" />
            </motion.div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-4xl">
                <Reveal>
                  <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8" data-testid="text-approach-label">
                    Notre philosophie
                  </p>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight mb-6 md:mb-10" data-testid="text-approach-title">
                    Une approche centrée sur{" "}
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                      vos résultats
                    </span>
                  </h1>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl tracking-wide" data-testid="text-approach-description">
                    Pas de méthodologie rigide. Pas de solutions préfabriquées. 
                    Chaque mission est unique, et notre approche s'adapte à votre contexte 
                    pour maximiser l'impact et minimiser les risques.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
          </SpotlightEffect>

          <section className="py-12 md:py-16 px-4 sm:px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-16">
                {COMMITMENTS.map((commitment, i) => (
                  <StaggerItem key={i}>
                    <div className="text-center" data-testid={`stat-commitment-${i}`}>
                      <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                        {commitment.number}
                      </p>
                      <p className="text-base text-white/50">
                        {commitment.label}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 md:py-32 px-4 sm:px-6" aria-labelledby="methodology-heading">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mb-12 md:mb-20">
                <Reveal>
                  <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8">
                    Méthodologie
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 id="methodology-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-6 md:mb-8">
                    4 phases pour transformer vos défis en succès
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-xl text-white/50 font-light leading-relaxed">
                    Notre processus éprouvé garantit transparence, prévisibilité et résultats mesurables 
                    tout en restant flexible pour s'adapter à vos besoins spécifiques.
                  </p>
                </Reveal>
              </div>

              <div className="space-y-16">
                {METHODOLOGY_STEPS.map((step, i) => (
                  <MethodologyCard key={step.phase} step={step} index={i} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" aria-labelledby="values-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                <Reveal>
                  <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8">
                    Nos valeurs
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 id="values-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-6 md:mb-8">
                    Ce qui guide chacune de nos actions
                  </h2>
                </Reveal>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {VALUES.map((value, i) => {
                  const Icon = value.icon;
                  return (
                    <StaggerItem key={i}>
                      <GlowCard className="h-full">
                        <div 
                          className="p-10 border border-white/5 hover:border-primary/20 rounded-sm transition-all group h-full"
                          data-testid={`card-value-${i}`}
                        >
                          <div className="p-4 bg-primary/10 rounded-sm w-fit mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                            {value.title}
                          </h3>
                          <p className="text-white/50 text-base leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </GlowCard>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </section>

          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="relative p-10 md:p-14 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-sm">
                  <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
                  
                  <blockquote className="relative z-10 text-center">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 italic">
                      "La vraie réponse aux défis complexes n'est jamais évidente. 
                      Elle émerge de la compréhension profonde du problème, 
                      de l'expertise technique et de la collaboration étroite avec nos clients."
                    </p>
                    <footer className="text-white/50">
                      <span className="text-primary font-medium">— L'équipe Answer is 42</span>
                    </footer>
                  </blockquote>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="relative p-8 sm:p-12 md:p-20 bg-gradient-to-br from-primary/10 via-purple-900/5 to-transparent border border-primary/20 rounded-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
                      Prêt à transformer votre IT ?
                    </h2>
                    <p className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed">
                      Discutons de vos enjeux. Premier échange sans engagement pour comprendre vos besoins.
                    </p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="group relative flex items-center justify-center gap-3 sm:gap-4 bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-medium transition-all overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto"
                    data-testid="link-approach-contact"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative">Planifier un échange</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        </PageTransition>

        <Footer />
      </div>
    </>
  );
}
