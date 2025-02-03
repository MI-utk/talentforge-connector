import { EmployeeHero } from "@/components/employee/EmployeeHero";
import { ActiveCompanies } from "@/components/employee/ActiveCompanies";
import { ActiveAssessments } from "@/components/employee/ActiveAssessments";
import { EmployeeHowItWorks } from "@/components/employee/EmployeeHowItWorks";

const Employee = () => {
  return (
    <div className="min-h-screen">
      <EmployeeHero />
      <ActiveCompanies />
      <ActiveAssessments />
      <EmployeeHowItWorks />
    </div>
  );
};

export default Employee;