import { COMMITMENT_POINTS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function Commitment() {
  return (
    <section className="py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-sm border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-purple-900/[0.05]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />
          
          <div className="relative p-10 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <Reveal>
                  <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-commitment-label">
                    Notre engagement
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-8" data-testid="text-commitment-title">
                    Un pacte de clarté.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg text-white/50 font-light mb-10" data-testid="text-commitment-description">
                    Quand vous travaillez avec nous, vous savez toujours où vous en êtes. 
                    C'est notre promesse.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <Link 
                    href="/contact" 
                    className="group relative inline-flex items-center gap-4 bg-white text-background px-10 py-5 rounded-sm text-base font-medium hover:bg-white/90 transition-all overflow-hidden shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
                    data-testid="button-commitment-contact"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative">Discutons de votre projet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                  </Link>
                </Reveal>
              </div>
              
              <StaggerContainer className="space-y-8">
                {COMMITMENT_POINTS.map((point, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-6" data-testid={`container-commitment-${i}`}>
                      <div className="h-px w-12 bg-gradient-to-r from-primary to-primary/30" />
                      <span className="text-xl md:text-2xl text-white font-light" data-testid={`text-commitment-point-${i}`}>{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
