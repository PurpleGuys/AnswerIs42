import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Linkedin, Mail } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Alexandre Martin",
    role: "Fondateur & Consultant Senior",
    expertise: "Gouvernance IT, Transformation digitale",
    bio: "Spécialiste du pilotage de projets IT complexes et de la transformation digitale.",
    linkedin: "#",
    email: "alexandre@answeris42.com",
  },
  {
    name: "Sophie Dubois",
    role: "Directrice des Opérations",
    expertise: "Delivery, Agilité à l'échelle",
    bio: "Experte en méthodologies agiles et en optimisation des processus de delivery.",
    linkedin: "#",
    email: "sophie@answeris42.com",
  },
  {
    name: "Thomas Bernard",
    role: "Consultant Senior",
    expertise: "Architecture SI, Cloud",
    bio: "Architecte solution certifié AWS et Azure, spécialiste des migrations cloud.",
    linkedin: "#",
    email: "thomas@answeris42.com",
  },
];

function TeamCard({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleFlip = () => {
    if (!prefersReducedMotion) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="relative h-[400px] perspective-1000 cursor-pointer group"
      onClick={handleFlip}
      onKeyDown={(e) => e.key === "Enter" && handleFlip()}
      tabIndex={0}
      role="button"
      aria-label={`Voir les détails de ${member.name}`}
      data-testid={`card-team-${index}`}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.32, 0.72, 0, 1] }}
      >
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-sm p-8 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-colors">
            <span className="text-2xl font-medium text-white">
              {member.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          
          <h3 className="text-xl font-medium text-white mb-2" data-testid={`text-team-name-${index}`}>
            {member.name}
          </h3>
          <p className="text-primary text-sm mb-4" data-testid={`text-team-role-${index}`}>
            {member.role}
          </p>
          <p className="text-white/40 text-sm" data-testid={`text-team-expertise-${index}`}>
            {member.expertise}
          </p>
          
          <div className="mt-auto pt-6 border-t border-white/5">
            <p className="text-white/30 text-xs">Cliquez pour en savoir plus</p>
          </div>
        </div>

        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-b from-primary/10 to-purple-900/10 border border-primary/20 rounded-sm p-8 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-white/70 leading-relaxed mb-6 flex-1" data-testid={`text-team-bio-${index}`}>
            {member.bio}
          </p>
          
          <div className="space-y-3">
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              data-testid={`link-team-linkedin-${index}`}
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href={`mailto:${member.email}`}
              className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              data-testid={`link-team-email-${index}`}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">{member.email}</span>
            </a>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs">Cliquez pour revenir</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Team() {
  return (
    <section id="equipe" className="py-32 md:py-40 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-px h-48 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute bottom-1/4 left-10 w-24 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <Reveal>
            <p className="text-primary/80 text-xs font-medium tracking-[0.3em] uppercase mb-6" data-testid="text-team-label">
              Notre équipe
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-6" data-testid="text-team-title">
              Des experts engagés.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-white/50 font-light" data-testid="text-team-description">
              Une équipe senior, sélectionnée pour son expertise et son pragmatisme.
              Chaque consultant apporte une vision stratégique et opérationnelle.
            </p>
          </Reveal>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <StaggerItem key={i}>
              <TeamCard member={member} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
