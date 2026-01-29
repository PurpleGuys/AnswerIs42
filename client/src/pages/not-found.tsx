import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainTexture } from "@/components/ui/GrainTexture";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <GrainTexture />
      <Navbar />
      
      <main id="main-content" className="flex-grow flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-5xl font-semibold text-white mb-4">404</h1>
          <p className="text-xl text-white/60 mb-8">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Retour à l'accueil
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
