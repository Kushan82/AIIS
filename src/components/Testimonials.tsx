import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mx-4">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Michael helped me find the perfect home insurance policy that provided excellent coverage while staying within my budget. His knowledge and attention to detail made the process easy and stress-free.",
      name: "Sarah Johnson",
      title: "Homeowner",
      rating: 5
    },
    {
      quote: "As a small business owner, I was overwhelmed by insurance options. Michael took the time to understand my business needs and recommended the perfect coverage. I couldn't be happier with his service.",
      name: "David Miller",
      title: "Business Owner",
      rating: 5
    },
    {
      quote: "After an accident, Michael was there every step of the way during the claims process. His guidance was invaluable, and I'm grateful for his exceptional service and support.",
      name: "Jennifer Lee",
      title: "Auto Insurance Client",
      rating: 5
    },
    {
      quote: "Michael's expertise in life insurance helped me secure my family's financial future. He explained complex policies in simple terms and found a plan that fit my needs perfectly.",
      name: "Robert Wilson",
      title: "Life Insurance Client",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible testimonials based on screen size
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 1
  );

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about their experience.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            {/* Mobile (show one testimonial) */}
            <div className="w-full md:hidden">
              <Testimonial 
                quote={testimonials[currentIndex].quote}
                name={testimonials[currentIndex].name}
                title={testimonials[currentIndex].title}
                rating={testimonials[currentIndex].rating}
              />
            </div>
            
            {/* Desktop (show multiple testimonials) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons (mobile only) */}
          <div className="md:hidden flex justify-center mt-6">
            <button 
              onClick={prevTestimonial}
              className="mx-2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="mx-2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;