import { Link } from "wouter";
import { Reveal } from "@/lib/animations";
import { ArrowUpRight, Mail, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Link 
                href="/" 
                className="inline-block mb-8 group"
                data-testid="link-footer-logo"
              >
                <span className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:via-purple-400 group-hover:to-primary transition-all duration-500">
                  Answer is 42
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/50 max-w-sm leading-relaxed text-lg font-light mb-10">
                Consulting IT spécialisé en gestion de projet, développement et transformation digitale.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a 
                href="https://linkedin.com/company/answeris42" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">Suivez-nous sur LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-8">
              <div>
                <Reveal>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-8" data-testid="text-footer-nav-title">
                    Navigation
                  </h4>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="space-y-5">
                    {[
                      { href: "/", label: "Accueil" },
                      { href: "/services", label: "Services" },
                      { href: "/approche", label: "Approche" },
                      { href: "/contact", label: "Contact" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-white/50 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                          data-testid={`link-footer-${link.label.toLowerCase()}`}
                        >
                          <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              
              <div>
                <Reveal>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-8" data-testid="text-footer-legal-title">
                    Légal
                  </h4>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="space-y-5">
                    {[
                      { href: "/mentions-legales", label: "Mentions légales" },
                      { href: "/politique-confidentialite", label: "Confidentialité" },
                      { href: "/cgu", label: "CGU" },
                      { href: "/politique-cookies", label: "Cookies" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-white/50 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                          data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <Reveal>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-8">
                    Contact
                  </h4>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="space-y-6">
                    <a 
                      href="mailto:contact@answeris42.fr" 
                      className="flex items-start gap-4 text-white/50 hover:text-white transition-colors duration-300 group"
                      data-testid="link-email"
                    >
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-white/30 mb-1">Email</p>
                        <p className="text-white/70 group-hover:text-white transition-colors">contact@answeris42.fr</p>
                      </div>
                    </a>
                    
                    <div className="flex items-start gap-4 text-white/50" data-testid="text-location">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm text-white/30 mb-1">Localisation</p>
                        <p className="text-white/70">France / Remote</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-sm" data-testid="text-copyright">
              © {currentYear} Answer is 42. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/40 text-sm">Disponible pour nouveaux projets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
