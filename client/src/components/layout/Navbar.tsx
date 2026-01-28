import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity">
          Answer is 42
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={cn(
            "text-sm font-medium transition-colors hover:text-white",
            location === "/" ? "text-white" : "text-white/60"
          )}>
            Accueil
          </Link>
          <Link href="/contact" className={cn(
            "text-sm font-medium transition-colors hover:text-white",
            location === "/contact" ? "text-white" : "text-white/60"
          )}>
            Contact
          </Link>
          <Link href="/contact" className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
