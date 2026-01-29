import { Reveal, StaggerContainer, StaggerItem, AnimatedCounter } from "@/lib/animations";

const STATS = [
  { value: "48h", label: "Temps de réponse", sublabel: "pour chaque demande" },
  { value: "100%", label: "Transparence", sublabel: "sur les coûts et délais" },
  { value: "1", label: "Interlocuteur dédié", sublabel: "du début à la fin" },
  { value: "0", label: "Surprise", sublabel: "en fin de projet" },
];

export function TrustIndicators() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-center text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-16" data-testid="text-trust-label">
            Nos engagements
          </p>
        </Reveal>
        
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center group" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tighter" data-testid={`text-stat-value-${i}`}>
                  <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-400 transition-all duration-500">
                    <AnimatedCounter value={stat.value} />
                  </span>
                </div>
                <p className="text-white/80 font-medium mb-1" data-testid={`text-stat-label-${i}`}>{stat.label}</p>
                <p className="text-white/60 text-sm" data-testid={`text-stat-sublabel-${i}`}>{stat.sublabel}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
