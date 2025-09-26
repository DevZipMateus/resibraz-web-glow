import { useState } from "react";
import { Flame, Thermometer, Zap, Cable, Settings, Target } from "lucide-react";
import WhatsAppNumberModal from "./WhatsAppNumberModal";
import ProductCarousel from "./ProductCarousel";
import AlternatingImage from "./AlternatingImage";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const services = [
    {
      icon: Flame,
      title: "Resistências coleira",
      description: "Resistências coleira em mica ou cerâmica para máquinas industriais",
      features: ["Alta durabilidade", "Diversos tamanhos", "Aplicação versátil"],
      images: ["/fotos divisoes/Resistências Coleira em Mica.jpeg", "/fotos divisoes/Resistências Coleira e Placa em Mica.jpeg"],
      alts: ["Resistências Coleira em Mica", "Resistências Coleira e Placa em Mica"]
    },
    {
      icon: Zap,
      title: "Resistências tubulares",
      description: "Resistências tubulares para aquecimento industrial e processos específicos",
      features: ["Resistência à corrosão", "Distribuição uniforme", "Longa vida útil"],
      images: ["/fotos divisoes/Resistência Tubular Aletada e Helicoidal.webp", "/fotos divisoes/Resistência Tubular Flex.jpeg"],
      alts: ["Resistência Tubular Aletada e Helicoidal", "Resistência Tubular Flex"]
    },
    {
      icon: Target,
      title: "Resistências cartucho",
      description: "Resistências cartucho para aplicações de precisão e controle de temperatura",
      features: ["Controle preciso", "Instalação fácil", "Alta eficiência"],
      images: ["/fotos divisoes/RESISTÊNCIAS CARTUCHO.jpg", "/fotos divisoes/RESISTÊNCIA INFRAVERMELHO CÔNCAVA.jpg"],
      alts: ["Resistências Cartucho", "Resistência Infravermelho Côncava"]
    },
    {
      icon: Settings,
      title: "Resistências em quartzo",
      description: "Resistências em quartzo ou infravermelho para aquecimento rápido",
      features: ["Aquecimento instantâneo", "Economia de energia", "Tecnologia avançada"],
      images: ["/fotos divisoes/Resistências em Quartzo.jpeg", "/fotos divisoes/Resistências em Quartzo em todos os terminais a escolha..jpg"],
      alts: ["Resistências em Quartzo", "Resistências em Quartzo - Todos os Terminais"]
    },
    {
      icon: Thermometer,
      title: "Termopares",
      description: "Termopares tipo J, K, mineral, PT100 e outros para medição de temperatura",
      features: ["Precisão garantida", "Diversos tipos", "Aplicação industrial"],
      images: ["/fotos divisoes/TERMOPAR TIPO K .jpeg", "/fotos divisoes/TERMOPAR PT100 ESPECIAL.jpeg"],
      alts: ["Termopar Tipo K", "Termopar PT100 Especial"]
    },
    {
      icon: Cable,
      title: "Cabos de alta temperatura",
      description: "Cabos de alta temperatura em silicone ou híbrido para ambientes extremos",
      features: ["Resistência térmica", "Flexibilidade", "Segurança garantida"],
      images: ["/fotos divisoes/CABO DE SILICONE 200°C.webp", "/fotos divisoes/CABO HÍBRIDO 400°C.jpg"],
      alts: ["Cabo de Silicone 200°C", "Cabo Híbrido 400°C"]
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Nossos produtos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 mb-8">
              Oferecemos uma linha completa de produtos para aquecimento elétrico industrial, 
              atendendo às necessidades específicas de cada segmento
            </p>
            
            {/* Product Carousel */}
            <div className="mb-8">
              <ProductCarousel />
            </div>
            
            {/* Catalog Button */}
            <div className="mb-8">
              <a
                href="https://wa.me/c/5511970394816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                </svg>
                <span>Ver nosso catálogo no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-4 sm:p-6 group hover:scale-105 transition-all duration-300">
                {/* Product Images */}
                <div className="w-full h-40 sm:h-48 md:h-52 lg:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden bg-muted/20">
                  <AlternatingImage
                    images={service.images}
                    alts={service.alts}
                    className="w-full h-full"
                  />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4 sm:pt-6 border-t border-border">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-primary hover:text-accent font-medium text-xs sm:text-sm transition-colors duration-300"
                  >
                    Solicitar orçamento →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="card-elegant p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto px-4">
                Nossa equipe técnica está pronta para desenvolver soluções específicas 
                para suas necessidades industriais. Entre em contato conosco.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-hero"
              >
                Falar com especialista
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppNumberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default ServicesSection;