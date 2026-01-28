import { APPROACH_POINTS } from "@/lib/constants";
import { Check } from "lucide-react";

export function Approach() {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Une méthode sobre : comprendre vite, décider clair, livrer propre.
          </h2>
        </div>
        
        <ul className="space-y-8">
          {APPROACH_POINTS.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-lg text-white/80 font-light">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
