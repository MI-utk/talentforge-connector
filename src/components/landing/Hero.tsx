import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-testera-emerald/90 to-white relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-testera-firefly/95 via-testera-emerald/90 to-white" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-testera-green via-testera-mint to-white">
              Unlock Opportunities with Real-World Skill Tests and AI-Driven Hiring
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg mb-8 font-medium">
              AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
              Feedback—All in One Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-testera-green hover:bg-testera-mint text-testera-firefly font-semibold shadow-lg">
                Find Jobs
              </Button>
              <Button size="lg" variant="outline" className="border-testera-green text-testera-green hover:bg-testera-mint/10 font-semibold shadow-lg">
                Post a Job
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};