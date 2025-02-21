import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold dark:text-[#F9F6EE] text-[#36454F]">
              Testera
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center items-center space-x-8">
            <Link to="#features" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              Features
            </Link>
            <Link to="#pricing" className="dark:text-[#F0EAD6] text-[#36454F] font-medium hover:opacity-80 transition-opacity">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              Sign In
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/employee" className="dark:text-[#F0EAD6] text-[#36454F] hover:opacity-80">
                Testera for Employees
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};