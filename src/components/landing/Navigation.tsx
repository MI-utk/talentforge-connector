import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-testera-600">
              Testera
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-gray-600 hover:text-testera-600">
              Features
            </Link>
            <Link to="#pricing" className="text-gray-600 hover:text-testera-600">
              Pricing
            </Link>
            <Link to="#about" className="text-gray-600 hover:text-testera-600">
              About
            </Link>
            <Link to="#contact" className="text-gray-600 hover:text-testera-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-testera-600">
              Sign In
            </Button>
            <Button className="bg-testera-600 hover:bg-testera-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};