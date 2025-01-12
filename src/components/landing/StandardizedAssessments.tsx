import { Clock, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const assessments = [
  {
    id: 1,
    name: "Frontend Development",
    timeLimit: "60 minutes",
    salaryRange: "$90,000 - $140,000",
    applicants: 234,
  },
  {
    id: 2,
    name: "Data Structures & Algorithms",
    timeLimit: "90 minutes",
    salaryRange: "$100,000 - $160,000",
    applicants: 456,
  },
  {
    id: 3,
    name: "System Design",
    timeLimit: "120 minutes",
    salaryRange: "$120,000 - $180,000",
    applicants: 321,
  },
  {
    id: 4,
    name: "Machine Learning",
    timeLimit: "75 minutes",
    salaryRange: "$130,000 - $190,000",
    applicants: 567,
  },
  {
    id: 5,
    name: "DevOps Engineering",
    timeLimit: "90 minutes",
    salaryRange: "$110,000 - $170,000",
    applicants: 432,
  },
  {
    id: 6,
    name: "Cloud Architecture",
    timeLimit: "120 minutes",
    salaryRange: "$140,000 - $200,000",
    applicants: 654,
  },
  {
    id: 7,
    name: "Mobile Development",
    timeLimit: "60 minutes",
    salaryRange: "$95,000 - $150,000",
    applicants: 345,
  },
  {
    id: 8,
    name: "Database Design",
    timeLimit: "75 minutes",
    salaryRange: "$100,000 - $160,000",
    applicants: 543,
  },
];

export const StandardizedAssessments = () => {
  return (
    <section className="py-16 px-4 bg-testera-banana">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-testera-emerald">
          Standardized Assessments
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
            {assessments.map((assessment) => (
              <CarouselItem
                key={assessment.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
              >
                <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                  <h3 className="text-lg font-semibold mb-3 text-testera-emerald">
                    {assessment.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2 text-testera-firefly">
                    <Clock className="h-4 w-4" />
                    <span>{assessment.timeLimit}</span>
                  </div>
                  <p className="text-testera-firefly mb-2">{assessment.salaryRange}</p>
                  <div className="flex items-center gap-2 mb-4 text-testera-firefly">
                    <Users className="h-4 w-4" />
                    <span>{assessment.applicants} applicants</span>
                  </div>
                  <Button
                    className="mt-auto w-full bg-testera-emerald hover:bg-testera-firefly text-white"
                  >
                    View Now
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