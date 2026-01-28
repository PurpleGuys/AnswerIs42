import { COMMITMENT_POINTS } from "@/lib/constants";

export function Commitment() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-8 md:p-16 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-2xl md:text-3xl font-medium text-white">
              Notre engagement
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {COMMITMENT_POINTS.map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-px w-8 bg-primary/50" />
                  <span className="text-white/90 text-lg md:text-xl font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
