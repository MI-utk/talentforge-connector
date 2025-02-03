import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const EmployeeNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold dark:text-[#F9F6EE] text-[#36454F]">
              Testera
            </Link>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <Link to="/jobs" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              All Jobs
            </Link>
            <Link to="/companies" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              All Companies
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="dark:text-[#F0EAD6] text-[#36454F] hover:opacity-80">
              Sign In
            </Button>
            <Link to="/" className="text-xs dark:text-[#F0EAD6] text-[#36454F] hover:opacity-80 transition-opacity">
              Testera for Employers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};