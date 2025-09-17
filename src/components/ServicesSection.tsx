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
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nossos serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma linha completa de produtos para aquecimento elétrico industrial, 
              atendendo às necessidades específicas de cada segmento
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-6 group hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="https://wa.me/5511970394816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent font-medium text-sm transition-colors duration-300"
                  >
                    Solicitar orçamento →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="card-elegant p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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