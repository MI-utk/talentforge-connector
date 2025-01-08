import { Star } from "lucide-react";

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
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Users Are Saying About Testera
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-lg shadow-lg"
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
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};