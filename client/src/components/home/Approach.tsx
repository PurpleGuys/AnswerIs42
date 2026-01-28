import { APPROACH_POINTS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";

export function Approach() {
  return (
    <section className="py-32 md:py-40 px-6 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Reveal>
              <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-approach-label">
                Notre méthode
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-8" data-testid="text-approach-title">
                Comprendre vite. Décider clair. Livrer propre.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/50 font-light leading-relaxed" data-testid="text-approach-description">
                Nous appliquons une méthode sobre, éprouvée sur des dizaines de projets. 
                Pas de frameworks complexes, pas de jargon inutile. Juste ce qui fonctionne.
              </p>
            </Reveal>
          </div>
          
          <StaggerContainer className="space-y-6">
            {APPROACH_POINTS.map((point, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-6 group" data-testid={`container-approach-point-${i}`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 text-primary text-sm font-medium shrink-0 group-hover:bg-primary group-hover:text-white transition-colors" data-testid={`text-approach-number-${i}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-2">
                    <span className="text-lg md:text-xl text-white/80 font-light leading-relaxed" data-testid={`text-approach-point-${i}`}>
                      {point}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
