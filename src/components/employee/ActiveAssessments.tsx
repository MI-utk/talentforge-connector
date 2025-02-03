import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
    isNew: false
  },
  {
    title: "Software Developer",
    company: "Test2",
    location: "Mumbai, India",
    type: "Full time",
    workMode: "Remote",
    tags: ["JavaScript", "React", "Node.js"],
    description: "Join our growing team as a Software Developer and help build cutting-edge web applications. The ideal candidate will have strong experience with modern JavaScript frameworks and a passion for clean, maintainable code...",
    isNew: true
  },
  {
    title: "Marketing Manager",
    company: "Test2",
    location: "Chennai, India",
    type: "Full time",
    workMode: "Hybrid",
    tags: ["Digital Marketing", "Brand Management", "Analytics"],
    description: "We're looking for an experienced Marketing Manager to lead our marketing initiatives. The successful candidate will develop and execute marketing strategies, manage campaigns, and analyze market trends...",
    isNew: false
  },
  {
    title: "Data Scientist",
    company: "Test2",
    location: "Pune, India",
    type: "Full time",
    workMode: "Hybrid",
    tags: ["Machine Learning", "Python", "Data Analysis"],
    description: "Join our data science team to help derive insights from complex datasets. The ideal candidate will have experience with machine learning algorithms, statistical analysis, and data visualization...",
    isNew: true
  },
  {
    title: "HR Manager",
    company: "Test2",
    location: "Hyderabad, India",
    type: "Full time",
    workMode: "On-site",
    tags: ["Recruitment", "Employee Relations", "HR Policy"],
    description: "We are seeking an experienced HR Manager to oversee all aspects of human resources management. The successful candidate will handle recruitment, employee relations, policy development, and more...",
    isNew: false
  },
  {
    title: "Product Manager",
    company: "Test2",
    location: "Kolkata, India",
    type: "Full time",
    workMode: "Remote",
    tags: ["Product Strategy", "Agile", "User Experience"],
    description: "Join us as a Product Manager to help shape the future of our products. You'll work closely with development teams, stakeholders, and users to define product strategy and roadmap...",
    isNew: true
  },
  {
    title: "Sales Executive",
    company: "Test2",
    location: "Ahmedabad, India",
    type: "Full time",
    workMode: "Hybrid",
    tags: ["B2B Sales", "Client Relations", "Negotiation"],
    description: "We're looking for a dynamic Sales Executive to join our growing team. The ideal candidate will have experience in B2B sales, strong communication skills, and a track record of meeting sales targets...",
    isNew: false
  }
];

export const ActiveAssessments = () => {
  return (
    <div className="py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-[#F9F6EE] text-[#36454F] text-center">
        Currently Active Assessments
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {assessments.map((assessment, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col">
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
            <CardContent className="flex-grow">
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
            <CardFooter>
              <Button className="w-full bg-[#36454F] hover:bg-[#2A363F] text-white">Give Assessment</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          to="/assessments" 
          className="text-sm font-medium hover:underline dark:text-[#F0EAD6] text-[#36454F]"
        >
          Browse all assessments
        </Link>
      </div>
    </div>
  );
};