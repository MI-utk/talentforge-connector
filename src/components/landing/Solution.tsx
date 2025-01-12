import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef } from "react";

const EmployerFeatures = [
  {
    title: "AI-Powered Job Creation",
    description: "Publish job listings in seconds with AI assistance that generates job descriptions tailored to real-world job requirements.",
    image: "/lovable-uploads/f912ad5b-2bc6-45ae-a770-d0e04e518779.png"
  },
  {
    title: "Customizable Assessments",
    description: "Design job tests with ease using AI-generated questions that simulate the tasks candidates will face on the job.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Versatile Question Formats",
    description: "Choose from multiple question types: MCQs, audio, video, and descriptive questions for a well-rounded evaluation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "AI-Driven Candidate Scoring",
    description: "Assess candidates quickly and accurately using AI-powered scoring that ensures fair and unbiased results.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
];

const JobSeekerFeatures = [
  {
    title: "Increase Your Visibility",
    description: "Showcase your skills to a wide range of employers without the need for resumes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Take job tests that simulate actual tasks on the job, helping you improve your skills while preparing for the future.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Apply on Your Schedule",
    description: "Complete job tests and apply for jobs at your own pace, without the need to adhere to rigid schedules.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "One Test, Multiple Opportunities",
    description: "Take a single generic test recognized by multiple companies, boosting your chances of getting hired across a range of industries.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
];

export const Solution = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.feature-section').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-testera-emerald">
              Introducing Testera —The Future of Job Matching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Testera, we make hiring smarter, faster, and more transparent. Our
              platform connects job seekers with employers through AI-driven tests
              designed to assess real-world skills.
            </p>
          </div>
        </div>

        <Tabs defaultValue="employers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 sticky top-4 z-10 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="employers">For Employers</TabsTrigger>
            <TabsTrigger value="jobseekers">For Job Seekers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="employers" className="mt-0">
            <div className="space-y-0">
              {EmployerFeatures.map((feature) => (
                <div 
                  key={feature.title} 
                  className="feature-section min-h-screen flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
                >
                  <div className="px-4 py-16 max-w-4xl mx-auto">
                    <div className="mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-testera-emerald">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobseekers" className="mt-0">
            <div className="space-y-0">
              {JobSeekerFeatures.map((feature) => (
                <div 
                  key={feature.title} 
                  className="feature-section min-h-screen flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
                >
                  <div className="px-4 py-16 max-w-4xl mx-auto">
                    <div className="mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-testera-emerald">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};