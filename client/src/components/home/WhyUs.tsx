import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Target, Zap, Shield, Users } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Focus stratégique",
    description: "Nous ne nous dispersons pas. Chaque intervention cible l'essentiel pour un impact maximum."
  },
  {
    icon: Zap,
    title: "Exécution rapide",
    description: "Pas de phases d'étude interminables. Nous agissons vite, avec méthode."
  },
  {
    icon: Shield,
    title: "Engagement total",
    description: "Nous prenons la responsabilité de vos projets comme si c'étaient les nôtres."
  },
  {
    icon: Users,
    title: "Proximité constante",
    description: "Un interlocuteur unique, disponible, impliqué du premier au dernier jour."
  }
];

export function WhyUs() {
  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-10 w-24 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-whyus-label">
              Pourquoi nous
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-6" data-testid="text-whyus-title">
              Ce qui nous différencie.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-white/50 font-light" data-testid="text-whyus-description">
              Dans un marché saturé de consultants, nous avons fait le choix de la spécialisation 
              et de l'engagement. Voici ce que cela change concrètement.
            </p>
          </Reveal>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DIFFERENTIATORS.map((item, i) => (
            <StaggerItem key={i}>
              <div 
                className="group p-8 md:p-10 border border-white/5 hover:border-primary/20 bg-white/[0.01] hover:bg-white/[0.02] rounded-sm transition-all duration-500"
                data-testid={`card-differentiator-${i}`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors" data-testid={`text-diff-title-${i}`}>
                      {item.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light" data-testid={`text-diff-desc-${i}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
