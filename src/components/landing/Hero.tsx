import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #1A1A1A, #2A2A2A, #404040, #E6E6E6)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 animate-gradient" 
        style={{
          background: "linear-gradient(-45deg, #1A1A1A, #2A2A2A, #404040, #E6E6E6)",
          backgroundSize: "400% 400%",
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 40%, rgba(249,250,251,0.4) 60%, rgba(249,250,251,0.8) 80%, rgb(249,250,251) 100%)"
        }}
      />
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
                className="bg-white/90 text-gray-900 placeholder:text-gray-500 h-12"
              />
              <Button 
                size="lg" 
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold shadow-lg whitespace-nowrap h-12"
              >
                Launch Job Now
              </Button>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 drop-shadow-lg font-medium">
              AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
              Feedback—All in One Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};