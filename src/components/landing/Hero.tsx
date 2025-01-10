import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#222222] relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#222222]/95 via-[#333333]/90 to-white" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-white">
              Find your candidate in minutes
            </h1>
            <p className="text-xl md:text-2xl text-[#C8C8C9] drop-shadow-lg mb-8 font-medium">
              AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
              Feedback—All in One Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Input 
                type="text" 
                placeholder="Describe who you want to hire"
                className="bg-white/90 text-testera-firefly placeholder:text-testera-firefly/60"
              />
              <Button 
                size="lg" 
                className="bg-testera-green hover:bg-testera-mint text-testera-firefly font-semibold shadow-lg whitespace-nowrap"
              >
                Launch Job Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};