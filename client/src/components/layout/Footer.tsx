import { Link } from "wouter";
import { Reveal } from "@/lib/animations";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Reveal>
              <Link 
                href="/" 
                className="text-2xl font-medium text-white mb-6 inline-block hover:text-primary transition-colors"
                data-testid="link-footer-logo"
              >
                Answer is 42
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/40 max-w-md leading-relaxed mb-8">
                Cabinet de consulting IT spécialisé en cadrage, pilotage et delivery de projets. 
                Une approche sobre pour des résultats mesurables.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/answeris42" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                  data-testid="link-linkedin"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
          
          <div>
            <Reveal>
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-6" data-testid="text-footer-nav-title">Navigation</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-home">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/approche" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-approche">
                    Approche
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
          
          <div>
            <Reveal>
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-6" data-testid="text-footer-legal-title">Légal</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                <li>
                  <Link href="/mentions-legales" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-mentions">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-confidentialite">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/cgu" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-cgu">
                    CGU
                  </Link>
                </li>
                <li>
                  <Link href="/politique-cookies" className="text-white/60 hover:text-white transition-colors" data-testid="link-footer-cookies">
                    Cookies
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
          
          <div>
            <Reveal>
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-6">Contact</h4>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:contact@answeris42.com" 
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                    data-testid="link-email"
                  >
                    <Mail className="w-4 h-4" />
                    contact@answeris42.com
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/40" data-testid="text-location">
                  <MapPin className="w-4 h-4" />
                  France / Remote
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm" data-testid="text-copyright">
            © {new Date().getFullYear()} Answer is 42. Tous droits réservés.
          </p>
          <p className="text-white/20 text-sm">
            Consulting IT
          </p>
        </div>
      </div>
    </footer>
  );
}
