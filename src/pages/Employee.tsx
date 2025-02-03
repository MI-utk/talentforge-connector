import { EmployeeHero } from "@/components/employee/EmployeeHero";
import { ActiveCompanies } from "@/components/employee/ActiveCompanies";
import { ActiveAssessments } from "@/components/employee/ActiveAssessments";
import { EmployeeHowItWorks } from "@/components/employee/EmployeeHowItWorks";
import { Navigation } from "@/components/landing/Navigation";

const Employee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EmployeeHero />
      <ActiveCompanies />
      <ActiveAssessments />
      <EmployeeHowItWorks />
    </div>
  );
};

export default Employee;