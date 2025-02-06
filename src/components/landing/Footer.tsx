import { Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-[#F9F6EE] text-[#36454F]">Testera</h3>
            <p className="dark:text-[#E2DFD2] text-[#36454F]">
              AI-Powered Skill Assessments for Modern Hiring
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-[#F9F6EE] text-[#36454F]">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-[#F9F6EE] text-[#36454F]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 dark:text-[#F9F6EE] text-[#36454F]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="dark:text-[#E2DFD2] text-[#36454F] hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center dark:text-[#E2DFD2] text-[#36454F]">
          <p>&copy; {new Date().getFullYear()} Testera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};