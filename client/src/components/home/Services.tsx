import { SERVICES } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Compass, BarChart3, Rocket } from "lucide-react";
import { SpotlightEffect } from "@/components/ui/SpotlightEffect";
import { GlowCard } from "@/components/ui/GlowCard";

const ICONS = [Compass, BarChart3, Rocket];

export function Services() {
  return (
    <SpotlightEffect>
    <section id="services" className="py-40 md:py-48 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8" data-testid="text-services-label">
              Nos services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight" data-testid="text-services-title">
              Une expertise complète{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                du projet IT.
              </span>
            </h2>
          </Reveal>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={i}>
                <GlowCard className="h-full">
                  <div className="group p-8" data-testid={`card-service-${service.title.toLowerCase()}`}>
                    <div className="mb-10 w-16 h-16 rounded-sm bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary/80" />
                    </div>
                    <div className="border-t border-white/10 group-hover:border-primary/30 pt-10 transition-colors duration-500">
                      <h3 className="text-2xl font-semibold text-white mb-5 group-hover:text-primary transition-colors" data-testid={`text-service-title-${service.title.toLowerCase()}`}>
                        {service.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-lg font-light" data-testid={`text-service-desc-${service.title.toLowerCase()}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
    </SpotlightEffect>
  );
}
