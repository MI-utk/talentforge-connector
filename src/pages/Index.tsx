import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link } from "react-router-dom";

// Navigation Component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold dark:text-[#F9F6EE] text-[#36454F]">
              Testera
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center items-center space-x-8">
            <Link to="#features" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              Features
            </Link>
            <Link to="#pricing" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              Sign In
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/employee" className="dark:text-[#F0EAD6] text-[#36454F] hover:opacity-80">
                Testera for Employees
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden dark:bg-background bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <img 
              src="/lovable-uploads/d65dd7d2-7249-4d0b-92f1-01d6c26d28b4.png" 
              alt="Testera Logo" 
              className="w-32 h-32 mx-auto mb-8 animate-glow rounded-xl"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg dark:text-[#F9F6EE] text-[#36454F]">
              Create and Evaluate Job Assessments using AI
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 drop-shadow-lg dark:text-[#F0EAD6] text-[#36454F]">
              Tell us who you want to hire
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <Input 
                type="text" 
                placeholder="I want to hire mechanical engineer for steel rods plant"
                className="bg-white dark:bg-gray-800 dark:text-[#E2DFD2] text-[#36454F] placeholder:text-gray-500 dark:placeholder:text-gray-400 h-12"
              />
              <Button 
                size="lg" 
                className="bg-[#006BFF] hover:bg-[#0055CC] text-white font-semibold shadow-lg whitespace-nowrap h-12"
              >
                Create Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Index;