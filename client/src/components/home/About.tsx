import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { SpotlightEffect } from "@/components/ui/SpotlightEffect";

export function About() {
  return (
    <SpotlightEffect>
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-32">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8" data-testid="text-about-label">
                À propos
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight" data-testid="text-about-title">
                L'excellence dans la{" "}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                  simplicité.
                </span>
              </h2>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 lg:pt-16">
            <StaggerContainer className="space-y-10">
              <StaggerItem>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light tracking-wide" data-testid="text-about-p1">
                  Answer is 42 est un cabinet de consulting IT fondé sur une conviction : 
                  les projets réussissent quand les fondamentaux sont maîtrisés.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light tracking-wide" data-testid="text-about-p2">
                  Nous intervenons là où la clarté fait défaut, là où les décisions stagnent, 
                  là où le delivery patine. Notre méthode : simplifier pour accélérer.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="pt-8 sm:pt-10 border-l-2 border-primary/40 pl-6 sm:pl-10">
                  <blockquote className="text-2xl sm:text-3xl md:text-4xl text-white font-light italic leading-relaxed" data-testid="text-quote">
                    "La complexité est l'ennemi de l'exécution."
                  </blockquote>
                  <p className="mt-6 text-white/40 text-base tracking-wider">— Notre philosophie</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
    </SpotlightEffect>
  );
}
