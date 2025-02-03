import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F5F5F5] text-[#141414]">
          Common Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};