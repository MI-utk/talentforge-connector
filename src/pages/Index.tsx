import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Check, FileText, Edit3, Share2, BarChart3, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link } from "react-router-dom";

// Navigation Component
const Navigation = () => {
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

// Hero Component
const Hero = () => {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden dark:bg-background bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24">
        <div className="flex flex-col items-center gap-8">
          <div className="text-shadow-lg max-w-4xl">
            <img 
              src="/lovable-uploads/d65dd7d2-7249-4d0b-92f1-01d6c26d28b4.png" 
              alt="Testera Logo" 
              className="w-32 h-32 mx-auto mb-8 animate-glow rounded-xl"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg dark:text-[#F9F6EE] text-[#36454F]">
              Create and Evaluate Job Assessments using AI
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 drop-shadow-lg dark:text-[#F0EAD6] text-[#36454F]">
              Tell us who you want to hire
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <Input 
                type="text" 
                placeholder="I want to hire mechanical engineer for steel rods plant"
                className="bg-white dark:bg-gray-800 dark:text-[#E2DFD2] text-[#36454F] placeholder:text-gray-500 dark:placeholder:text-gray-400 h-12"
              />
              <Button 
                size="lg" 
                className="bg-[#006BFF] hover:bg-[#0055CC] text-white font-semibold shadow-lg whitespace-nowrap h-12"
              >
                Create Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// HowItWorks Component
const steps = [
  {
    number: "1",
    title: "Create Job Description and Assessment using AI",
    description: "Testera uses latest AI models to create job descriptions and tests which are specific to your industry and job type",
    icon: FileText,
    iconColor: "from-orange-400 to-red-500",
  },
  {
    number: "2",
    title: "Edit, Remove or Add Questions",
    description: "Choose from video, audio, descriptive, and MCQ questions types to assess candidates on hard and soft skills through diverse mediums",
    icon: Edit3,
    iconColor: "from-blue-400 to-purple-500",
  },
  {
    number: "3",
    title: "Publish and Share the assessment",
    description: "Share assessments links privately to candidates or post your job on Testera's public job board to let anyone apply",
    icon: Share2,
    iconColor: "from-teal-400 to-emerald-500",
  },
  {
    number: "4",
    title: "Review Results",
    description: "Testera AI evaluates, scores, and provides details feedback on each question for every candidate responses so you can skip to reviewing the best candidates.",
    icon: BarChart3,
    iconColor: "from-green-400 to-emerald-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          Simple, 4 Step Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative bg-[#F1F0FB] dark:bg-[#222222] border-border text-card-foreground hover:shadow-xl transition-shadow duration-300 group rounded-[24px] p-6"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-muted dark:text-[#F0EAD6] text-[#36454F] flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.iconColor} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 blur-lg animate-pulse" style={{ background: `linear-gradient(135deg, ${step.iconColor})` }} />
                  <Icon className="w-8 h-8 text-background relative z-10" />
                </div>
                <h3 className="text-xl text-center mb-2 dark:text-[#F0EAD6] text-[#36454F]">
                  {step.title}
                </h3>
                <p className="dark:text-[#E2DFD2] text-[#36454F]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const faqs = [
  {
    question: "How do I create a job posting?",
    answer: "It's easy! Simply provide job details, and our AI will generate the perfect job description for you.",
  },
  {
    question: "Can I customize the tests?",
    answer: "Yes! You can create custom assessments or use our pre-generated, real-world scenarios based on the role.",
  },
  {
    question: "What types of questions can I create?",
    answer: "You can create MCQs, audio/video questions, and descriptive questions to evaluate a candidate's skills in depth.",
  },
  {
    question: "How do I know if I'm getting hired?",
    answer: "Candidates who perform well on assessments are shortlisted, and employers are notified as soon as the results are in.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          Common Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="dark:text-[#F0EAD6] text-[#36454F]">{faq.question}</AccordionTrigger>
              <AccordionContent className="dark:text-[#E2DFD2] text-[#36454F]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
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

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;