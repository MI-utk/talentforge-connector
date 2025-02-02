import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <img 
              src="/lovable-uploads/d65dd7d2-7249-4d0b-92f1-01d6c26d28b4.png" 
              alt="Testera Logo" 
              className="w-32 h-32 mx-auto mb-8"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">
              Create and Evaluate Job Assessments using AI
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-6 drop-shadow-lg">
              Tell us who you want to hire
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <Input 
                type="text" 
                placeholder="I want to hire mechanical engineer for steel rods plant"
                className="bg-white text-gray-900 placeholder:text-gray-500 h-12"
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