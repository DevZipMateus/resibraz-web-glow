import { Building2, Users, Wrench, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, number: "18+", label: "Anos de experiência" },
    { icon: Users, number: "1000+", label: "Clientes atendidos" },
    { icon: Wrench, number: "7", label: "Segmentos de atuação" },
    { icon: TrendingUp, number: "100%", label: "Compromisso com qualidade" },
  ];

  return (
    <section id="sobre" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a RESIBRAZ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma empresa brasileira com tradição e inovação em soluções de aquecimento elétrico industrial
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Nossa história</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desde 2006, a RESIBRAZ tem se consolidado como referência no mercado brasileiro 
                  de aquecimento elétrico industrial. Nossa jornada começou com o compromisso de 
                  oferecer soluções técnicas de alta qualidade para diversos segmentos da indústria.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Nossa missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer produtos e serviços de aquecimento elétrico industrial com excelência técnica, 
                  qualidade superior e atendimento personalizado, contribuindo para o sucesso e 
                  eficiência dos processos industriais de nossos clientes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Segmentos de atuação</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Máquinas extrusora",
                    "Máquinas sopradora", 
                    "Máquinas injetora",
                    "Construção civil",
                    "Automobilística",
                    "Hospitais",
                    "Agronegócio",
                    "Estufas industriais"
                  ].map((segment) => (
                    <div key={segment} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{segment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="card-elegant p-8 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-20 h-20 text-primary/30" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Tradição e inovação</h4>
                <p className="text-muted-foreground">
                  Combinamos experiência consolidada com tecnologia moderna para 
                  entregar as melhores soluções em aquecimento elétrico industrial.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;