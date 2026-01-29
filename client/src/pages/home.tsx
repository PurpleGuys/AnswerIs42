import { Helmet } from "react-helmet";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { WhyUs } from "@/components/home/WhyUs";
import { Approach } from "@/components/home/Approach";
import { MethodologyTimeline } from "@/components/home/MethodologyTimeline";
import { Commitment } from "@/components/home/Commitment";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { TechGrid } from "@/components/ui/TechGrid";
import { PageTransition } from "@/components/ui/PageTransition";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Answer is 42 | Consulting IT - Gestion de Projet, SQL, Python,
          Cloud
        </title>
        <meta
          name="description"
          content="Cabinet de consulting IT spécialisé en gestion de projet, gouvernance IT, développement Python, SQL, C#/.NET et Cloud. Expertise en transformation digitale à Paris et en France."
        />
        <meta
          name="keywords"
          content="consulting IT, gestion de projet IT, Python, SQL, C#, .NET, Cloud, DevOps, transformation digitale, Paris, France"
        />
        <link rel="canonical" href="https://answeris42.fr" />

        <meta property="og:title" content="Answer is 42 | Consulting IT" />
        <meta
          property="og:description"
          content="Cabinet de consulting IT spécialisé en gestion de projet, développement et transformation digitale."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://answeris42.fr" />
        <meta property="og:site_name" content="Answer is 42" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Answer is 42 | Consulting IT" />
        <meta
          name="twitter:description"
          content="Cabinet de consulting IT : Python, SQL, C#, Cloud et gestion de projet."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Answer is 42",
            url: "https://answeris42.fr",
            description:
              "Cabinet de consulting IT spécialisé en gestion de projet et transformation digitale",
            areaServed: "France",
            knowsAbout: [
              "IT Consulting",
              "Project Management",
              "Python",
              "SQL",
              "C#",
              ".NET",
              "Cloud Computing",
              "DevOps",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <TechGrid />
        <FloatingShapes />
        <GrainTexture />
        <Navbar />
        <PageTransition>
          <main>
            <Hero />
            <About />
            <TrustIndicators />
            <Services />
            <WhyUs />
            <Approach />
            <MethodologyTimeline />
            <Commitment />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
}
