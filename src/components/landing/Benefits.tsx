import { Check } from "lucide-react";

const employerBenefits = [
  {
    title: "Save Time & Money",
    description: "Speed up your hiring process with AI-driven assessments.",
  },
  {
    title: "Hire with Confidence",
    description: "Get deeper insights into candidates' actual skills, not just their resumes.",
  },
  {
    title: "AI-Powered Scoring",
    description: "Let AI evaluate candidates' answers and provide you with a detailed score, saving you time and ensuring objective results.",
  },
  {
    title: "Customizable Flexibility",
    description: "Tailor assessments to your exact job requirements and needs.",
  },
];

const jobSeekerBenefits = [
  {
    title: "Improve Your Hiring Chances",
    description: "Get noticed by top employers by showcasing your skills through real-world assessments.",
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Prepare for jobs by taking tests that reflect tasks you'll actually perform.",
  },
  {
    title: "AI-Powered Feedback",
    description: "Receive immediate feedback on your answers with AI-generated scores, helping you improve for future opportunities.",
  },
  {
    title: "Flexible Application Process",
    description: "Apply to jobs and complete assessments when it's convenient for you.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 text-white">For Employers</h3>
            <div className="space-y-8">
              {employerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-8 text-white">For Job Seekers</h3>
            <div className="space-y-8">
              {jobSeekerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};