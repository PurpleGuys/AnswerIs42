import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";

export function About() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-about-label">
                À propos
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight" data-testid="text-about-title">
                L'excellence dans la simplicité.
              </h2>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 lg:pt-12">
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light" data-testid="text-about-p1">
                  Answer is 42 est un cabinet de consulting IT fondé sur une conviction : 
                  les projets réussissent quand les fondamentaux sont maîtrisés.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light" data-testid="text-about-p2">
                  Nous intervenons là où la clarté fait défaut, là où les décisions stagnent, 
                  là où le delivery patine. Notre méthode : simplifier pour accélérer.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="pt-8 border-l-2 border-primary/30 pl-8">
                  <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed" data-testid="text-quote">
                    "La complexité est l'ennemi de l'exécution."
                  </blockquote>
                  <p className="mt-4 text-white/40 text-sm tracking-wider">— Notre philosophie</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
