"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content:
      "John is an exceptional developer. His attention to detail and creative problem-solving skills make him stand out.",
    avatar: "/avatar.jpg?height=100&width=100",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO, InnovateTech",
    content:
      "Working with John was a pleasure. He delivered our project on time and exceeded our expectations.",
    avatar: "/avatar.jpg?height=100&width=100",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Product Manager, StartupX",
    content:
      "John's expertise in modern web technologies helped us create a cutting-edge platform. Highly recommended!",
    avatar: "/avatar.jpg?height=100&width=100",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <Avatar className="w-24 h-24 mx-auto mb-6">
                <AvatarImage
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback>
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <p className="text-xl mb-6 italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <h3 className="text-lg font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
