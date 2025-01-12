import { Circle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    company: "TechCorp",
    role: "Senior Frontend Developer",
    location: "New York, NY",
    salaryRange: "$120,000 - $150,000",
  },
  {
    id: 2,
    company: "DataSys",
    role: "Data Scientist",
    location: "San Francisco, CA",
    salaryRange: "$130,000 - $160,000",
  },
  {
    id: 3,
    company: "CloudNet",
    role: "DevOps Engineer",
    location: "Austin, TX",
    salaryRange: "$110,000 - $140,000",
  },
  {
    id: 4,
    company: "AILabs",
    role: "Machine Learning Engineer",
    location: "Boston, MA",
    salaryRange: "$140,000 - $170,000",
  },
  {
    id: 5,
    company: "SecureIT",
    role: "Security Analyst",
    location: "Chicago, IL",
    salaryRange: "$100,000 - $130,000",
  },
  {
    id: 6,
    company: "WebFlow",
    role: "UX Designer",
    location: "Seattle, WA",
    salaryRange: "$90,000 - $120,000",
  },
  {
    id: 7,
    company: "MobileTech",
    role: "Mobile Developer",
    location: "Miami, FL",
    salaryRange: "$115,000 - $145,000",
  },
  {
    id: 8,
    company: "FinTech",
    role: "Backend Developer",
    location: "Denver, CO",
    salaryRange: "$125,000 - $155,000",
  },
];

export const ActiveJobs = () => {
  return (
    <section className="py-16 px-4 bg-testera-mint">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-testera-emerald">
          Featured Jobs
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {jobs.map((job) => (
              <CarouselItem
                key={job.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
              >
                <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Circle className="h-8 w-8 text-testera-emerald" fill="currentColor" />
                    <span className="font-semibold text-testera-emerald">
                      {job.company}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-testera-emerald">
                    {job.role}
                  </h3>
                  <p className="text-testera-firefly mb-1">{job.location}</p>
                  <p className="text-testera-firefly mb-4">{job.salaryRange}</p>
                  <Button
                    className="mt-auto w-full bg-testera-emerald hover:bg-testera-firefly text-white"
                  >
                    Apply Now
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};