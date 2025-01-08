import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Create or Find Jobs",
    description: "Employers create job listings with AI support, while job seekers can browse available opportunities.",
  },
  {
    title: "Take the Test",
    description: "Candidates take job tests based on real-world scenarios—on their own time.",
  },
  {
    title: "Get Hired",
    description: "Employers review results powered by AI and hire the best talent quickly and efficiently.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          A Simple, Three-Step Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-testera-100 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-testera-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-testera-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};