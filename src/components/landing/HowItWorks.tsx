import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Create Job Description and Assessment using AI",
    description: "Testera uses latest AI models to create job descriptions and tests which are specific to your industry and job type",
  },
  {
    number: "2",
    title: "Edit, Remove or Add Questions",
    description: "Choose from video, audio, descriptive, and MCQ questions types to assess candidates on hard and soft skills through diverse mediums",
  },
  {
    number: "3",
    title: "Publish and Share the assessment",
    description: "Share assessments links privately to candidates or post your job on Testera's public job board to let anyone apply",
  },
  {
    number: "4",
    title: "Review Results",
    description: "Testera AI evaluates, scores, and provides details feedback on each question for every candidate responses so you can skip to reviewing the best candidates.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-testera-emerald">
          A Simple, Four-Step Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
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
                <ArrowRight className="hidden md:block absolute top-6 -right-4 w-8 h-8 text-testera-emerald" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};