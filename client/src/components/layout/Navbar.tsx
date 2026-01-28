import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "glass-nav border-b border-white/10 py-0" 
            : "bg-transparent border-b border-transparent py-2"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-16" : "h-20"
          )}>
            <Link 
              href="/" 
              className="group flex items-center gap-1 transition-all duration-300"
              data-testid="link-logo"
            >
              <span className="text-xl font-light tracking-tight text-white group-hover:text-white/80 transition-colors">
                Answer is
              </span>
              <span className="text-xl font-semibold tracking-tight text-primary group-hover:text-primary/80 transition-colors">
                42
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-12">
              <div className="flex items-center gap-8">
                <Link 
                  href="/" 
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 hover:text-white",
                    location === "/" 
                      ? "text-white" 
                      : "text-white/50"
                  )}
                  data-testid="link-home"
                >
                  Accueil
                  {location === "/" && (
                    <motion.span 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
                <Link 
                  href="/services" 
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 hover:text-white",
                    location === "/services" 
                      ? "text-white" 
                      : "text-white/50"
                  )}
                  data-testid="link-services"
                >
                  Services
                  {location === "/services" && (
                    <motion.span 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
                <Link 
                  href="/approche" 
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 hover:text-white",
                    location === "/approche" 
                      ? "text-white" 
                      : "text-white/50"
                  )}
                  data-testid="link-approche"
                >
                  Approche
                  {location === "/approche" && (
                    <motion.span 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </div>
              
              <Link 
                href="/contact" 
                className="group relative overflow-hidden bg-white text-background px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 hover:bg-white/90"
                data-testid="button-cta-contact"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Nous contacter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
              data-testid="button-menu-toggle"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 right-10 w-px h-48 bg-gradient-to-b from-primary/20 to-transparent" />
              <div className="absolute bottom-1/3 left-10 w-24 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="flex flex-col h-full pt-24 px-8">
              <motion.div 
                className="space-y-1"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-4 text-4xl font-light tracking-tight transition-colors border-b border-white/5",
                    location === "/" ? "text-primary" : "text-white"
                  )}
                  data-testid="link-mobile-home"
                >
                  Accueil
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-4 text-4xl font-light tracking-tight transition-colors border-b border-white/5",
                    location === "/services" ? "text-primary" : "text-white/60 hover:text-white"
                  )}
                  data-testid="link-mobile-services"
                >
                  Services
                </Link>
                <Link 
                  href="/approche" 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-4 text-4xl font-light tracking-tight transition-colors border-b border-white/5",
                    location === "/approche" ? "text-primary" : "text-white/60 hover:text-white"
                  )}
                  data-testid="link-mobile-approche"
                >
                  Approche
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-4 text-4xl font-light tracking-tight transition-colors border-b border-white/5",
                    location === "/contact" ? "text-primary" : "text-white/60 hover:text-white"
                  )}
                  data-testid="link-mobile-contact"
                >
                  Contact
                </Link>
              </motion.div>
              
              <motion.div 
                className="mt-auto mb-12"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-white text-background py-4 rounded-sm text-lg font-medium"
                  data-testid="button-mobile-cta"
                >
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <p className="text-center text-white/30 text-sm mt-6">
                  contact@answeris42.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
