import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Approach } from "@/components/home/Approach";
import { Commitment } from "@/components/home/Commitment";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Commitment />
      </main>
      <Footer />
    </div>
  );
}
