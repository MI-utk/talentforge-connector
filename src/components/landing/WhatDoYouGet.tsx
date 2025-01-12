import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Create Job Descriptions with AI",
    description: "Generate comprehensive job descriptions in seconds using AI. Our platform analyzes industry standards and your specific requirements to create accurate, engaging job posts.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Create Job Assessments with AI",
    description: "Design custom skill assessments with AI-generated questions that accurately evaluate candidates' abilities. Create relevant, challenging tests that reflect real-world scenarios.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Review Candidate Answers with AI",
    description: "Let AI analyze candidate responses quickly and objectively. Get detailed insights into candidates' performance with automated scoring and comprehensive feedback.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Video, Audio, MCQs, and descriptive questions",
    description: "Choose from multiple question formats to thoroughly assess candidates. Create diverse assessments that test both technical skills and soft skills through various mediums.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

export const WhatDoYouGet = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-testera-emerald">
          What Do You Get?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl text-testera-emerald">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};