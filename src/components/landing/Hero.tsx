import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #000000, #1A1A1A, #2A2A2A, #404040)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 animate-gradient" 
        style={{
          background: "linear-gradient(-45deg, #000000, #1A1A1A, #2A2A2A, #404040)",
          backgroundSize: "400% 400%",
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 40%, rgba(26,26,26,0.4) 60%, rgba(26,26,26,0.8) 80%, rgb(26,26,26) 100%)"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg text-white animate-fadeIn">
              Find your candidate in minutes
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <Input 
                type="text" 
                placeholder="Describe who you want to hire"
                className="bg-white/95 text-gray-900 placeholder:text-gray-500 h-14 text-lg shadow-xl"
              />
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold shadow-xl whitespace-nowrap h-14 text-lg transition-all duration-300 hover:scale-105"
              >
                Launch Job Now
              </Button>
            </div>
            <p className="text-2xl md:text-3xl text-white drop-shadow-lg font-semibold tracking-wide">
              AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
              Feedback—All in One Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};