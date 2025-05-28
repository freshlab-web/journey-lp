
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <Card className="bg-gradient-to-br from-journey-gray-50 to-white border-journey-gray-200 shadow-lg animate-scale-in">
      <CardContent className="p-8 md:p-12">
        <div className="relative">
          <div className="text-6xl text-journey-orange/20 font-serif absolute -top-4 -left-4">
            "
          </div>
          <blockquote className="text-xl md:text-2xl text-journey-gray-700 italic leading-relaxed mb-6 relative z-10">
            {quote}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-journey-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <div>
              <p className="font-semibold text-journey-gray-900">– {author}</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-journey-orange text-sm">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
