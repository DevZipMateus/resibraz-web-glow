import { Flame, Thermometer, Zap, Cable, Settings, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Flame,
      title: "Resistências coleira",
      description: "Resistências coleira em mica ou cerâmica para máquinas industriais",
      features: ["Alta durabilidade", "Diversos tamanhos", "Aplicação versátil"]
    },
    {
      icon: Zap,
      title: "Resistências tubulares",
      description: "Resistências tubulares para aquecimento industrial e processos específicos",
      features: ["Resistência à corrosão", "Distribuição uniforme", "Longa vida útil"]
    },
    {
      icon: Target,
      title: "Resistências cartucho",
      description: "Resistências cartucho para aplicações de precisão e controle de temperatura",
      features: ["Controle preciso", "Instalação fácil", "Alta eficiência"]
    },
    {
      icon: Settings,
      title: "Resistências em quartzo",
      description: "Resistências em quartzo ou infravermelho para aquecimento rápido",
      features: ["Aquecimento instantâneo", "Economia de energia", "Tecnologia avançada"]
    },
    {
      icon: Thermometer,
      title: "Termopares",
      description: "Termopares tipo J, K, mineral, PT100 e outros para medição de temperatura",
      features: ["Precisão garantida", "Diversos tipos", "Aplicação industrial"]
    },
    {
      icon: Cable,
      title: "Cabos de alta temperatura",
      description: "Cabos de alta temperatura em silicone ou híbrido para ambientes extremos",
      features: ["Resistência térmica", "Flexibilidade", "Segurança garantida"]
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Nossos serviços
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Oferecemos uma linha completa de produtos para aquecimento elétrico industrial, 
              atendendo às necessidades específicas de cada segmento
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-4 sm:p-6 group hover:scale-105 transition-all duration-300">
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
                  <a
                    href="https://wa.me/5511970394816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent font-medium text-xs sm:text-sm transition-colors duration-300"
                  >
                    Solicitar orçamento →
                  </a>
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
              <a
                href="https://wa.me/5511970394816"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;