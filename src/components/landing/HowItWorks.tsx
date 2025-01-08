import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Create or Find Jobs",
    description: "Employers create job listings with AI support, while job seekers can browse available opportunities.",
  },
  {
    number: "2",
    title: "Take the Test",
    description: "Candidates take job tests based on real-world scenarios—on their own time.",
  },
  {
    number: "3",
    title: "Get Hired",
    description: "Employers review results powered by AI and hire the best talent quickly and efficiently.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-testera-emerald">
          A Simple, Three-Step Process
        </h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-testera-emerald flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-testera-emerald">{step.title}</h3>
              <p className="text-gray-600 max-w-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-6 -right-6 w-8 h-8 text-testera-emerald" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};