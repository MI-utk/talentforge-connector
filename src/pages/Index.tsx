import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navigation } from "@/components/landing/Navigation";
import { Solution } from "@/components/landing/Solution";
import { Testimonials } from "@/components/landing/Testimonials";
import { ActiveJobs } from "@/components/landing/ActiveJobs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ActiveJobs />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;