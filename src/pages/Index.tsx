import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navigation } from "@/components/landing/Navigation";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Testimonials } from "@/components/landing/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;