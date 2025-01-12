import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-blue-500"
    >
      <div className="absolute inset-0 animate-glow pointer-events-none opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">
              Find your candidate in minutes
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <Input 
                type="text" 
                placeholder="Describe who you want to hire"
                className="bg-white text-gray-900 placeholder:text-gray-500 h-12"
              />
              <Button 
                size="lg" 
                className="bg-testera-emerald hover:bg-testera-green text-white font-semibold shadow-lg whitespace-nowrap h-12"
              >
                Launch Job Now
              </Button>
            </div>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg font-medium">
              AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
              Feedback—All in One Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};