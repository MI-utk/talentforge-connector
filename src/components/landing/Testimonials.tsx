import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Testera made finding my dream job so easy. I was able to take a test and apply to multiple jobs at once!",
    author: "Sarah L.",
    role: "Marketing Specialist",
  },
  {
    quote: "As an employer, the AI-powered assessments saved me countless hours. The candidates we hired were exactly what we needed.",
    author: "Mark T.",
    role: "HR Manager",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Users Are Saying
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};