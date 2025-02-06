import { EmployeeNavigation } from "@/components/employee/EmployeeNavigation";
import { EmployeeHero } from "@/components/employee/EmployeeHero";
import { EmployeeHowItWorks } from "@/components/employee/EmployeeHowItWorks";
import { ActiveAssessments } from "@/components/employee/ActiveAssessments";
import { ActiveCompanies } from "@/components/employee/ActiveCompanies";
import { EmployeeFAQ } from "@/components/employee/EmployeeFAQ";

const Employee = () => {
  return (
    <div className="min-h-screen bg-background">
      <EmployeeNavigation />
      <EmployeeHero />
      <EmployeeHowItWorks />
      <ActiveAssessments />
      <ActiveCompanies />
      <EmployeeFAQ />
    </div>
  );
};

export default Employee;