import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,#ffffff_100%)]" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-testera-emerald via-testera-green to-testera-mint">
            The Future of Hiring is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
            Feedback—All in One Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-testera-green hover:bg-testera-mint text-testera-firefly font-semibold">
              Find Jobs
            </Button>
            <Button size="lg" variant="outline" className="border-testera-green text-testera-green hover:bg-testera-mint/10 font-semibold">
              Post a Job
            </Button>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Platform Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};