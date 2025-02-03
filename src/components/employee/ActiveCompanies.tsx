import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const companies = [
  {
    name: "TechCorp Solutions",
    logo: "/placeholder.svg",
    location: "San Francisco, CA",
    industry: "Information Technology",
    activeAssessments: 12
  },
  {
    name: "InnovatePro",
    logo: "/placeholder.svg",
    location: "New York, NY",
    industry: "Software Development",
    activeAssessments: 8
  },
  {
    name: "DataSphere Analytics",
    logo: "/placeholder.svg",
    location: "Austin, TX",
    industry: "Data Analytics",
    activeAssessments: 15
  }
];

export const ActiveCompanies = () => {
  return (
    <div className="py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-[#F9F6EE] text-[#36454F] text-center">
        Active Companies
      </h2>
      
      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent className="-ml-4">
          {companies.map((company, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3">
              <Card className="mx-2 cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <CardTitle className="text-xl dark:text-[#F9F6EE] text-[#36454F]">
                        {company.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm dark:text-[#E2DFD2] text-[#36454F] mt-1">
                        <MapPin size={16} />
                        <span>{company.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm dark:text-[#E2DFD2] text-[#36454F]">
                      <Briefcase size={16} />
                      <span>{company.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium dark:text-[#F0EAD6] text-[#36454F]">
                      <Building2 size={16} />
                      <span>{company.activeAssessments} Active Assessments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-center mt-8">
        <Link 
          to="/companies" 
          className="text-sm font-medium hover:underline dark:text-[#F0EAD6] text-[#36454F]"
        >
          Browse all companies
        </Link>
      </div>
    </div>
  );
};
