import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, i) => (
            <div key={i} className="group border-t border-white/10 pt-8 hover:border-primary/50 transition-colors duration-500">
              <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
