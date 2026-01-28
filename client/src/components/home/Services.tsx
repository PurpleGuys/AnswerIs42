import { SERVICES } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Compass, BarChart3, Rocket } from "lucide-react";

const ICONS = [Compass, BarChart3, Rocket];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-services-label">
              Nos services
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight" data-testid="text-services-title">
              Une expertise complète du projet IT.
            </h2>
          </Reveal>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={i}>
                <div className="group" data-testid={`card-service-${service.title.toLowerCase()}`}>
                  <div className="mb-8 w-14 h-14 rounded-sm bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <Icon className="w-7 h-7 text-primary/80" />
                  </div>
                  <div className="border-t border-white/10 group-hover:border-primary/30 pt-8 transition-colors duration-500">
                    <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-primary transition-colors" data-testid={`text-service-title-${service.title.toLowerCase()}`}>
                      {service.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-lg font-light" data-testid={`text-service-desc-${service.title.toLowerCase()}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
