import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const employerFeatures = [
  {
    title: "Streamlined Hiring Process",
    description: "Post jobs and review candidates all in one place with our intuitive platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "AI-Powered Matching",
    description: "Let our AI find the perfect candidates based on skills and experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Real-time Analytics",
    description: "Track your hiring pipeline and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const candidateFeatures = [
  {
    title: "Smart Job Matching",
    description: "Find roles that match your skills and experience with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    title: "Skill Assessments",
    description: "Showcase your abilities through our comprehensive skill assessment platform.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Career Growth",
    description: "Access resources and tools to help you grow in your career.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export const TabsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="employers" className="w-full">
          <div className="text-center mb-12">
            <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-8">
              <TabsTrigger
                value="employers"
                className="ring-offset-background focus-visible:ring-ring data-[state=active]:text-foreground text-base"
              >
                For Employers
              </TabsTrigger>
              <TabsTrigger
                value="candidates"
                className="ring-offset-background focus-visible:ring-ring data-[state=active]:text-foreground text-base"
              >
                For Candidates
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="employers" className="mt-0">
            <div className="grid md:grid-cols-3 gap-8">
              {employerFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-testera-emerald">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="mt-0">
            <div className="grid md:grid-cols-3 gap-8">
              {candidateFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-testera-emerald">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};