import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navigation } from "@/components/landing/Navigation";
import { Solution } from "@/components/landing/Solution";
import { TabsSection } from "@/components/landing/TabsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TabsSection />
      <Solution />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;