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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Benefits Component
const employerBenefits = [
  {
    title: "Save Time & Money",
    description: "Speed up your hiring process with AI-driven assessments.",
  },
  {
    title: "Hire with Confidence",
    description: "Get deeper insights into candidates' actual skills, not just their resumes.",
  },
  {
    title: "AI-Powered Scoring",
    description: "Let AI evaluate candidates' answers and provide you with a detailed score, saving you time and ensuring objective results.",
  },
  {
    title: "Customizable Flexibility",
    description: "Tailor assessments to your exact job requirements and needs.",
  },
];

const jobSeekerBenefits = [
  {
    title: "Improve Your Hiring Chances",
    description: "Get noticed by top employers by showcasing your skills through real-world assessments.",
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Prepare for jobs by taking tests that reflect tasks you'll actually perform.",
  },
  {
    title: "AI-Powered Feedback",
    description: "Receive immediate feedback on your answers with AI-generated scores, helping you improve for future opportunities.",
  },
  {
    title: "Flexible Application Process",
    description: "Apply to jobs and complete assessments when it's convenient for you.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-[#F0EAD6] text-[#36454F]">For Employers</h3>
            <div className="space-y-8">
              {employerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-testera-green/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 dark:text-[#F0EAD6] text-[#36454F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-[#F0EAD6] text-[#36454F]">{benefit.title}</h4>
                    <p className="dark:text-[#E2DFD2] text-[#36454F] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-[#F0EAD6] text-[#36454F]">For Job Seekers</h3>
            <div className="space-y-8">
              {jobSeekerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-testera-green/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 dark:text-[#F0EAD6] text-[#36454F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-[#F0EAD6] text-[#36454F]">{benefit.title}</h4>
                    <p className="dark:text-[#E2DFD2] text-[#36454F] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-testera-emerald text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Testera</h3>
            <p className="text-testera-zircon">
              Empowering tech talent assessment worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-testera-zircon hover:text-white">About Us</a></li>
              <li><a href="#" className="text-testera-zircon hover:text-white">Services</a></li>
              <li><a href="#" className="text-testera-zircon hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-testera-zircon hover:text-white">Blog</a></li>
              <li><a href="#" className="text-testera-zircon hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-testera-zircon hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold">Stay Updated</h4>
            <p className="text-testera-zircon">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-testera-firefly text-white"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-testera-firefly text-center text-testera-zircon">
          <p>&copy; {new Date().getFullYear()} Testera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Solution Component
const EmployerFeatures = [
  {
    title: "AI-Powered Job Creation",
    description: "Publish job listings in seconds with AI assistance that generates job descriptions tailored to real-world job requirements.",
    image: "/lovable-uploads/f912ad5b-2bc6-45ae-a770-d0e04e518779.png"
  },
  {
    title: "Customizable Assessments",
    description: "Design job tests with ease using AI-generated questions that simulate the tasks candidates will face on the job.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Versatile Question Formats",
    description: "Choose from multiple question types: MCQs, audio, video, and descriptive questions for a well-rounded evaluation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "AI-Driven Candidate Scoring",
    description: "Assess candidates quickly and accurately using AI-powered scoring that ensures fair and unbiased results.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
];

const JobSeekerFeatures = [
  {
    title: "Increase Your Visibility",
    description: "Showcase your skills to a wide range of employers without the need for resumes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Practice Real-World Scenarios",
    description: "Take job tests that simulate actual tasks on the job, helping you improve your skills while preparing for the future.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Apply on Your Schedule",
    description: "Complete job tests and apply for jobs at your own pace, without the need to adhere to rigid schedules.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "One Test, Multiple Opportunities",
    description: "Take a single generic test recognized by multiple companies, boosting your chances of getting hired across a range of industries.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
];

const Solution = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-[#F9F6EE] text-[#36454F]">
            Introducing Testera —The Future of Job Matching
          </h2>
          <p className="text-xl dark:text-[#E2DFD2] text-[#36454F] max-w-3xl mx-auto">
            At Testera, we make hiring smarter, faster, and more transparent. Our
            platform connects job seekers with employers through AI-driven tests
            designed to assess real-world skills.
          </p>
        </div>

        <Tabs defaultValue="employers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="employers">For Employers</TabsTrigger>
            <TabsTrigger value="jobseekers">For Job Seekers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="employers" className="mt-0">
            <div className="space-y-16">
              {EmployerFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 dark:text-[#F9F6EE] text-[#36454F]">{feature.title}</h3>
                    <p className="text-lg dark:text-[#E2DFD2] text-[#36454F]">{feature.description}</p>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobseekers" className="mt-0">
            <div className="space-y-16">
              {JobSeekerFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 dark:text-[#F9F6EE] text-[#36454F]">{feature.title}</h3>
                    <p className="text-lg dark:text-[#E2DFD2] text-[#36454F]">{feature.description}</p>
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// WhatDoYouGet Component
const features = [
  {
    title: "Create Job Descriptions with AI",
    description: "Generate comprehensive job descriptions in seconds using AI. Our platform analyzes industry standards and your specific requirements to create accurate, engaging job posts.",
    gradient: "bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] animate-gradient"
  },
  {
    title: "Create Job Assessments with AI",
    description: "Design custom skill assessments with AI-generated questions that accurately evaluate candidates' abilities. Create relevant, challenging tests that reflect real-world scenarios.",
    gradient: "bg-gradient-to-br from-[#accbee] to-[#e7f0fd] animate-gradient"
  },
  {
    title: "Review Candidate Answers with AI",
    description: "Let AI analyze candidate responses quickly and objectively. Get detailed insights into candidates' performance with automated scoring and comprehensive feedback.",
    gradient: "bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] animate-gradient"
  },
  {
    title: "Video, Audio, MCQs, and descriptive questions",
    description: "Choose from multiple question formats to thoroughly assess candidates. Create diverse assessments that test both technical skills and soft skills through various mediums.",
    gradient: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7] animate-gradient"
  }
];

const WhatDoYouGet = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-[#F5F5F5] text-[#141414]">
          AI Is Here To Help You Hire
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-10 ${feature.gradient} flex items-center justify-center bg-[size:200%]`}>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg dark:text-[#F5F5F5] text-[#141414]">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 text-sm">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const testimonials = [
  {
    quote: "Testera made finding my dream job so easy. I was able to take a test and apply to multiple jobs at once!",
    author: "Sarah L.",
    role: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    quote: "As an employer, the AI-powered assessments saved me countless hours. The candidates we hired were exactly what we needed.",
    author: "Mark T.",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    quote: "The platform's efficiency in matching candidates with the right positions is remarkable. Highly recommended!",
    author: "David K.",
    role: "Tech Recruiter",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  },
  {
    quote: "Using Testera has transformed our hiring process. The quality of candidates has improved significantly.",
    author: "Jennifer P.",
    role: "COO",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
  {
    quote: "The assessment tools are incredibly accurate. We've reduced our time-to-hire by 50%!",
    author: "Robert M.",
    role: "Hiring Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 dark:bg-background bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          What Our Users Are Saying About Testera
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.author} className="pl-4 md:basis-1/3">
                <div className="h-full dark:bg-[#222222] bg-gray-50 p-8 rounded-[24px] border dark:border-white/10 border-gray-200">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="font-semibold dark:text-[#F0EAD6] text-[#36454F]">
                        {testimonial.author}
                      </p>
                      <p className="dark:text-[#E2DFD2] text-[#36454F]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="dark:text-[#E2DFD2] text-[#36454F]">
                    {testimonial.quote}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

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

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <WhatDoYouGet />
      <Solution />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;