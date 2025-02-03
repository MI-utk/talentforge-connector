import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Thanks to Testera's AI assessments, I was able to showcase my real skills and land my dream job in tech!",
    author: "Michael R.",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    quote: "The practice assessments helped me understand exactly what employers were looking for. Great platform!",
    author: "Emily T.",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export const EmployeeTestimonials = () => {
  return (
    <section className="py-20 px-4 dark:bg-background bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          Success Stories from Job Seekers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="dark:bg-[#222222] bg-gray-50 p-8 rounded-[24px] border dark:border-white/10 border-gray-200"
            >
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
                  <p className="font-semibold dark:text-[#F0EAD6] text-[#36454F]">{testimonial.author}</p>
                  <p className="dark:text-[#E2DFD2] text-[#36454F]">{testimonial.role}</p>
                </div>
              </div>
              <p className="dark:text-[#E2DFD2] text-[#36454F]">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};