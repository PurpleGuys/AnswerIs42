import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { WhyUs } from "@/components/home/WhyUs";
import { Approach } from "@/components/home/Approach";
import { Commitment } from "@/components/home/Commitment";
import { GrainTexture } from "@/components/ui/GrainTexture";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <GrainTexture />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrustIndicators />
        <Services />
        <WhyUs />
        <Approach />
        <Commitment />
      </main>
      <Footer />
    </div>
  );
}
