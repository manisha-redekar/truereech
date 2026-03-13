import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Settle.io",
    text: "Reddit growth takes time, but the conversations and visibility are genuine.",
  },
  {
    company: "ECE Project Kart",
    text: "Consistent blog content helped us gradually improve our search visibility.",
  },
  {
    company: "Verzeo",
    text: "Helpful support across content, Reddit engagement, and improving our website experience.",
  },
  {
    company: "AK",
    text: "Early stages, but we are starting to see our product appear in AI-driven discussions.",
  },
  {
    company: "Trudosys",
    text: "Good quality website content and SEO blogs that match our industry well.",
  },
  {
    company: "Falcon Reality",
    text: "A steady approach to SEO content and community visibility that fits our long-term goals.",
  },
];

export const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="w-full">
      <div className="relative h-48 md:h-56 bg-white dark:bg-slate-950 rounded-xl shadow-card p-8 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />

        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
            "{testimonials[current].text}"
          </p>
          <p className="font-bold text-foreground">{testimonials[current].company}</p>
        </div>

        <div className="relative z-10 flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/30 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="h-9 w-9"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-9 w-9"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
