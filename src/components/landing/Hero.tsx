import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-testera-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-testera-600 to-testera-800">
        Unlock Opportunities with Real-World Skill Tests and AI-Driven Hiring
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
        AI-Powered Skill Assessments, Flexible Job Applications, and Real-Time
        Feedback—All in One Platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-testera-600 hover:bg-testera-700">
          Find Jobs
        </Button>
        <Button size="lg" variant="outline" className="border-testera-600 text-testera-600">
          Post a Job
        </Button>
      </div>
    </div>
  );
};