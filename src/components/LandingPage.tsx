
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  MessageSquare, 
  Phone 
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { TestimonialCard } from './TestimonialCard';
import { BenefitCard } from './BenefitCard';
import { FAQSection } from './FAQSection';
import { StatsSection } from './StatsSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-journey-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/journey-lp@main/dist/lovable-uploads/4cdd1778-1d53-4e68-9891-c7497be5509f.png" 
              alt="Journey Consult" 
              className="h-8 md:h-10"
            />
            <WhatsAppButton 
              text="Falar com especialista"
              variant="outline"
              size="sm"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-journey-gray-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-journey-orange/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-journey-orange/10 text-journey-orange border-journey-orange/20">
                Consultoria Especializada em Customer Success
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-journey-gray-900 mb-6 leading-tight">
                Estruture seu CS com quem 
                <span className="text-journey-orange"> entende do assunto!</span>
              </h1>
              <p className="text-xl text-journey-gray-600 mb-8 leading-relaxed">
                Transforme seu Customer Success com diagnósticos precisos e aplicação prática para resultados escaláveis e metrificáveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  text="Converse agora no WhatsApp"
                  size="lg"
                  className="text-lg px-8 py-4"
                />
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-journey-gray-300 hover:border-journey-orange hover:text-journey-orange"
                  onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba mais
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-journey-orange/20 to-journey-orange-light/20 rounded-2xl blur-3xl transform rotate-6"></div>
                <Card className="relative bg-white border-journey-gray-200 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-journey-orange rounded-full flex items-center justify-center">
                          <MessageSquare className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-journey-gray-900">Consultoria Prática</h3>
                          <p className="text-journey-gray-600">Colocamos a mão na massa</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-journey-orange/10 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-journey-orange rounded-sm"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-journey-gray-900">Resultados Metrificáveis</h3>
                          <p className="text-journey-gray-600">Acompanhamento contínuo</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-journey-orange/10 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-journey-orange rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-journey-gray-900">Escalabilidade</h3>
                          <p className="text-journey-gray-600">Frameworks testados</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-journey-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-journey-gray-900 mb-6">
              Por que contratar a <span className="text-journey-orange">Journey Consult?</span>
            </h2>
            <p className="text-xl text-journey-gray-600 leading-relaxed">
              Você enfrenta desafios em prever receitas e ampliar a retenção, e todos os diagnósticos realizados não trazem os resultados desejados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <Card className="bg-white border-journey-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-journey-gray-900 mb-4">
                    O Problema das Consultorias Tradicionais
                  </h3>
                  <p className="text-journey-gray-600 mb-6">
                    Isso acaba acontecendo porque muitas soluções ficam no papel e não acompanham a execução prática do plano.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-journey-gray-600">Diagnósticos que não saem do papel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-journey-gray-600">Falta de acompanhamento prático</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-journey-gray-600">Resultados não mensuráveis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in">
              <Card className="bg-gradient-to-br from-journey-orange to-journey-orange-light border-0 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Nossa Abordagem Diferenciada
                  </h3>
                  <p className="mb-6 text-white/90">
                    Na Journey Consult, vamos além da consultoria tradicional. Estruturamos o Customer Success junto com você, aplicando frameworks testados e oferecendo suporte contínuo.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">Execução prática dos planos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">Acompanhamento contínuo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">Resultados escaláveis e metrificáveis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              title="Aumento da Retenção"
              description="Estratégias comprovadas por especialistas para reduzir churn"
              icon="📈"
            />
            <BenefitCard 
              title="Maior Previsibilidade"
              description="Análises precisas e acompanhamento contínuo de métricas"
              icon="🎯"
            />
            <BenefitCard 
              title="Escalonamento"
              description="Frameworks prontos e suporte dedicado para crescer"
              icon="🚀"
            />
            <BenefitCard 
              title="Crescimento Real"
              description="Consultoria que coloca a mão na massa para resultados"
              icon="💪"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-journey-gray-900 mb-6">
              Provas e <span className="text-journey-orange">Credibilidade</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCard 
              quote="A consultoria prática da Journey Consult foi decisiva para a transformação do nosso CS. Com suporte e estratégias customizadas, nossos índices de retenção e escalabilidade melhoraram significativamente."
              author="Gerente de CS de grande empresa"
            />
            
            <div className="text-center mt-12 animate-fade-in">
              <Card className="bg-journey-gray-50 border-journey-gray-200 inline-block">
                <CardContent className="p-6">
                  <p className="text-journey-gray-700 font-semibold">
                    Mais de <span className="text-journey-orange text-2xl font-bold">95%</span> dos nossos clientes já comprovaram o impacto positivo da nossa metodologia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-journey-orange to-journey-orange-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu Customer Success?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Conheça nossos cases de sucesso e veja como podemos ajudar o seu negócio a alcançar novos patamares.
            </p>
            <WhatsAppButton 
              text="Fale agora com um especialista"
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 bg-white text-journey-orange hover:bg-journey-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-journey-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/journey-lp@main/dist/lovable-uploads/f5e92bce-e087-4a55-bdc5-8f9bbeb1387c.png" 
              alt="Journey Consult" 
              className="h-8 mb-4 md:mb-0"
            />
            <div className="flex items-center gap-6">
              <WhatsAppButton 
                text="WhatsApp"
                variant="ghost"
                size="sm"
                className="text-white hover:text-journey-orange"
              />
              <p className="text-journey-gray-400 text-sm">
                © 2024 Journey Consult. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
