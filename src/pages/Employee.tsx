import { EmployeeHero } from "@/components/employee/EmployeeHero";
import { ActiveAssessments } from "@/components/employee/ActiveAssessments";
import { ActiveCompanies } from "@/components/employee/ActiveCompanies";
import { Navigation } from "@/components/landing/Navigation";

const Employee = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EmployeeHero />
      <ActiveAssessments />
      <ActiveCompanies />
    </div>
  );
};

export default Employee;