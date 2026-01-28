import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { TechGrid } from "@/components/ui/TechGrid";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { PageTransition } from "@/components/ui/PageTransition";
import { GlowCard } from "@/components/ui/GlowCard";
import { 
  Database, 
  Code2, 
  Cog, 
  Cloud, 
  Shield, 
  BarChart3, 
  Workflow, 
  Server,
  ArrowRight,
  Check,
  Sparkles
} from "lucide-react";

const SERVICES = [
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering & SQL",
    subtitle: "Architecture de données performante",
    description: "Conception et optimisation de bases de données relationnelles et NoSQL. Migration de données, ETL/ELT pipelines, et data warehousing pour une prise de décision éclairée.",
    technologies: ["PostgreSQL", "SQL Server", "Oracle", "MongoDB", "Snowflake", "BigQuery"],
    capabilities: [
      "Modélisation de données et schémas optimisés",
      "Requêtes complexes et optimisation de performance",
      "Migration et transformation de données",
      "Data pipelines temps réel et batch",
      "Gouvernance et qualité des données"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "python-development",
    icon: Code2,
    title: "Développement Python",
    subtitle: "Solutions backend robustes",
    description: "Développement d'applications Python haute performance pour l'automatisation, l'analyse de données, les APIs REST et les microservices cloud-native.",
    technologies: ["Python 3.12+", "FastAPI", "Django", "Flask", "Pandas", "NumPy"],
    capabilities: [
      "APIs RESTful et GraphQL",
      "Microservices et architecture distribuée",
      "Analyse de données et Machine Learning",
      "Web scraping et extraction de données",
      "Tests automatisés et CI/CD"
    ],
    color: "from-yellow-500 to-green-500"
  },
  {
    id: "dotnet-development",
    icon: Server,
    title: "Développement C# / .NET",
    subtitle: "Applications enterprise-grade",
    description: "Solutions .NET robustes et scalables pour les environnements enterprise. Applications web, services Windows, APIs et intégrations système.",
    technologies: ["C# 12", ".NET 8", "ASP.NET Core", "Entity Framework", "Azure", "Blazor"],
    capabilities: [
      "Applications web ASP.NET Core",
      "APIs RESTful et gRPC",
      "Services Windows et applications desktop",
      "Intégration Azure et cloud Microsoft",
      "Legacy modernization et refactoring"
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    id: "automation",
    icon: Cog,
    title: "Automatisation & RPA",
    subtitle: "Optimisez vos processus",
    description: "Automatisation intelligente des tâches répétitives. Réduction des erreurs humaines, gain de temps et amélioration de la productivité opérationnelle.",
    technologies: ["Power Automate", "UiPath", "Selenium", "Playwright", "Airflow", "Prefect"],
    capabilities: [
      "Automatisation de processus métier (BPA)",
      "Robotic Process Automation (RPA)",
      "Orchestration de workflows complexes",
      "Intégrations inter-systèmes",
      "Monitoring et alerting automatisé"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "Infrastructure moderne",
    description: "Conception et déploiement d'infrastructures cloud sécurisées. CI/CD, containerisation, et pratiques DevOps pour une livraison continue.",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    capabilities: [
      "Architecture cloud-native",
      "Pipelines CI/CD automatisés",
      "Containerisation et orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring et observabilité"
    ],
    color: "from-sky-500 to-indigo-500"
  },
  {
    id: "security-governance",
    icon: Shield,
    title: "Sécurité & Gouvernance IT",
    subtitle: "Protection et conformité",
    description: "Mise en place de politiques de sécurité, audits de conformité RGPD, et gouvernance IT. Protection des données sensibles et gestion des risques.",
    technologies: ["ISO 27001", "RGPD", "SOC 2", "OWASP", "Zero Trust", "IAM"],
    capabilities: [
      "Audits de sécurité et pentesting",
      "Mise en conformité RGPD",
      "Politiques de sécurité et formation",
      "Gestion des identités et accès (IAM)",
      "Plan de continuité d'activité (PCA)"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "business-intelligence",
    icon: BarChart3,
    title: "Business Intelligence",
    subtitle: "Données en insights",
    description: "Transformation de vos données brutes en tableaux de bord interactifs et rapports décisionnels. Visualisation et analyse pour piloter votre activité.",
    technologies: ["Power BI", "Tableau", "Looker", "Metabase", "dbt", "Superset"],
    capabilities: [
      "Dashboards interactifs et KPIs",
      "Reporting automatisé",
      "Self-service analytics",
      "Data storytelling",
      "Prédictions et forecasting"
    ],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "project-management",
    icon: Workflow,
    title: "Gestion de Projet IT",
    subtitle: "Livraison maîtrisée",
    description: "Pilotage de projets IT complexes avec méthodologies agiles et traditionnelles. De la conception à la mise en production avec suivi rigoureux.",
    technologies: ["Scrum", "Kanban", "SAFe", "PRINCE2", "Jira", "Azure DevOps"],
    capabilities: [
      "Cadrage et planification projet",
      "Gestion des parties prenantes",
      "Suivi budget et délais",
      "Gestion des risques",
      "Conduite du changement"
    ],
    color: "from-amber-500 to-yellow-500"
  }
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
      data-testid={`card-service-${service.id}`}
    >
      <GlowCard className="h-full border border-white/5 hover:border-primary/20">
        <div className="p-8 md:p-10 h-full">
          <div className="flex items-start gap-6 mb-8">
            <div className={`p-4 rounded-sm bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-primary/80 text-sm font-medium tracking-wide">
                {service.subtitle}
              </p>
            </div>
          </div>

          <p className="text-white/60 leading-relaxed mb-8 text-base">
            {service.description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-sm border border-white/5 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Expertises</p>
            <ul className="space-y-3">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-2xl`} />
          </div>
        </div>
      </GlowCard>
    </motion.article>
  );
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Services IT Premium | Consulting SQL, Python, C#, Cloud | Answer is 42</title>
        <meta name="description" content="Expertise en développement Python, C#/.NET, SQL, automatisation RPA, Cloud DevOps, Business Intelligence et gestion de projet IT. Consulting IT premium à Paris." />
        <meta name="keywords" content="consulting IT, développement Python, C# .NET, SQL, PostgreSQL, automatisation, RPA, Cloud AWS Azure, DevOps, Business Intelligence, gestion projet IT, Paris" />
        <link rel="canonical" href="https://answeris42.fr/services" />
        
        <meta property="og:title" content="Services IT Premium | Answer is 42" />
        <meta property="og:description" content="Expertise en développement Python, C#/.NET, SQL, automatisation, Cloud et gestion de projet IT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr/services" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services IT Premium | Answer is 42" />
        <meta name="twitter:description" content="Consulting IT premium : Python, C#, SQL, Cloud, DevOps, BI et plus." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Answer is 42",
              "url": "https://answeris42.fr"
            },
            "areaServed": "France",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services IT",
              "itemListElement": SERVICES.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title,
                  "description": s.description
                },
                "position": i + 1
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#07070A]">
        <TechGrid />
        <FloatingShapes />
        <GrainTexture />
        <Navbar />
        
        <PageTransition>
        <main>
          <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <Reveal>
                  <p className="text-primary/80 text-xs font-medium tracking-[0.4em] uppercase mb-8" data-testid="text-services-label">
                    Nos expertises
                  </p>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight mb-6 md:mb-10" data-testid="text-services-title">
                    Des solutions technologiques{" "}
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                      sur mesure
                    </span>
                  </h1>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl tracking-wide" data-testid="text-services-description">
                    De l'architecture de données au déploiement cloud, nous maîtrisons l'ensemble 
                    de la chaîne technologique pour transformer vos défis en opportunités.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 px-4 sm:px-6" aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Liste de nos services</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                {SERVICES.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="relative p-8 sm:p-12 md:p-20 bg-gradient-to-br from-primary/10 via-purple-900/5 to-transparent border border-primary/20 rounded-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-primary" />
                      <span className="text-primary text-base font-medium tracking-wide">Projet sur mesure</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                      Vous avez un besoin spécifique ?
                    </h2>
                    <p className="text-white/50 text-xl max-w-xl leading-relaxed">
                      Discutons de votre projet. Notre expertise couvre bien plus que cette liste.
                    </p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="group relative flex items-center justify-center gap-3 sm:gap-4 bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-sm text-base sm:text-lg font-medium transition-all overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto"
                    data-testid="link-services-contact"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative">Démarrer un projet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        </PageTransition>

        <Footer />
      </div>
    </>
  );
}
