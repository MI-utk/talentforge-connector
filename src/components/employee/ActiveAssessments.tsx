import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Clock, MapPin } from "lucide-react";

const assessments = [
  {
    title: "Junior Production Manager",
    company: "Test2",
    location: "[City Name]",
    type: "Full time",
    workMode: "Fully On-site",
    tags: ["Production management", "Quality control", "Team coordination"],
    description: "We are seeking a motivated Junior Production Manager to join our dynamic team at an aluminium flat rolled products factory. In this role, you will assist in overseeing the production process, ensuring efficiency and adherence to company standards. You will work closely with senior...",
    isNew: true
  },
  {
    title: "UI/UX Expert",
    company: "Test2",
    location: "Bangalore, India",
    type: "Full time",
    workMode: "Hybrid",
    tags: ["UI Design", "UX Design", "User Research"],
    description: "We are seeking a talented UI/UX Expert to join our dynamic startup in Bangalore. The ideal candidate will have a strong background in user interface design and user experience optimization. You will be responsible for creating intuitive and engaging interfaces for our web and...",
    isNew: true
  },
  {
    title: "Junior Financial Analyst",
    company: "Test2",
    location: "Delhi, India",
    type: "Full time",
    workMode: "Fully On-site",
    tags: ["Financial Analysis", "Excel", "Data Analysis"],
    description: "We are seeking a detail-oriented Junior Financial Analyst to join our consulting firm in Delhi. The ideal candidate will assist in financial analysis, reporting, and forecasting activities. You will work closely with senior analysts to prepare financial models and...",
    isNew: true
  }
];

export const ActiveAssessments = () => {
  return (
    <div className="py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-[#F9F6EE] text-[#36454F] text-center">
        Currently Active Assessments
      </h2>
      
      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent>
          {assessments.map((assessment, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="mx-2 cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl dark:text-[#F9F6EE] text-[#36454F]">
                      {assessment.title}
                    </CardTitle>
                    {assessment.isNew && (
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100">
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm dark:text-[#E2DFD2] text-[#36454F]">
                    <Building2 size={16} />
                    <span>{assessment.company}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {assessment.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="dark:text-[#F0EAD6]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm dark:text-[#E2DFD2] text-[#36454F]">
                        <MapPin size={16} />
                        <span>{assessment.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm dark:text-[#E2DFD2] text-[#36454F]">
                        <Clock size={16} />
                        <span>{assessment.type} • {assessment.workMode}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm dark:text-[#E2DFD2] text-[#36454F] line-clamp-3">
                      {assessment.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};