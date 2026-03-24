'use client';

import { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'Project Manager',
    company: 'TechCorp',
    content:
      'Ever since I started using this task management app, my productivity has skyrocketed. The intuitive interface and powerful features have transformed how I organize my work.',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Esther Howard',
    role: 'Web Designer',
    company: 'Creative Studio',
    content:
      "It's truly remarkable how much more organized and focused I've become in my work. This platform has streamlined my entire design workflow and improved client collaboration.",
    avatar:
      'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
  {
    id: 3,
    name: 'Albert Flores',
    role: 'Designer',
    company: 'Innovation Labs',
    content:
      "The level of customization and flexibility this tool offers is unmatched. It's helped me stay on top of multiple projects while maintaining the highest quality standards.",
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    role: 'Marketing Director',
    company: 'Growth Agency',
    content:
      "This solution has revolutionized our team's productivity. The seamless integration and user-friendly design make project management effortless and enjoyable.",
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
  {
    id: 5,
    name: 'Robert Fox',
    role: 'Software Engineer',
    company: 'DevTech Solutions',
    content:
      'Outstanding platform that has significantly improved our development workflow. The automation features and clean interface make complex project management simple.',
    avatar:
      'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
  {
    id: 6,
    name: 'Courtney Henry',
    role: 'Product Owner',
    company: 'Startup Inc',
    content:
      "Incredible tool that has transformed how we approach product development. The collaboration features and intuitive design have boosted our team's efficiency tremendously.",
    avatar:
      'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextTestimonial, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section className="relative py-12 bg-slate-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-3">
              What Do Our Customers say?
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover firsthand experiences shared by our valued customers.
              Hear their stories, testimonials, and feedback that shed light on
              their journey with us.
            </p>
          </div>
        </div>

        {/* Testimonials Container */}
        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="flex gap-4 transition-transform duration-700 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`
                  flex-shrink-0 w-full md:w-1/3 lg:w-1/3 transition-all duration-700 ease-out
                `}>
                <div className="relative">
                  {/* Quote icon */}
                  <div className="absolute -top-2 left-4 z-10">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative p-5 pt-8 rounded-xl bg-slate-800 border border-slate-700">
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Stars */}
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 text-yellow-400 text-sm">
                            ⭐
                          </div>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-slate-200 text-sm leading-relaxed mb-5">
                        "{testimonial.content}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-9 h-9 rounded-full object-cover border-2 border-slate-600"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-slate-400 text-xs">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <div className="flex gap-1.5 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400 w-8' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
