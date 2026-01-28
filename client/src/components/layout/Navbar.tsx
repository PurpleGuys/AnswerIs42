import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity"
            data-testid="link-logo"
          >
            Answer is 42
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location === "/" ? "text-white" : "text-white/60"
              )}
              data-testid="link-home"
            >
              Accueil
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location === "/contact" ? "text-white" : "text-white/60"
              )}
              data-testid="link-contact"
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-sm text-sm font-medium transition-all duration-300"
              data-testid="button-cta-contact"
            >
              Nous contacter
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
                data-testid="link-mobile-home"
              >
                Accueil
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
                data-testid="link-mobile-contact"
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all"
                data-testid="button-mobile-cta"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
