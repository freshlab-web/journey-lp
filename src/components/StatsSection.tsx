
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    number: "95%",
    label: "Taxa de Sucesso",
    description: "Dos clientes comprovam resultados positivos"
  },
  {
    number: "50+",
    label: "Empresas Atendidas", 
    description: "Transformações reais em Customer Success"
  },
  {
    number: "2x",
    label: "Aumento Médio",
    description: "Na retenção de clientes após consultoria"
  },
  {
    number: "24/7",
    label: "Suporte Contínuo",
    description: "Acompanhamento durante toda jornada"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white border-b border-journey-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-journey-gray-50 border-journey-gray-200 text-center hover:shadow-lg transition-all duration-300 animate-fade-in group">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-journey-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="font-semibold text-journey-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-journey-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
