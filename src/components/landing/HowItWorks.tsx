import { ArrowRight, FileText, Edit3, Share2, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Create Job Description and Assessment using AI",
    description: "Testera uses latest AI models to create job descriptions and tests which are specific to your industry and job type",
    icon: FileText,
    iconColor: "from-orange-400 to-red-500",
  },
  {
    number: "2",
    title: "Edit, Remove or Add Questions",
    description: "Choose from video, audio, descriptive, and MCQ questions types to assess candidates on hard and soft skills through diverse mediums",
    icon: Edit3,
    iconColor: "from-blue-400 to-purple-500",
  },
  {
    number: "3",
    title: "Publish and Share the assessment",
    description: "Share assessments links privately to candidates or post your job on Testera's public job board to let anyone apply",
    icon: Share2,
    iconColor: "from-teal-400 to-emerald-500",
  },
  {
    number: "4",
    title: "Review Results",
    description: "Testera AI evaluates, scores, and provides details feedback on each question for every candidate responses so you can skip to reviewing the best candidates.",
    icon: BarChart3,
    iconColor: "from-green-400 to-emerald-500",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="relative bg-[#111] border-none text-white hover:shadow-xl transition-shadow duration-300 group rounded-[24px]"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.iconColor} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-lg animate-pulse" style={{ background: `linear-gradient(135deg, ${step.iconColor})` }} />
                    <Icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <CardTitle className="text-xl text-center mb-2">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    {step.description}
                  </p>
                </CardContent>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-white -translate-y-1/2" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};