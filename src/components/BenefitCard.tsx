
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-white border-journey-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-journey-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-journey-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
