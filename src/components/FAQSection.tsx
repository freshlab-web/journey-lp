
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como a consultoria da Journey se diferencia das demais?",
    answer: "Nossa abordagem une diagnóstico com execução prática, colocando a mão na massa para transformar o seu CS, muito diferente das demais que ensinam apenas teoria."
  },
  {
    question: "Quais resultados posso esperar?",
    answer: "Alguns dos resultados comprovados incluem a redução de churn, crescimento previsível e escalabilidade operacional."
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "Oferecemos suporte contínuo e aplicamos frameworks práticos desde a implementação até a consolidação dos resultados."
  },
  {
    question: "Existe garantia de retorno?",
    answer: "Sim, realizamos análises extras e ajustes estratégicos sem custos adicionais se os resultados prometidos não forem atingidos."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-journey-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-journey-gray-900 mb-6">
              Perguntas <span className="text-journey-orange">Frequentes</span>
            </h2>
            <p className="text-xl text-journey-gray-600">
              Tire suas dúvidas sobre nossa consultoria especializada
            </p>
          </div>

          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-journey-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-journey-gray-900 hover:text-journey-orange transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-journey-gray-600 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
