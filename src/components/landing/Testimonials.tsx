import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="py-20 px-4 dark:bg-background bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-[#F9F6EE] text-[#36454F]">
          What Our Users Are Saying About Testera
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.author} className="md:basis-1/1">
                <div className="dark:bg-[#222222] bg-gray-50 p-8 rounded-[24px] border dark:border-white/10 border-gray-200">
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