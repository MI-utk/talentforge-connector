import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobCreationDemo } from "../demos/JobCreationDemo";
import { AssessmentDemo } from "../demos/AssessmentDemo";
import { QuestionFormatDemo } from "../demos/QuestionFormatDemo";
import { ScoringDemo } from "../demos/ScoringDemo";

const EmployerFeatures = [
  {
    title: "AI-Powered Job Creation",
    description: "Publish job listings in seconds with AI assistance that generates job descriptions tailored to real-world job requirements.",
    demo: JobCreationDemo
  },
  {
    title: "Customizable Assessments",
    description: "Design job tests with ease using AI-generated questions that simulate the tasks candidates will face on the job.",
    demo: AssessmentDemo
  },
  {
    title: "Versatile Question Formats",
    description: "Choose from multiple question types: MCQs, audio, video, and descriptive questions for a well-rounded evaluation.",
    demo: QuestionFormatDemo
  },
  {
    title: "AI-Driven Candidate Scoring",
    description: "Assess candidates quickly and accurately using AI-powered scoring that ensures fair and unbiased results.",
    demo: ScoringDemo
  },
];

const JobSeekerFeatures = [
  {
    title: "Increase Your Visibility",
    description: "Showcase your skills to a wide range of employers without the need for resumes.",
    demo: JobCreationDemo
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Take job tests that simulate actual tasks on the job, helping you improve your skills while preparing for the future.",
    demo: AssessmentDemo
  },
  {
    title: "Apply on Your Schedule",
    description: "Complete job tests and apply for jobs at your own pace, without the need to adhere to rigid schedules.",
    demo: QuestionFormatDemo
  },
  {
    title: "One Test, Multiple Opportunities",
    description: "Take a single generic test recognized by multiple companies, boosting your chances of getting hired across a range of industries.",
    demo: ScoringDemo
  },
];

export const Solution = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-testera-emerald">
            Introducing Testera —The Future of Job Matching
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Testera, we make hiring smarter, faster, and more transparent. Our
            platform connects job seekers with employers through AI-driven tests
            designed to assess real-world skills.
          </p>
        </div>

        <Tabs defaultValue="employers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="employers">For Employers</TabsTrigger>
            <TabsTrigger value="jobseekers">For Job Seekers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="employers" className="mt-0">
            <div className="space-y-16">
              {EmployerFeatures.map((feature) => {
                const Demo = feature.demo;
                return (
                  <div key={feature.title} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-testera-emerald">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                    <Demo />
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="jobseekers" className="mt-0">
            <div className="space-y-16">
              {JobSeekerFeatures.map((feature) => {
                const Demo = feature.demo;
                return (
                  <div key={feature.title} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-testera-emerald">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                    <Demo />
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};