import { Check } from "lucide-react";

const EmployerFeatures = [
  {
    title: "AI-Powered Job Creation",
    description: "Publish job listings in seconds with AI assistance that generates job descriptions tailored to real-world job requirements.",
  },
  {
    title: "Customizable Assessments",
    description: "Design job tests with ease using AI-generated questions that simulate the tasks candidates will face on the job.",
  },
  {
    title: "Versatile Question Formats",
    description: "Choose from multiple question types: MCQs, audio, video, and descriptive questions for a well-rounded evaluation.",
  },
  {
    title: "AI-Driven Candidate Scoring",
    description: "Assess candidates quickly and accurately using AI-powered scoring that ensures fair and unbiased results.",
  },
];

const JobSeekerFeatures = [
  {
    title: "Increase Your Visibility",
    description: "Showcase your skills to a wide range of employers without the need for resumes.",
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Take job tests that simulate actual tasks on the job, helping you improve your skills while preparing for the future.",
  },
  {
    title: "Apply on Your Schedule",
    description: "Complete job tests and apply for jobs at your own pace, without the need to adhere to rigid schedules.",
  },
  {
    title: "One Test, Multiple Opportunities",
    description: "Take a single generic test recognized by multiple companies, boosting your chances of getting hired across a range of industries.",
  },
];

export const Solution = () => {
  return (
    <section className="py-20 px-4 bg-testera-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
            alt="Technology Platform"
            className="w-24 h-24 mx-auto mb-8 rounded-full object-cover"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing Testera —The Future of Job Matching
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Testera, we make hiring smarter, faster, and more transparent. Our
            platform connects job seekers with employers through AI-driven tests
            designed to assess real-world skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Employer Features"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-8">For Employers</h3>
            </div>
            <div className="space-y-6">
              {EmployerFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-testera-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-testera-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Job Seeker Features"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-8">For Job Seekers</h3>
            </div>
            <div className="space-y-6">
              {JobSeekerFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-testera-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-testera-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
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